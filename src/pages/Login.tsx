import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCheck, Recycle, Shield, Users } from "lucide-react";
import heroImage from "@/assets/waste-management-hero.jpg";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !role) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Mock login - in real app this would validate against backend
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);
    
    toast({
      title: "Login Successful",
      description: `Welcome to WasteWise Dashboard`,
    });

    // Redirect based on role
    switch (role) {
      case "worker":
        navigate("/worker");
        break;
      case "citizen":
        navigate("/citizen");
        break;
      case "admin":
        navigate("/admin");
        break;
      default:
        navigate("/");
    }
  };

  const roleOptions = [
    { value: "citizen", label: "Citizen", icon: Users, description: "Schedule pickups and track services" },
    { value: "worker", label: "Collection Worker", icon: UserCheck, description: "Manage routes and collections" },
    { value: "admin", label: "Administrator", icon: Shield, description: "System management and analytics" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={heroImage} 
              alt="Modern waste management system" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Recycle className="h-8 w-8" />
                  <h1 className="text-3xl font-bold">WasteWise</h1>
                </div>
                <p className="text-lg opacity-90">
                  Smart waste management for a cleaner, greener future. 
                  Connecting communities, workers, and administrators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8 lg:hidden">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Recycle className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">WasteWise</h1>
            </div>
            <p className="text-muted-foreground">Smart waste management system</p>
          </div>

          <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roleOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-3">
                            <option.icon className="h-4 w-4" />
                            <div>
                              <div className="font-medium">{option.label}</div>
                              <div className="text-xs text-muted-foreground">{option.description}</div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Demo credentials: Use any email/password combination
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;