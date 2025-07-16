import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Phone,
  Shield,
  Wrench,
  Accessibility,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";

export default function WheelchairRampsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Wheelchair Ramp Installation
            </h1>
            <p className="text-xl mb-8 opacity-90">
              ADA-compliant wheelchair ramps for homes and businesses.
              Custom-built solutions for safe, independent access to your
              property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/booking">Free Assessment</Link>
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

      {/* Types of Ramps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Wheelchair Ramp Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Accessibility className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Modular Ramps</h3>
                  <p className="text-gray-600 mb-4">
                    Aluminum modular systems that can be configured for any
                    entrance. Portable and adjustable.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Quick installation</li>
                    <li>• Portable options</li>
                    <li>• Various lengths</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Permanent Ramps
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Custom-built permanent ramps designed specifically for your
                    property and needs.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Custom design</li>
                    <li>• Concrete or wood</li>
                    <li>• Long-term solution</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Threshold Ramps
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Small ramps for doorway thresholds and minor elevation
                    changes up to 6 inches.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Doorway access</li>
                    <li>• Rubber or aluminum</li>
                    <li>• Easy installation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ADA Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              ADA Compliance & Safety Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Slope Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Maximum 1:12 slope ratio (1 inch rise per 12 inches
                      length)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Landings every 30 feet for longer ramps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>5-foot by 5-foot landing at top and bottom</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Safety Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Handrails on both sides (34"-38" height)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Non-slip surface materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Edge protection to prevent wheels from slipping</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Installation Process
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Site Assessment
                  </h3>
                  <p className="text-gray-600">
                    We measure your entrance, assess the terrain, and determine
                    the best ramp configuration for your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                  <p className="text-gray-600">
                    Our team creates a custom ramp design that meets ADA
                    requirements and fits your property perfectly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Installation
                  </h3>
                  <p className="text-gray-600">
                    Expert installation with proper foundations, secure
                    mounting, and all safety features included.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Final Inspection
                  </h3>
                  <p className="text-gray-600">
                    Thorough safety inspection and walkthrough to ensure
                    everything meets standards and your satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Wheelchair Ramp Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Threshold Ramps
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $150-$400
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Up to 6" rise
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Rubber or aluminum
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Quick installation
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-500 border-2">
                <CardContent className="p-6">
                  <Badge className="mb-4">Most Popular</Badge>
                  <h3 className="text-xl font-semibold mb-4">Modular Ramps</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $100-$150<span className="text-lg font-normal">/ft</span>
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Aluminum construction
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Portable options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      ADA compliant
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      5-year warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Permanent Ramps
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $200-$300<span className="text-lg font-normal">/ft</span>
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Concrete or wood
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Permanent solution
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      10-year warranty
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
                <Link href="/booking">Get Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Improve Accessibility Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional wheelchair ramp installation with free assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Schedule Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="tel:1-800-SAFE-HOME">
                <Phone className="mr-2 h-5 w-5" />
                Call 1-800-SAFE-HOME
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
