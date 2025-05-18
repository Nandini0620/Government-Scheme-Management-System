import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Users, BarChart, Clock, CheckCircle, XCircle } from "lucide-react"

export default function OfficialDashboard() {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Official Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Priya Sharma</p>
        </div>
        <Button>Create New Scheme</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="schemes">Manage Schemes</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Approved Applications</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-muted-foreground">+4% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rejected Applications</CardTitle>
                <XCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">16</div>
                <p className="text-xs text-muted-foreground">-2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Schemes</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">2 new this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Application Processing</CardTitle>
                <CardDescription>Daily application processing statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-end gap-2">
                  <div className="bg-primary/20 hover:bg-primary/30 h-[40%] w-full rounded-md relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Mon: 24
                    </span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary/30 h-[60%] w-full rounded-md relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Tue: 36
                    </span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary/30 h-[80%] w-full rounded-md relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Wed: 48
                    </span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary/30 h-[50%] w-full rounded-md relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Thu: 30
                    </span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary/30 h-[70%] w-full rounded-md relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Fri: 42
                    </span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary/30 h-[30%] w-full rounded-md relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Sat: 18
                    </span>
                  </div>
                  <div className="bg-primary/20 hover:bg-primary/30 h-[10%] w-full rounded-md relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Sun: 6
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scheme Distribution</CardTitle>
                <CardDescription>Applications by scheme category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Education</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                    <Progress value={32} className="h-2 mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Agriculture</span>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <Progress value={28} className="h-2 mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Housing</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <Progress value={20} className="h-2 mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Healthcare</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <Progress value={15} className="h-2 mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Small Business</span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <Progress value={5} className="h-2 mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Application Management</CardTitle>
              <CardDescription>Review and process scheme applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    All
                  </Button>
                  <Button variant="outline" size="sm">
                    Pending
                  </Button>
                  <Button variant="outline" size="sm">
                    Under Review
                  </Button>
                  <Button variant="outline" size="sm">
                    Approved
                  </Button>
                  <Button variant="outline" size="sm">
                    Rejected
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Scheme</TableHead>
                      <TableHead>Applied On</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Rahul Kumar</p>
                          <p className="text-sm text-muted-foreground">ID: APPL-2025-001</p>
                        </div>
                      </TableCell>
                      <TableCell>Education Scholarship</TableCell>
                      <TableCell>15 Mar 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500">Under Review</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm">Review</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Ananya Singh</p>
                          <p className="text-sm text-muted-foreground">ID: APPL-2025-002</p>
                        </div>
                      </TableCell>
                      <TableCell>Agricultural Subsidy</TableCell>
                      <TableCell>14 Mar 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-500">Pending Documents</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm">Review</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Vikram Patel</p>
                          <p className="text-sm text-muted-foreground">ID: APPL-2025-003</p>
                        </div>
                      </TableCell>
                      <TableCell>Rural Housing Scheme</TableCell>
                      <TableCell>12 Mar 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Approved</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Priya Sharma</p>
                          <p className="text-sm text-muted-foreground">ID: APPL-2025-004</p>
                        </div>
                      </TableCell>
                      <TableCell>Small Business Grant</TableCell>
                      <TableCell>10 Mar 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-red-500">Rejected</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="flex items-center justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schemes">
          <Card>
            <CardHeader>
              <CardTitle>Scheme Management</CardTitle>
              <CardDescription>Create, edit, and manage government schemes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      All Schemes
                    </Button>
                    <Button variant="outline" size="sm">
                      Active
                    </Button>
                    <Button variant="outline" size="sm">
                      Inactive
                    </Button>
                    <Button variant="outline" size="sm">
                      Draft
                    </Button>
                  </div>
                  <Button>Add New Scheme</Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Scheme Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Launch Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Applications</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Education Scholarship</p>
                          <p className="text-sm text-muted-foreground">For higher education</p>
                        </div>
                      </TableCell>
                      <TableCell>Education</TableCell>
                      <TableCell>01 Jan 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Active</Badge>
                      </TableCell>
                      <TableCell>245</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Agricultural Subsidy</p>
                          <p className="text-sm text-muted-foreground">For farmers</p>
                        </div>
                      </TableCell>
                      <TableCell>Agriculture</TableCell>
                      <TableCell>15 Feb 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Active</Badge>
                      </TableCell>
                      <TableCell>189</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Rural Housing Scheme</p>
                          <p className="text-sm text-muted-foreground">For rural development</p>
                        </div>
                      </TableCell>
                      <TableCell>Rural Development</TableCell>
                      <TableCell>10 Mar 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Active</Badge>
                      </TableCell>
                      <TableCell>112</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <p className="font-medium">Healthcare Support</p>
                          <p className="text-sm text-muted-foreground">Medical assistance</p>
                        </div>
                      </TableCell>
                      <TableCell>Health</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>
                        <Badge className="bg-slate-500">Draft</Badge>
                      </TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports & Analytics</CardTitle>
              <CardDescription>View performance metrics and generate reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Application Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-end gap-2">
                        <div className="bg-primary/20 hover:bg-primary/30 h-[30%] w-full rounded-md"></div>
                        <div className="bg-primary/20 hover:bg-primary/30 h-[45%] w-full rounded-md"></div>
                        <div className="bg-primary/20 hover:bg-primary/30 h-[60%] w-full rounded-md"></div>
                        <div className="bg-primary/20 hover:bg-primary/30 h-[75%] w-full rounded-md"></div>
                        <div className="bg-primary/20 hover:bg-primary/30 h-[90%] w-full rounded-md"></div>
                        <div className="bg-primary/20 hover:bg-primary/30 h-[80%] w-full rounded-md"></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>Oct</span>
                        <span>Nov</span>
                        <span>Dec</span>
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Demographic Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Rural</span>
                            <span className="text-sm">65%</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Urban</span>
                            <span className="text-sm">35%</span>
                          </div>
                          <Progress value={35} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Male</span>
                            <span className="text-sm">55%</span>
                          </div>
                          <Progress value={55} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Female</span>
                            <span className="text-sm">45%</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Generate Reports</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 cursor-pointer hover:bg-muted">
                      <div className="flex flex-col items-center text-center">
                        <BarChart className="h-8 w-8 mb-2" />
                        <h4 className="font-medium">Monthly Performance</h4>
                        <p className="text-sm text-muted-foreground">Application processing statistics</p>
                      </div>
                    </Card>
                    <Card className="p-4 cursor-pointer hover:bg-muted">
                      <div className="flex flex-col items-center text-center">
                        <Users className="h-8 w-8 mb-2" />
                        <h4 className="font-medium">Beneficiary Report</h4>
                        <p className="text-sm text-muted-foreground">Demographic analysis of beneficiaries</p>
                      </div>
                    </Card>
                    <Card className="p-4 cursor-pointer hover:bg-muted">
                      <div className="flex flex-col items-center text-center">
                        <FileText className="h-8 w-8 mb-2" />
                        <h4 className="font-medium">Scheme Utilization</h4>
                        <p className="text-sm text-muted-foreground">Fund allocation and utilization</p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

