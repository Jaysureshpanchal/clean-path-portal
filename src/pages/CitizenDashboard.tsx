import { Calendar, Clock, MapPin, Trash2, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/DashboardLayout";

const CitizenDashboard = () => {
  const upcomingPickups = [
    {
      id: 1,
      type: "General Waste",
      date: "2024-01-15",
      time: "8:00 AM",
      status: "scheduled",
      icon: Trash2
    },
    {
      id: 2,
      type: "Recycling",
      date: "2024-01-17",
      time: "10:00 AM", 
      status: "scheduled",
      icon: Trash2
    },
    {
      id: 3,
      type: "Organic Waste",
      date: "2024-01-20",
      time: "7:30 AM",
      status: "scheduled", 
      icon: Trash2
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Pickup completed",
      type: "General Waste",
      date: "2024-01-12",
      status: "completed"
    },
    {
      id: 2,
      action: "Request submitted",
      type: "Bulk Item Collection",
      date: "2024-01-10",
      status: "pending"
    },
    {
      id: 3,
      action: "Issue reported",
      type: "Missed Collection",
      date: "2024-01-08",
      status: "resolved"
    }
  ];

  return (
    <DashboardLayout role="citizen" title="Citizen Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-success/10 to-success/5 border-success/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Next Pickup</p>
                <p className="text-2xl font-bold text-success">Tomorrow</p>
                <p className="text-xs text-muted-foreground">General Waste</p>
              </div>
              <Calendar className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold text-primary">8</p>
                <p className="text-xs text-muted-foreground">Collections</p>
              </div>
              <Trash2 className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-warning/10 to-warning/5 border-warning/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-warning">1</p>
                <p className="text-xs text-muted-foreground">Request</p>
              </div>
              <AlertCircle className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Service Area</p>
                <p className="text-2xl font-bold">Zone A</p>
                <p className="text-xs text-muted-foreground">District 12</p>
              </div>
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Pickups */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Pickups
            </CardTitle>
            <CardDescription>
              Your scheduled waste collection dates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingPickups.map((pickup) => (
              <div key={pickup.id} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <pickup.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{pickup.type}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {pickup.date}
                      <Clock className="h-3 w-3" />
                      {pickup.time}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">
                  {pickup.status}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Request Special Pickup
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your recent waste management activities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.type}</p>
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                </div>
                <Badge 
                  variant={
                    activity.status === "completed" ? "default" :
                    activity.status === "pending" ? "secondary" : 
                    "outline"
                  }
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CitizenDashboard;