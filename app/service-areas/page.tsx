import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      name: "Toronto",
      cities: [
        "Downtown Toronto",
        "North York",
        "Scarborough",
        "Etobicoke",
        "East York",
        "York",
      ],
    },
    {
      name: "Peel Region",
      cities: ["Mississauga", "Brampton", "Caledon"],
    },
    {
      name: "York Region",
      cities: [
        "Markham",
        "Vaughan",
        "Richmond Hill",
        "Aurora",
        "Newmarket",
        "King City",
        "Stouffville",
      ],
    },
    {
      name: "Durham Region",
      cities: ["Pickering", "Ajax", "Whitby", "Oshawa", "Uxbridge"],
    },
    {
      name: "Halton Region",
      cities: ["Oakville", "Burlington", "Milton", "Halton Hills"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service Areas
            </h1>
            <p className="text-xl text-white-600 mb-8 max-w-3xl mx-auto">
              Brothers brings fast, flat-rate home-safety installations to the
              GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link href="/booking">Check Availability</Link>
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
      </section>

      {/* Primary Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
            <p className="text-lg text-gray-600">
              Our certified team installs grab bars, rails, and more across
              these regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    {area.name}
                  </h3>
                  <ul className="space-y-2">
                    {area.cities.map((city, cityIndex) => (
                      <li key={cityIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{city}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details
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
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Serving the GTA</h2>
          <p className="text-xl mb-8 opacity-90">
            Expert home-safety installs throughout the Greater Toronto Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Check Service Availability</Link>
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
      </section>
    </div>
  );
}
