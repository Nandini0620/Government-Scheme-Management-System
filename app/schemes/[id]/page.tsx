import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { FileText, Download, Calendar, Users, CheckCircle, AlertCircle } from "lucide-react"

export default function SchemeDetailsPage() {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link href="/schemes" className="text-sm text-muted-foreground hover:underline">
              All Schemes
            </Link>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm">Education Scholarship</span>
          </div>
          <h1 className="text-3xl font-bold">Education Scholarship</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge>Education</Badge>
            <span className="text-sm text-muted-foreground">Ministry of Education</span>
          </div>
        </div>
        <Button>Apply Now</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scheme Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Education Scholarship program aims to provide financial assistance to meritorious students from
                economically weaker sections of society to pursue higher education in recognized institutions across the
                country.
              </p>
              <p>
                This scholarship covers tuition fees, examination fees, and provides a maintenance allowance for the
                entire academic year. The program is designed to ensure that financial constraints do not prevent
                talented students from accessing quality education.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-medium">Application Deadline</h4>
                    <p className="text-sm text-muted-foreground">30 April 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-medium">Target Beneficiaries</h4>
                    <p className="text-sm text-muted-foreground">
                      Students from families with annual income below ₹8 lakhs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-medium">Benefit Amount</h4>
                    <p className="text-sm text-muted-foreground">Up to ₹1,00,000 per year</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-medium">Important Note</h4>
                    <p className="text-sm text-muted-foreground">
                      Applications must be submitted with all required documents
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="eligibility" className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="eligibility" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>The applicant must be a citizen of India</li>
                    <li>The annual family income should not exceed ₹8 lakhs</li>
                    <li>The applicant must have secured at least 60% marks in the qualifying examination</li>
                    <li>The applicant must be enrolled in a recognized institution for higher education</li>
                    <li>The applicant should not be receiving any other scholarship for the same course</li>
                    <li>The scholarship is available for undergraduate, postgraduate, and doctoral programs</li>
                  </ul>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Income Certificate Requirements</h4>
                    <p className="text-sm">
                      The income certificate should be issued by a competent authority not below the rank of Tehsildar.
                      The certificate should not be more than 6 months old from the date of application.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Aadhar Card</li>
                    <li>Income Certificate (not older than 6 months)</li>
                    <li>Marksheet of the qualifying examination</li>
                    <li>Admission letter/proof of enrollment from the institution</li>
                    <li>Bank account details (account should be in the name of the applicant)</li>
                    <li>Passport size photograph</li>
                    <li>Caste certificate (if applicable)</li>
                    <li>Disability certificate (if applicable)</li>
                  </ul>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Document Format</h4>
                    <p className="text-sm">
                      All documents should be uploaded in PDF format. The size of each document should not exceed 1 MB.
                      Photographs should be in JPG/JPEG format and should not exceed 100 KB.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-4 w-4" />
                      <span>Download Document Checklist</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Application Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative">
                    <div className="absolute h-full w-0.5 bg-muted left-3 top-0"></div>
                    <div className="space-y-8">
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-0 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                          1
                        </div>
                        <h4 className="font-medium">Registration</h4>
                        <p className="text-sm text-muted-foreground">
                          Create an account on the portal with your basic details and verify your email/mobile
                        </p>
                      </div>
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-0 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                          2
                        </div>
                        <h4 className="font-medium">Fill Application Form</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete the application form with all required personal, academic, and financial details
                        </p>
                      </div>
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-0 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                          3
                        </div>
                        <h4 className="font-medium">Upload Documents</h4>
                        <p className="text-sm text-muted-foreground">
                          Upload all required documents in the specified format
                        </p>
                      </div>
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-0 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                          4
                        </div>
                        <h4 className="font-medium">Submit Application</h4>
                        <p className="text-sm text-muted-foreground">
                          Review your application and submit it before the deadline
                        </p>
                      </div>
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-0 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                          5
                        </div>
                        <h4 className="font-medium">Track Application</h4>
                        <p className="text-sm text-muted-foreground">
                          Monitor the status of your application through your dashboard
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Selection Process</h4>
                    <p className="text-sm">
                      Applications will be screened for eligibility, and shortlisted candidates may be called for
                      document verification. Final selection will be based on merit and availability of funds.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Can I apply for multiple scholarships simultaneously?</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Yes, you can apply for multiple scholarships, but you can avail only one government scholarship
                        at a time for the same course.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium">What if my family income changes during the course?</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        You must inform the authorities if there is a significant change in your family income. Your
                        eligibility will be reassessed based on the updated information.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium">Is the scholarship renewable for the next academic year?</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Yes, the scholarship is renewable for the entire duration of the course, subject to satisfactory
                        academic performance (minimum 60% marks in each year/semester).
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium">How will I receive the scholarship amount?</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        The scholarship amount will be directly transferred to your bank account through Direct Benefit
                        Transfer (DBT).
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium">What if I change my course or institution?</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        You must inform the authorities immediately. Your scholarship may continue if the new
                        course/institution is eligible under the scheme.
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Still have questions?</h4>
                    <p className="text-sm">
                      Contact the helpdesk at <span className="font-medium">scholarship-help@gov.in</span> or call{" "}
                      <span className="font-medium">1800-123-4567</span> (Toll-free) between 9 AM to 6 PM on working
                      days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Apply Now</CardTitle>
              <CardDescription>Check eligibility and submit your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-medium mb-2">Application Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Opening Date:</span>
                    <span>01 January 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Closing Date:</span>
                    <span className="font-medium">30 April 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Result Declaration:</span>
                    <span>30 June 2025</span>
                  </div>
                </div>
              </div>
              <Button className="w-full">Check Eligibility & Apply</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded hover:bg-muted">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Scheme Guidelines</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded hover:bg-muted">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Application Form Sample</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 border rounded hover:bg-muted">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Income Certificate Format</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">📧</div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">scholarship-help@gov.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">📞</div>
                  <div>
                    <h4 className="font-medium">Helpline</h4>
                    <p className="text-sm text-muted-foreground">1800-123-4567 (Toll-free)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">🏢</div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Ministry of Education, Scholarship Division, Shastri Bhawan, New Delhi - 110001
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

