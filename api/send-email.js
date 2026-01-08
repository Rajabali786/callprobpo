const nodemailer = require("nodemailer");

// Vercel Serverless Function handler
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const { name, email, phone, company, message, to } = req.body || {};

    if (!name || !email || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Read SMTP credentials from environment variables set in Vercel dashboard
    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
    const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : true;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const RECIPIENT = process.env.RECIPIENT_EMAIL || to || "rajabsarfrazali2002@gmail.com";

    if (!SMTP_USER || !SMTP_PASS) {
      res.status(500).json({ error: "SMTP credentials not configured on server" });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `Website Contact: ${name} (${company || "no company"})`;
    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br />")}</p>
    `;

    const info = await transporter.sendMail({
      from: SMTP_USER,
      to: RECIPIENT,
      subject,
      html,
      replyTo: email,
    });

    return res.status(200).json({ message: "Message sent", info });
  } catch (err) {
    console.error("send-email error:", err);
    return res.status(500).json({ error: "Failed to send email", details: err.message || err });
  }
};
