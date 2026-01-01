import { Layout } from "@/components/layout/Layout";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const leadership = [
  {
    name: "Michael Anderson",
    role: "Chief Executive Officer",
    bio: "20+ years of experience in BPO and customer service management.",
    image: "MA",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Operations Officer",
    bio: "Expert in operational excellence and process optimization.",
    image: "SM",
  },
  {
    name: "David Chen",
    role: "Chief Technology Officer",
    bio: "Leading technology innovation in call center solutions.",
    image: "DC",
  },
];

const managers = [
  {
    name: "Jennifer Roberts",
    role: "Customer Success Manager",
    bio: "Dedicated to ensuring client satisfaction and success.",
    image: "JR",
  },
  {
    name: "Robert Williams",
    role: "Quality Assurance Manager",
    bio: "Ensuring highest standards in service delivery.",
    image: "RW",
  },
  {
    name: "Emily Thompson",
    role: "Training & Development Manager",
    bio: "Building skilled and professional agent teams.",
    image: "ET",
  },
  {
    name: "James Wilson",
    role: "Operations Supervisor",
    bio: "Overseeing day-to-day call center operations.",
    image: "JW",
  },
  {
    name: "Maria Garcia",
    role: "Team Lead - Inbound",
    bio: "Leading inbound support teams to excellence.",
    image: "MG",
  },
  {
    name: "Thomas Brown",
    role: "Team Lead - Outbound",
    bio: "Driving successful outbound campaigns.",
    image: "TB",
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
                  <div className="w-40 h-40 mx-auto rounded-3xl bg-gradient-orange flex items-center justify-center shadow-lg group-hover:shadow-orange transition-shadow duration-300">
                    <span className="text-4xl font-bold text-primary-foreground">
                      {member.image}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
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
                    href="#"
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
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Management & Team Leads
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The backbone of our operations, ensuring excellence in every interaction
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managers.map((member) => (
              <div
                key={member.name}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 group-hover:bg-gradient-orange flex items-center justify-center shrink-0 transition-all duration-300">
                    <span className="text-lg font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {member.image}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
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
                At CallPro, we believe that great customer service starts with a great team. 
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
