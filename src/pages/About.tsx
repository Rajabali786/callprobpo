import { Layout } from "@/components/layout/Layout";
import { 
  Target, 
  Eye, 
  Heart,
  Award,
  Globe,
  Users,
  TrendingUp,
  Shield
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every interaction, ensuring top-quality service delivery.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your success is our priority. We tailor our solutions to meet your unique needs.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with transparency, honesty, and ethical practices.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Continuously improving our processes and technology to deliver better results.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "200+", label: "Professional Agents" },
  { value: "500K+", label: "Calls Handled Monthly" },
  { value: "50+", label: "Countries Served" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-primary text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Trusted <span className="text-gradient">BPO Partner</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Delivering world-class call center solutions with professionalism, 
              innovation, and a commitment to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                 Royale Tech Globes is a leading call center and BPO service provider with over 15 years 
                  of experience in delivering exceptional customer service solutions to businesses 
                  worldwide.
                </p>
                <p>
                  Founded with a vision to transform how businesses connect with their customers, 
                  we have grown from a small team to a global operation serving clients across 
                  North America, Europe, and the Middle East.
                </p>
                <p>
                  Our team of 200+ professionally trained agents operates 24/7, ensuring your 
                  customers receive the support they need, whenever they need it. We combine 
                  human expertise with cutting-edge technology to deliver results that exceed 
                  expectations.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-muted rounded-2xl text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 lg:p-12 bg-card rounded-3xl border border-border">
              <div className="w-14 h-14 rounded-2xl bg-gradient-orange flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with exceptional customer engagement solutions that 
                drive growth, enhance brand loyalty, and create meaningful connections 
                between companies and their customers.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 lg:p-12 bg-card rounded-3xl border border-border">
              <div className="w-14 h-14 rounded-2xl bg-gradient-orange flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in customer experience solutions, recognized for 
                our innovation, quality, and unwavering commitment to helping businesses 
                succeed in an increasingly connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 group-hover:bg-gradient-orange flex items-center justify-center mb-6 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative p-8 lg:p-12 bg-card rounded-3xl border border-border">
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                      <Globe className="w-24 h-24 text-primary opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Global Reach, Local Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                We serve clients across the globe while maintaining the personalized 
                attention that sets us apart.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Multi-language Support</strong> – Serving customers in English, 
                    Spanish, Arabic, French, and more
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>International Standards</strong> – Compliance with global 
                    industry regulations and best practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-foreground">
                    <strong>Data Security</strong> – Enterprise-grade security measures 
                    to protect your customer data
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
