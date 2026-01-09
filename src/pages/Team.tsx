import { Layout } from "@/components/layout/Layout";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import sabtain from "@/assets/images/sabtain.jpg";
import david from "@/assets/images/image1.jpg";



const leadership = [
  {
    name: "Raja Sibtain",
    image: sabtain,
    bio: "10+ years of experience in BPO and customer service management.",
    role: "Chief Executive Officer",
    Linkedin: "https://www.linkedin.com/in/raja-sibtain-70102b30b/",
    Mail: "mailto:royalerechglobes@gmail.com"
  },
  {
    name: "Sarah Mitchell",
    image: sabtain,
    bio: "Expert in operational excellence and process optimization.",
    role: "Chief Operating Officer",
    linkedin: "https://www.linkedin.com/in/raja-sibtain-70102b30b/",
    
  },
  {
    name: "David Chen",
    image: david,
    bio: "Leading technology innovation in call center solutions.",
    role: "Chief Technology Officer",
  
  },
];



const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-primary text-sm font-medium rounded-full mb-4">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet the <span className="text-gradient">Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A dedicated team of professionals committed to delivering 
              exceptional service and driving your business success.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders guiding our vision and strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mb-6">
                      <div className="w-40 h-40 mx-auto rounded-3xl bg-gradient-orange flex items-center justify-center shadow-lg group-hover:shadow-orange transition-shadow duration-300 overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover rounded-3xl"
                            />
                      </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/raja-sibtain-70102b30b/"
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-primary flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-primary flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Twitter className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary-foreground" />
                  </a>
                  <a
                    href="mailto:royalerechglobes@gmail.com"
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-primary flex items-center justify-center transition-colors duration-300 group/icon"
                  >
                    <Mail className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary-foreground" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
       {/* CEO Message */}
      <section className="section-padding bg-secondary">
        <div className="container-corporate">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={sabtain}
                alt="Richard M. Sterling - CEO"
                className="rounded-2xl shadow-corporate-xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-primary font-semibold text-sm mb-6">
                Message from Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                "Our people are our greatest asset"
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Royale Tech Globes, we believe that exceptional customer experiences 
                  start with exceptional people. Over the past 10 years, we've built 
                  a team of dedicated professionals who share our passion for service 
                  excellence.
                </p>
                <p>
                  We invest heavily in training, development, and creating a work 
                  environment where our team members can thrive. This investment pays 
                  dividends in the quality of service we deliver to our clients and 
                  their customers.
                </p>
                <p>
                  I'm proud of what we've accomplished together, and I'm excited about 
                  the future we're building. Thank you for considering GlobalConnect 
                  as your customer engagement partner.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-montserrat font-bold text-xl text-foreground">
                  Raja Sibtain
                </p>
                <p className="text-primary">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Team Culture
              </h2>
              <p className="text-lg text-muted-foreground">
                At Royale Tech bpo, we believe that great customer service starts with a great team. 
                We foster a culture of continuous learning, collaboration, and excellence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-foreground">
                    <strong>Continuous Training</strong> – Regular skill development programs 
                    to keep our team at the top of their game
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-foreground">
                    <strong>Career Growth</strong> – Clear pathways for advancement and 
                    professional development opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-foreground">
                    <strong>Work-Life Balance</strong> – Flexible scheduling and supportive 
                    work environment for our team members
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-4 bg-gradient-orange rounded-3xl opacity-10" />
              <div className="relative bg-muted rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card rounded-2xl">
                    <p className="text-4xl font-bold text-primary mb-2">200+</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-2xl">
                    <p className="text-4xl font-bold text-foreground mb-2">95%</p>
                    <p className="text-sm text-muted-foreground">Retention Rate</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-2xl">
                    <p className="text-4xl font-bold text-foreground mb-2">40+</p>
                    <p className="text-sm text-muted-foreground">Hours Training/Year</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-2xl">
                    <p className="text-4xl font-bold text-foreground mb-2">15+</p>
                    <p className="text-sm text-muted-foreground">Languages Spoken</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Team;
