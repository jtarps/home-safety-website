import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Phone,
  Home,
  Lightbulb,
  DoorOpen,
  StepBackIcon as Stairs,
  Shield,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Section } from "@/components/section";

export default function HomeModificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accessible Bathroom & Home Modifications
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Roll-in showers, walk-in tubs, doorway widening, ramps, and
              more—customized for your needs, with flat-rate, professional
              installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/booking">Free Home Assessment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="tel:+16473710899">(647) 371-0899</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Modification Types */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Accessible Bathroom & Home Modification Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <DoorOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Doorway Modifications
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Widen doorways, install accessible door hardware, and remove
                    thresholds for wheelchair access.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Doorway widening (32" minimum)</li>
                    <li>• Lever-style door handles</li>
                    <li>• Threshold removal</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Lighting Improvements
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Enhanced lighting throughout the home with motion sensors
                    and improved visibility.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Motion-activated lighting</li>
                    <li>• LED upgrades</li>
                    <li>• Pathway lighting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Stairs className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Stairway Safety
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Handrails, improved lighting, and non-slip surfaces for
                    safer stair navigation.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Handrail installation</li>
                    <li>• Non-slip stair treads</li>
                    <li>• Stairway lighting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Home className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Flooring Solutions
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Non-slip flooring, carpet removal, and accessible flooring
                    materials for safer mobility.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Non-slip flooring installation</li>
                    <li>• Carpet to hard surface conversion</li>
                    <li>• Transition strip installation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Home className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Accessible Bathroom Modifications
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Roll-in showers, walk-in tubs, raised toilets, grab bars,
                    and non-slip flooring for safe, independent bathing.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Roll-in shower installation</li>
                    <li>• Walk-in tub installation</li>
                    <li>• Raised toilet and grab bar installation</li>
                    <li>• Non-slip flooring and threshold reducers</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <DoorOpen className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Bedroom Accessibility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Bedroom modifications for easier access including closet
                    organization and accessible storage.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Closet rod lowering</li>
                    <li>• Accessible storage solutions</li>
                    <li>• Bedroom lighting upgrades</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Benefits of Home Modifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Aging in Place</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Stay in your home longer with proper modifications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Maintain independence and quality of life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Avoid costly assisted living facilities</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Safety & Accessibility
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reduce fall risk throughout the home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Improve mobility and navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Accommodate wheelchairs and mobility aids</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Modification Process
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Comprehensive Assessment
                  </h3>
                  <p className="text-gray-600">
                    We evaluate your entire home, identifying areas that need
                    modification for safety and accessibility.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Custom Plan Development
                  </h3>
                  <p className="text-gray-600">
                    Our team creates a personalized modification plan based on
                    your specific needs and budget.
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
                    Skilled craftsmen complete all modifications with attention
                    to detail and minimal disruption.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Final Walkthrough
                  </h3>
                  <p className="text-gray-600">
                    We ensure all modifications meet your needs and provide
                    ongoing support and warranty coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      {/*
      <Section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Home Modification Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Essential Package
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $899
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Lighting upgrades (3 rooms)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Door hardware replacement
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Basic grab bar installation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Safety assessment
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-500 border-2">
                <CardContent className="p-6">
                  <Badge className="mb-4">Most Popular</Badge>
                  <h3 className="text-xl font-semibold mb-4">
                    Comprehensive Package
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $2,499
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Complete lighting upgrade
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Doorway modifications
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Bathroom safety package
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Flooring improvements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      2-year warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Complete Home Package
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    $4,999
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Whole-home accessibility
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Kitchen modifications
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Bedroom accessibility
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Stairway safety upgrades
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      5-year warranty
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
      </Section>
      */}

      {/* Why Choose Us Section */}
      <Section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Why Choose Brothers for Accessible Modifications?
          </h2>
          <ul className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
            <li className="flex items-start gap-2">
              <Shield className="w-6 h-6 text-blue-600 mt-1" />{" "}
              OBC/ADA-compliant for safety and accessibility
            </li>
            <li className="flex items-start gap-2">
              <Wrench className="w-6 h-6 text-blue-600 mt-1" /> Installed by
              licensed, insured professionals
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" /> Custom fit
              for your home and needs
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" /> Fast,
              clean installs—minimal disruption
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" /> 1-year
              workmanship warranty
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" /> Wide range
              of modification types and finishes
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Safer Living?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your accessible bathroom or home modification today and enjoy
            safety, comfort, and independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Book Your Modification</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="tel:+16473710899">Call (647) 371-0899</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
