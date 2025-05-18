import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, Bell, CheckCircle, Clock, AlertCircle } from "lucide-react"

export default function CitizenDashboard() {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Citizen Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Rahul Kumar</p>
        </div>
        <Button>Apply for New Scheme</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">2 under review, 1 pending documents</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Approved Schemes</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Education scholarship, Housing subsidy</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                <Bell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">3 new, 2 unread messages</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">Recommended Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Agricultural Subsidy Program</CardTitle>
                <CardDescription>Ministry of Agriculture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Financial assistance for farmers to purchase equipment and seeds.</p>
                  <div className="flex justify-between text-sm">
                    <span>Eligibility: 95%</span>
                    <span>Max Benefit: ₹50,000</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  <Button>Check Eligibility & Apply</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Small Business Grant</CardTitle>
                <CardDescription>Ministry of MSME</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Financial support for small business owners and entrepreneurs.</p>
                  <div className="flex justify-between text-sm">
                    <span>Eligibility: 80%</span>
                    <span>Max Benefit: ₹2,00,000</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <Button>Check Eligibility & Apply</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
              <CardDescription>Track the status of your scheme applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Education Scholarship</h3>
                      <p className="text-sm text-muted-foreground">Applied on: 15 Mar 2025</p>
                    </div>
                    <Badge className="bg-amber-500">Under Review</Badge>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>Last updated: 2 days ago</span>
                    </div>
                    <Progress value={60} className="h-2 mt-2" />
                    <div className="flex justify-between text-xs mt-1">
                      <span>Applied</span>
                      <span>Documents Verified</span>
                      <span>Under Review</span>
                      <span>Approved</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Rural Housing Scheme</h3>
                      <p className="text-sm text-muted-foreground">Applied on: 28 Feb 2025</p>
                    </div>
                    <Badge className="bg-red-500">Documents Required</Badge>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-red-500">Action required: Upload income certificate</span>
                    </div>
                    <Progress value={30} className="h-2 mt-2" />
                    <div className="flex justify-between text-xs mt-1">
                      <span>Applied</span>
                      <span>Documents Pending</span>
                      <span>Under Review</span>
                      <span>Approved</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4">
                    Upload Documents
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Skill Development Program</h3>
                      <p className="text-sm text-muted-foreground">Applied on: 10 Feb 2025</p>
                    </div>
                    <Badge className="bg-green-500">Approved</Badge>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Approved on: 25 Feb 2025</span>
                    </div>
                    <Progress value={100} className="h-2 mt-2" />
                    <div className="flex justify-between text-xs mt-1">
                      <span>Applied</span>
                      <span>Documents Verified</span>
                      <span>Under Review</span>
                      <span>Approved</span>
                    </div>
                  </div>
                  <Button className="mt-4">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Stay updated with your application status and new schemes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 p-3 border-b">
                  <div className="bg-blue-100 p-2 rounded-full h-fit">
                    <Bell className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Document Verification Complete</h3>
                    <p className="text-sm text-muted-foreground">
                      Your documents for the Education Scholarship have been verified.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 border-b">
                  <div className="bg-red-100 p-2 rounded-full h-fit">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Action Required</h3>
                    <p className="text-sm text-muted-foreground">
                      Please upload your income certificate for the Rural Housing Scheme.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 border-b">
                  <div className="bg-green-100 p-2 rounded-full h-fit">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Application Approved</h3>
                    <p className="text-sm text-muted-foreground">
                      Your application for the Skill Development Program has been approved.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                  </div>
                </div>

                <div className="flex gap-4 p-3 border-b">
                  <div className="bg-purple-100 p-2 rounded-full h-fit">
                    <FileText className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">New Scheme Launched</h3>
                    <p className="text-sm text-muted-foreground">
                      Agricultural Subsidy Program is now available. Check your eligibility.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">5 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Manage your personal details and documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                  <p>Rahul Kumar</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Date of Birth</h3>
                  <p>15 August 1990</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Gender</h3>
                  <p>Male</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Aadhar Number</h3>
                  <p>XXXX-XXXX-1234</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p>rahul.kumar@example.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Mobile Number</h3>
                  <p>+91 98765 43210</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Address</h3>
                  <p>123, Main Street, Sector 10, New Delhi - 110001</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Annual Income</h3>
                  <p>₹4,50,000</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">Uploaded Documents</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span>Aadhar Card</span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span>PAN Card</span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span>Income Certificate</span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Change Password</Button>
                <Button>Edit Profile</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

