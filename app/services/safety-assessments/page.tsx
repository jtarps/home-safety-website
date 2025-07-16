import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ClipboardCheck, Eye, Shield } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";

export default function SafetyAssessmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home Safety Assessments for Peace of Mind
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Identify hazards & get expert recommendations—flat-rate, no
              obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/booking">Get My Free Assessment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="tel:1-800-SAFE-HOME">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Types */}
      {/*
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Types of Safety Assessments
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <ClipboardCheck className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Basic Safety Assessment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive walkthrough identifying common safety hazards
                    and accessibility barriers.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Fall risk evaluation</li>
                    <li>• Lighting assessment</li>
                    <li>• Basic accessibility review</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Eye className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Occupational Therapy Assessment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional OT evaluation focusing on daily living
                    activities and mobility needs.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Functional mobility review</li>
                    <li>• ADL assessment</li>
                    <li>• Equipment recommendations</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    ADA Compliance Assessment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Detailed evaluation for ADA compliance requirements for
                    businesses and public spaces.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Code compliance review</li>
                    <li>• Accessibility standards</li>
                    <li>• Compliance documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* What We Assess */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What We Assess
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Interior Safety</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Bathroom safety and fall prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Stairway safety and handrail adequacy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Lighting levels throughout the home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flooring conditions and trip hazards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Doorway widths and accessibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Kitchen and bedroom accessibility</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Exterior Safety</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Entrance accessibility and ramp needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Outdoor lighting and pathway safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Porch and deck safety features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Driveway and walkway conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Outdoor handrail requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Emergency egress evaluation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Assessment Process
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Initial Consultation
                  </h3>
                  <p className="text-gray-600">
                    We discuss your specific concerns, mobility needs, and
                    assessment goals before beginning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Comprehensive Walkthrough
                  </h3>
                  <p className="text-gray-600">
                    Room-by-room evaluation documenting safety hazards,
                    accessibility barriers, and improvement opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Detailed Report
                  </h3>
                  <p className="text-gray-600">
                    Written report with photos, prioritized recommendations, and
                    cost estimates for improvements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Follow-up Consultation
                  </h3>
                  <p className="text-gray-600">
                    Review of findings and recommendations with implementation
                    planning and resource connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/*
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Assessment Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Basic Assessment
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $149
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      1-2 hour walkthrough
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Basic safety checklist
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Verbal recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Resource list provided
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-500 border-2">
                <CardContent className="p-6">
                  <Badge className="mb-4">Most Popular</Badge>
                  <h3 className="text-xl font-semibold mb-4">
                    Comprehensive Assessment
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $299
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      2-3 hour detailed evaluation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Written report with photos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Prioritized recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Cost estimates included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Follow-up consultation
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Professional OT Assessment
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $449
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Licensed OT evaluation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Functional assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Equipment recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Insurance documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Care plan development
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <Link href="/booking">Schedule Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Why Get a Safety Assessment?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Prevention is Key
                </h3>
                <p className="text-gray-600 mb-4">
                  Identifying and addressing safety hazards before an accident
                  occurs can prevent serious injuries and maintain independence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Prevent falls and injuries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Maintain independence longer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Peace of mind for families</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Professional Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  Our certified assessors have the training and experience to
                  identify hazards you might miss and recommend appropriate
                  solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Certified safety professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Evidence-based recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Cost-effective solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Free Assessment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule today and take the first step to a safer home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Get My Free Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="tel:1-800-SAFE-HOME">
                <Phone className="mr-2 h-5 w-5" />
                Call 1‑800‑SAFE-HOME
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
