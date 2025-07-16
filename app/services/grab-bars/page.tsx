import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Clock, Wrench } from "lucide-react";
import Link from "next/link";

export default function GrabBarsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Professional Installation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Secure Grab Bar Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Flat-rate grab bar installs—one visit, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
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
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ADA-compliant installations for maximum safety.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Professional Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Licensed technicians ensure secure mounting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Same-Day Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Schedule today—installed in under 2 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Types of Grab Bars */}
          {/*
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Types of Grab Bars We Install
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Straight Grab Bars</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>12", 16", 18", 24", 32", 36" lengths</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Horizontal and vertical mounting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Stainless steel and powder-coated options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>L-Shaped Grab Bars</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Corner installations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Dual support positioning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Space-saving design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Flip-Up Grab Bars</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Space-saving when not in use</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Perfect for small bathrooms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Easy operation mechanism</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Decorative Grab Bars</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Stylish finishes and designs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Match existing bathroom fixtures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Safety without compromising aesthetics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Installation Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">
                  We evaluate your space and discuss your specific needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">
                  Determine optimal placement and select appropriate grab bars
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Installation</h3>
                <p className="text-gray-600">
                  Professional mounting with proper anchoring techniques
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Testing</h3>
                <p className="text-gray-600">
                  Thorough testing to ensure secure installation and safety
                </p>
              </div>
            </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Your Home Upgrade?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your flat-rate grab bar install today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/booking">Book Your Install</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
