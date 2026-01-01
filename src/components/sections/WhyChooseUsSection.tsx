import { 
  Clock, 
  UserCheck, 
  Shield, 
  DollarSign, 
  Zap,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Round-the-clock availability ensuring your customers always have access to help.",
  },
  {
    icon: UserCheck,
    title: "Trained & Professional Agents",
    description: "Our agents undergo rigorous training programs to deliver exceptional service.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Strict quality monitoring and continuous improvement processes for best results.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description: "Competitive pricing without compromising on service quality or performance.",
  },
  {
    icon: Zap,
    title: "Fast Response Time",
    description: "Industry-leading response times that keep your customers satisfied and engaged.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "Years of experience and hundreds of satisfied clients across industries.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-primary text-sm font-medium rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The <span className="text-gradient">CallPro</span> Advantage
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine industry expertise, cutting-edge technology, and a customer-first 
                approach to deliver outstanding results for businesses worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Global Clients</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 group-hover:bg-gradient-orange flex items-center justify-center mb-4 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
