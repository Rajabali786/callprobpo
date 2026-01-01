import { Link } from "react-router-dom";
import { ArrowRight, Phone, Headphones, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-orange-700">
                24/7 Professional Support
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Professional Call Center &{" "}
              <span className="text-gradient">BPO123 Solutions</span> for Global Businesses
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Trusted by businesses worldwide. We deliver exceptional customer experiences 
              with our trained professionals and cutting-edge technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">500K+</p>
                  <p className="text-sm text-muted-foreground">Calls Handled</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">200+</p>
                  <p className="text-sm text-muted-foreground">Expert Agents</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Main image container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Background shapes */}
                <div className="absolute inset-4 bg-gradient-orange rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-4 bg-gradient-orange rounded-3xl -rotate-3 opacity-30" />
                
                {/* Main card */}
                <div className="relative bg-background rounded-3xl shadow-2xl p-8 border border-border">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-orange flex items-center justify-center">
                        <Headphones className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Live Support</h3>
                        <p className="text-sm text-muted-foreground">Active Now</p>
                      </div>
                      <div className="ml-auto w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-2xl">
                        <p className="text-3xl font-bold text-primary">98%</p>
                        <p className="text-sm text-muted-foreground">Satisfaction</p>
                      </div>
                      <div className="p-4 bg-muted rounded-2xl">
                        <p className="text-3xl font-bold text-foreground">&lt;30s</p>
                        <p className="text-sm text-muted-foreground">Response Time</p>
                      </div>
                    </div>

                    {/* Activity */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Phone className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Inbound Call</p>
                          <p className="text-xs text-muted-foreground">Resolved • 2 min ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                          <Phone className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">Outbound Campaign</p>
                          <p className="text-xs text-muted-foreground">In Progress • 127 calls</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
