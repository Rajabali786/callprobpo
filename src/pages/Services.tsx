import { Layout } from "@/components/layout/Layout";
import { 
  PhoneIncoming, 
  PhoneOutgoing, 
  Headphones, 
  Megaphone, 
  Users, 
  BarChart3,
  CheckCircle2
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    icon: PhoneIncoming,
    title: "Inbound Call Support",
    description: "Professional handling of incoming customer calls with exceptional service quality and quick resolution times.",
    features: [
      "24/7 availability for customer inquiries",
      "Multi-language support capabilities",
      "Advanced call routing and queuing",
      "Real-time call monitoring and analytics",
      "Integration with your existing CRM systems",
    ],
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Call Services",
    description: "Strategic outbound calling campaigns for sales, surveys, and customer follow-ups to drive business growth.",
    features: [
      "Targeted sales and marketing campaigns",
      "Customer satisfaction surveys",
      "Appointment scheduling and reminders",
      "Market research and data collection",
      "Follow-up and retention programs",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 multi-channel customer support ensuring your customers receive help whenever they need it.",
    features: [
      "Phone, email, and chat support",
      "Technical troubleshooting assistance",
      "Order tracking and management",
      "Complaint resolution and escalation",
      "Product information and guidance",
    ],
  },
  {
    icon: Megaphone,
    title: "Telemarketing",
    description: "Results-driven telemarketing campaigns with trained professionals who understand persuasive communication.",
    features: [
      "B2B and B2C telemarketing services",
      "Product and service promotions",
      "Cross-selling and up-selling campaigns",
      "Event registration and promotion",
      "Performance tracking and reporting",
    ],
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Qualified lead generation services that fill your sales pipeline with high-potential prospects.",
    features: [
      "Targeted prospect identification",
      "Cold calling and warm lead nurturing",
      "Lead qualification and scoring",
      "Database building and enrichment",
      "CRM integration and lead transfer",
    ],
  },
  {
    icon: BarChart3,
    title: "BPO & Campaign Management",
    description: "End-to-end business process outsourcing and campaign management for operational excellence.",
    features: [
      "Complete campaign setup and management",
      "Quality assurance and monitoring",
      "Performance analytics and reporting",
      "Process optimization and efficiency",
      "Scalable solutions for growth",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-primary text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Call Center <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive services designed to enhance your customer experience, 
              boost sales, and streamline your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center shadow-orange">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Card */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    <div className="absolute inset-4 bg-gradient-orange rounded-3xl opacity-10" />
                    <div className="relative bg-muted rounded-3xl p-8 lg:p-12">
                      <div className="aspect-square max-w-sm mx-auto flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-24 h-24 mx-auto rounded-3xl bg-orange-100 flex items-center justify-center">
                            <service.icon className="w-12 h-12 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground max-w-xs">
                            Trusted by businesses across 50+ countries
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
