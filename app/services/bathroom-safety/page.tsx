import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Phone,
  Shield,
  Droplets,
  Bath,
  ShowerHeadIcon as Shower,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";

export default function BathroomSafetyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prevent Bathroom Falls Today
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Grab bars, non-slip surfaces & safety upgrades—flat-rate, one
              visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/booking">Free Safety Assessment</Link>
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

      {/* Core Installs Grid */}
      {/* <section className="py-16 bg-gray-50">
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
      </section> */}

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Bathroom Safety Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Fall Prevention Statistics
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>80% of falls in the home occur in the bathroom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1 in 3 adults over 65 fall each year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Simple modifications can reduce fall risk by 50%
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Benefits of Safety Modifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Increased independence and confidence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reduced risk of injury and hospitalization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ability to age in place safely</span>
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
            Make Your Bathroom Safer Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional bathroom safety modifications starting at $299
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Free Safety Assessment</Link>
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
