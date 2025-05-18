import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function SchemesPage() {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Government Schemes</h1>
          <p className="text-muted-foreground">Browse and apply for available schemes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search schemes..." className="pl-8" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="agriculture">Agriculture</SelectItem>
              <SelectItem value="housing">Housing</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="business">Small Business</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="deadline">Deadline</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Education Scholarship</CardTitle>
              <Badge>Education</Badge>
            </div>
            <CardDescription>Ministry of Education</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Financial assistance for students pursuing higher education in recognized institutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Eligibility:</span>
                <span>Students with family income below ₹8 lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Benefit Amount:</span>
                <span>Up to ₹1,00,000 per year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Date:</span>
                <span className="font-medium">30 April 2025</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details & Apply</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Agricultural Subsidy</CardTitle>
              <Badge>Agriculture</Badge>
            </div>
            <CardDescription>Ministry of Agriculture</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Financial assistance for farmers to purchase equipment, seeds, and fertilizers.</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Eligibility:</span>
                <span>Small and marginal farmers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Benefit Amount:</span>
                <span>Up to ₹50,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Date:</span>
                <span className="font-medium">15 May 2025</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details & Apply</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Rural Housing Scheme</CardTitle>
              <Badge>Housing</Badge>
            </div>
            <CardDescription>Ministry of Rural Development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Financial assistance for construction of houses in rural areas for eligible households.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Eligibility:</span>
                <span>Rural households with income below ₹5 lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Benefit Amount:</span>
                <span>Up to ₹1,50,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Date:</span>
                <span className="font-medium">31 March 2025</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details & Apply</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Healthcare Support</CardTitle>
              <Badge>Healthcare</Badge>
            </div>
            <CardDescription>Ministry of Health</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Financial assistance for medical treatment and healthcare services for eligible individuals.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Eligibility:</span>
                <span>Individuals with income below ₹6 lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Benefit Amount:</span>
                <span>Up to ₹5,00,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Date:</span>
                <span className="font-medium">Open throughout the year</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details & Apply</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Small Business Grant</CardTitle>
              <Badge>Business</Badge>
            </div>
            <CardDescription>Ministry of MSME</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Financial support for small business owners and entrepreneurs to start or expand their business.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Eligibility:</span>
                <span>Small businesses with turnover below ₹5 crores</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Benefit Amount:</span>
                <span>Up to ₹2,00,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Date:</span>
                <span className="font-medium">30 June 2025</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details & Apply</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Skill Development Program</CardTitle>
              <Badge>Education</Badge>
            </div>
            <CardDescription>Ministry of Skill Development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Training programs for skill development and vocational education for unemployed youth.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Eligibility:</span>
                <span>Individuals aged 18-35 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Benefit Amount:</span>
                <span>Free training + ₹10,000 stipend</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Date:</span>
                <span className="font-medium">15 April 2025</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Details & Apply</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            1
          </Button>
          <Button variant="outline" size="icon">
            2
          </Button>
          <Button variant="outline" size="icon">
            3
          </Button>
          <span>...</span>
          <Button variant="outline" size="icon">
            8
          </Button>
        </div>
      </div>
    </div>
  )
}

