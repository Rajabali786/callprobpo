import { Link } from "react-router-dom";
import { 
  PhoneIncoming, 
  PhoneOutgoing, 
  Headphones, 
  Megaphone, 
  Users, 
  BarChart3,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: PhoneIncoming,
    title: "Inbound Call Support",
    description: "Professional handling of incoming customer calls with exceptional service quality and quick resolution times.",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Call Services",
    description: "Strategic outbound calling campaigns for sales, surveys, and customer follow-ups to drive business growth.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 multi-channel customer support ensuring your customers receive help whenever they need it.",
  },
  {
    icon: Megaphone,
    title: "Telemarketing",
    description: "Results-driven telemarketing campaigns with trained professionals who understand persuasive communication.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Qualified lead generation services that fill your sales pipeline with high-potential prospects.",
  },
  {
    icon: BarChart3,
    title: "BPO & Campaign Management",
    description: "End-to-end business process outsourcing and campaign management for operational excellence.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-primary text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Call Center Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full range of professional call center and BPO services 
            tailored to meet your business needs and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-orange-100 group-hover:bg-gradient-orange flex items-center justify-center mb-6 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
