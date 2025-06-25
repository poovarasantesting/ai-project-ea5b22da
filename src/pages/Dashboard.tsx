import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userType");
    navigate("/login");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">User Dashboard</CardTitle>
          <CardDescription>Welcome to your user dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Account Overview</h3>
              <p className="text-gray-600">
                This is your user dashboard where you can manage your account and view your activity.
                In a real application, this would display user-specific information and functionality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Activity</h3>
                <p className="text-gray-600">
                  View your recent activity and account usage
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Settings</h3>
                <p className="text-gray-600">
                  Manage your account settings and preferences
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut size={16} />
            <span>Log out</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}