import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Users, Settings, Activity, BarChart } from "lucide-react";

export default function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userType");
    navigate("/login");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-5xl mx-auto">
        <CardHeader className="bg-red-50">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">Admin Control Panel</CardTitle>
              <CardDescription>System administration dashboard</CardDescription>
            </div>
            <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
              <LogOut size={16} />
              <span>Log out</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Administrator Overview</h3>
              <p className="text-gray-600">
                Welcome to the admin control panel. You have access to manage users, system settings, and view reports.
                Use the administrative tools below to manage the platform.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users size={20} />
                    User Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Manage user accounts, permissions, and access controls</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">Manage Users</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Settings size={20} />
                    System Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Configure system settings, integrations, and preferences</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">System Settings</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity size={20} />
                    Activity Logs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">View system logs, user activity, and security events</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">View Logs</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart size={20} />
                    Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">View platform statistics, usage reports, and insights</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">View Reports</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}