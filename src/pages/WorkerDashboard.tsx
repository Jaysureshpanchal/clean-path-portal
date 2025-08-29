import { Route, Truck, Clock, MapPin, CheckCircle, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/DashboardLayout";

const WorkerDashboard = () => {
  const todayRoute = [
    {
      id: 1,
      address: "123 Oak Street",
      type: "General Waste",
      time: "8:00 AM",
      status: "completed",
      priority: "normal"
    },
    {
      id: 2,
      address: "456 Pine Avenue",
      type: "Recycling",
      time: "8:30 AM",
      status: "completed",
      priority: "normal"
    },
    {
      id: 3,
      address: "789 Elm Road",
      type: "Bulk Items",
      time: "9:15 AM",
      status: "in-progress",
      priority: "high"
    },
    {
      id: 4,
      address: "321 Maple Drive",
      type: "General Waste",
      time: "10:00 AM",
      status: "pending",
      priority: "normal"
    },
    {
      id: 5,
      address: "654 Cedar Lane",
      type: "Organic Waste",
      time: "10:45 AM",
      status: "pending",
      priority: "normal"
    }
  ];

  const routeProgress = (todayRoute.filter(stop => stop.status === "completed").length / todayRoute.length) * 100;
  const completedStops = todayRoute.filter(stop => stop.status === "completed").length;

  return (
    <DashboardLayout role="worker" title="Worker Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Route Progress</p>
                <p className="text-2xl font-bold text-primary">{Math.round(routeProgress)}%</p>
                <p className="text-xs text-muted-foreground">{completedStops}/{todayRoute.length} stops</p>
              </div>
              <Route className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-success/10 to-success/5 border-success/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-success">{completedStops}</p>
                <p className="text-xs text-muted-foreground">Collections</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-warning/10 to-warning/5 border-warning/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Vehicle Load</p>
                <p className="text-2xl font-bold text-warning">75%</p>
                <p className="text-xs text-muted-foreground">Capacity</p>
              </div>
              <Truck className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Est. Finish</p>
                <p className="text-2xl font-bold">2:30 PM</p>
                <p className="text-xs text-muted-foreground">Today</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Route */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  Today's Route
                </CardTitle>
                <CardDescription>
                  Collection stops for Route A-12
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Progress</p>
                <Progress value={routeProgress} className="w-24" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayRoute.map((stop) => (
              <div key={stop.id} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    stop.status === "completed" ? "bg-success" :
                    stop.status === "in-progress" ? "bg-warning" :
                    "bg-muted-foreground"
                  }`} />
                  <div>
                    <p className="font-medium">{stop.address}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-3 w-3" />
                      {stop.type}
                      <Clock className="h-3 w-3" />
                      {stop.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {stop.priority === "high" && (
                    <Badge variant="destructive" className="text-xs">
                      High Priority
                    </Badge>
                  )}
                  <Badge variant={
                    stop.status === "completed" ? "default" :
                    stop.status === "in-progress" ? "secondary" :
                    "outline"
                  }>
                    {stop.status.replace("-", " ")}
                  </Badge>
                </div>
              </div>
            ))}
            <div className="flex gap-2">
              <Button variant="default" className="flex-1">
                Mark Stop Complete
              </Button>
              <Button variant="outline" className="flex-1">
                Report Issue
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common tasks and reports
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <MapPin className="h-4 w-4 mr-2" />
              Navigate to Next Stop
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Package className="h-4 w-4 mr-2" />
              Log Collection Issue
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Truck className="h-4 w-4 mr-2" />
              Update Vehicle Status
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Clock className="h-4 w-4 mr-2" />
              Submit Timesheet
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <CheckCircle className="h-4 w-4 mr-2" />
              End of Day Report
            </Button>

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-3">Vehicle Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fuel Level</span>
                  <span className="text-success">85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Load Capacity</span>
                  <span className="text-warning">75%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Maintenance</span>
                  <span className="text-muted-foreground">3 days ago</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default WorkerDashboard;