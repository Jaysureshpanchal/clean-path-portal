import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Recycle, User, Truck, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "citizen" | "worker" | "admin";
  title: string;
}

const DashboardLayout = ({ children, role, title }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate("/login");
  };

  const getRoleIcon = () => {
    switch (role) {
      case "citizen":
        return User;
      case "worker":
        return Truck;
      case "admin":
        return Shield;
      default:
        return User;
    }
  };

  const getRoleColor = () => {
    switch (role) {
      case "citizen":
        return "text-primary";
      case "worker":
        return "text-success";
      case "admin":
        return "text-warning";
      default:
        return "text-primary";
    }
  };

  const RoleIcon = getRoleIcon();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-primary/5">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Recycle className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">WasteWise</h1>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-accent rounded-full">
                <RoleIcon className={`h-4 w-4 ${getRoleColor()}`} />
                <span className="text-sm font-medium capitalize">{role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <p className="text-sm text-muted-foreground">
                  Welcome back, {localStorage.getItem("userEmail")?.split("@")[0] || "User"}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-muted-foreground">
            {role === "citizen" && "Manage your waste collection services and schedules"}
            {role === "worker" && "Track your routes and manage collections efficiently"}
            {role === "admin" && "Monitor system performance and manage operations"}
          </p>
        </div>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;