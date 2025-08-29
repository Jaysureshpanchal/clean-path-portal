import { BarChart, Users, Truck, MapPin, TrendingUp, AlertTriangle, Settings, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/DashboardLayout";

const AdminDashboard = () => {
  const systemMetrics = [
    {
      title: "Total Collections Today",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: BarChart
    },
    {
      title: "Active Workers",
      value: "45",
      change: "98% attendance",
      trend: "stable",
      icon: Users
    },
    {
      title: "Fleet Status",
      value: "23/25",
      change: "2 in maintenance",
      trend: "stable",
      icon: Truck
    },
    {
      title: "Service Areas",
      value: "12",
      change: "All covered",
      trend: "up",
      icon: MapPin
    }
  ];

  const activeRoutes = [
    {
      id: "A-12",
      worker: "John Smith",
      area: "Downtown",
      progress: 85,
      eta: "2:30 PM",
      status: "on-time"
    },
    {
      id: "B-07",
      worker: "Sarah Johnson",
      area: "Residential North", 
      progress: 92,
      eta: "1:45 PM",
      status: "ahead"
    },
    {
      id: "C-15",
      worker: "Mike Davis",
      area: "Industrial Zone",
      progress: 45,
      eta: "4:15 PM",
      status: "delayed"
    },
    {
      id: "D-03",
      worker: "Lisa Wong",
      area: "Suburbs East",
      progress: 78,
      eta: "3:00 PM", 
      status: "on-time"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Vehicle Breakdown",
      route: "E-09",
      time: "10:30 AM",
      severity: "high",
      status: "active"
    },
    {
      id: 2,
      type: "Schedule Delay",
      route: "C-15",
      time: "11:15 AM",
      severity: "medium",
      status: "monitoring"
    },
    {
      id: 3,
      type: "Customer Complaint",
      route: "A-12",
      time: "9:45 AM",
      severity: "low",
      status: "resolved"
    }
  ];

  return (
    <DashboardLayout role="admin" title="Admin Dashboard">
      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-bold text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.change}</p>
                </div>
                <metric.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Routes */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Active Routes
            </CardTitle>
            <CardDescription>
              Real-time status of collection routes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeRoutes.map((route) => (
              <div key={route.id} className="p-4 bg-accent/30 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">Route {route.id} - {route.area}</h4>
                    <p className="text-sm text-muted-foreground">{route.worker}</p>
                  </div>
                  <Badge variant={
                    route.status === "ahead" ? "default" :
                    route.status === "delayed" ? "destructive" :
                    "secondary"
                  }>
                    {route.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{route.progress}%</span>
                  </div>
                  <Progress value={route.progress} />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>ETA</span>
                    <span>{route.eta}</span>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Routes
            </Button>
          </CardContent>
        </Card>

        {/* System Alerts & Quick Actions */}
        <div className="space-y-6">
          {/* Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                System Alerts
              </CardTitle>
              <CardDescription>
                Recent issues and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.severity === "high" ? "bg-destructive" :
                    alert.severity === "medium" ? "bg-warning" :
                    "bg-success"
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{alert.type}</p>
                    <p className="text-xs text-muted-foreground">Route {alert.route} • {alert.time}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {alert.status}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                Route Planning
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Analytics Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Truck className="h-4 w-4 mr-2" />
                Fleet Management
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                System Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;