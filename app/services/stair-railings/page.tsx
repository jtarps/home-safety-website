import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Shield,
  StepBackIcon as Stairs,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function StairRailingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Safety & Style
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stair Railing Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional stair railing installation for indoor and outdoor
              stairs. Enhance safety while maintaining the beauty of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/booking">Book a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Code Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All installations meet local building codes and safety
                  standards for maximum protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Stairs className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tailored railing solutions for any staircase configuration,
                  indoor or outdoor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Expert Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional installation by certified technicians with years
                  of experience.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Railing Options */}
          <h2 className="text-3xl font-bold text-center mb-12">
            Railing Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Interior Railings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Wood railings (oak, maple, pine)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Metal railings (steel, aluminum)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Glass panel systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Cable railing systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exterior Railings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Aluminum railings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Wrought iron railings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Composite railings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Weather-resistant finishes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Handrail Styles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Traditional round handrails</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Modern square profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Ergonomic grip designs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>ADA compliant options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Safety Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Proper height specifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Secure mounting systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Non-slip surfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Child-safe designs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Installs Grid */}
      {/*
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Core Installs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Grab Bar Install",
                  price: "$89",
                  description:
                    "Secure one 24\u2033 grab bar in wall studs—perfect for tubs or hallways.",
                },
                {
                  title: "Stair Railing Install",
                  price: "$349",
                  description:
                    "Install one straight railing (up to 6 ft) for safe, confident steps.",
                },
                {
                  title: "Straight Ramp Install",
                  price: "$125 / ft",
                  description:
                    "Set modular ramp segments (up to 6 ft) with handrail for easy access.",
                },
                {
                  title: "Safety Rail Kit Install",
                  price: "$549",
                  description:
                    "Fit up to 8 ft of deck or porch rail posts + mid-rail—sturdy & code-ready.",
                },
                {
                  title: "Bathroom Safety Rail Install",
                  price: "$199",
                  description:
                    "Mount up to 3 rails around tub or toilet for added support.",
                },
                {
                  title: "Hand-Held Shower Install",
                  price: "$149",
                  description:
                    "Install slide-bar, hose & handheld sprayer—ideal for seated showers.",
                },
                {
                  title: "Automatic Door Opener Install",
                  price: "Custom Quote",
                  description:
                    "Mount & wire one door operator for touch-free entry.",
                },
                {
                  title: "Bath Surround (Bath Fitter) Install",
                  price: "Custom Quote",
                  description:
                    "Install custom acrylic tub surround—no-tear remodel in one visit.",
                },
              ].map((service, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-blue-700">
                      {service.title}
                    </h3>
                    <div className="text-2xl font-bold mb-2">
                      {service.price === "Custom Quote" ? (
                        <span className="text-orange-600">Custom Quote</span>
                      ) : (
                        <span className="text-blue-900">{service.price}</span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Installation Process
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Assess your staircase and discuss design preferences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Measurement</h3>
                <p className="text-gray-600 text-sm">
                  Precise measurements for custom fabrication
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Fabrication</h3>
                <p className="text-gray-600 text-sm">
                  Custom railing fabrication to exact specifications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Installation</h3>
                <p className="text-gray-600 text-sm">
                  Professional installation with minimal disruption
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="font-semibold mb-2">Inspection</h3>
                <p className="text-gray-600 text-sm">
                  Final inspection and quality assurance check
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Enhance Your Home's Safety & Style
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Professional stair railing installation with custom design options
            and expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/booking">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
