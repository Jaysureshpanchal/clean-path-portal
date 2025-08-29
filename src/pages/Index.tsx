import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle, Users, Truck, Shield, ArrowRight, Leaf, Globe, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/waste-management-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in and redirect to appropriate dashboard
    const userRole = localStorage.getItem("userRole");
    if (userRole) {
      navigate(`/${userRole}`);
    }
  }, [navigate]);

  const features = [
    {
      icon: Users,
      title: "Citizen Services",
      description: "Easy scheduling, tracking, and management of your waste collection services.",
      color: "text-primary"
    },
    {
      icon: Truck,
      title: "Worker Tools",
      description: "Efficient route management and real-time collection tracking for workers.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Admin Control",
      description: "Comprehensive system management, analytics, and operational oversight.",
      color: "text-warning"
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Reduce waste and promote recycling for a greener future"
    },
    {
      icon: Globe,
      title: "Community Connect",
      description: "Bring communities together for better waste management"
    },
    {
      icon: Zap,
      title: "Smart Efficiency",
      description: "Optimize routes and schedules with intelligent systems"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-primary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <Recycle className="h-12 w-12 text-primary" />
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground">WasteWise</h1>
              </div>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Smart waste management for a cleaner, greener future. 
                Connecting communities, workers, and administrators in one unified platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={() => navigate("/login")}
                  className="text-lg px-8 py-6"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Modern waste management system" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Three Platforms, One Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              WasteWise provides tailored experiences for every user type in the waste management ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-b from-card to-accent/20">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-accent rounded-full w-fit">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose WasteWise?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform delivers real value to communities and organizations committed to sustainable waste management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 p-6 bg-primary/10 rounded-full w-fit">
                  <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/95 via-primary to-primary-glow">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Waste Management?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of communities already using WasteWise to create cleaner, more sustainable environments.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => navigate("/login")}
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
