import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">GovSchemes</h1>
          <nav className="space-x-4">
            <Link href="/login">
              <Button variant="outline" className="bg-primary-foreground text-primary">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Government Scheme Management System</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A platform for citizens to discover, apply for, and track government schemes, and for officials to
            efficiently manage scheme applications.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>For Citizens</CardTitle>
              <CardDescription>Access government schemes easily</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Register and create your profile</li>
                <li>Browse available schemes</li>
                <li>Check eligibility criteria</li>
                <li>Apply online with document upload</li>
                <li>Track application status</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full">Register as Citizen</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Officials</CardTitle>
              <CardDescription>Manage schemes efficiently</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Create and publish new schemes</li>
                <li>Process applications</li>
                <li>Track scheme performance</li>
                <li>Generate reports and analytics</li>
                <li>Communicate with applicants</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full">
                  Official Login
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Schemes</CardTitle>
              <CardDescription>Popular government initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Education Scholarship Program</li>
                <li>Rural Development Initiative</li>
                <li>Healthcare Support Scheme</li>
                <li>Small Business Grants</li>
                <li>Agricultural Subsidies</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/schemes" className="w-full">
                <Button variant="secondary" className="w-full">
                  View All Schemes
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p className="text-muted-foreground">Create an account and complete your profile with required details</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply</h3>
              <p className="text-muted-foreground">Browse schemes, check eligibility, and submit applications</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Track</h3>
              <p className="text-muted-foreground">Monitor application status and receive updates</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Government Scheme Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

