import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Wrench, ArrowUpDown } from "lucide-react";
import Link from "next/link";

export default function StairliftInstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Stairlift (Chair Lift) Installation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Safe, Effortless Stairlift Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Regain independence and access every floor of your home with a
              professionally installed stairlift—customized for your stairs and
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Book Stairlift Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subtypes Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Types of Stairlifts We Install
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Straight Stairlifts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>For straight staircases</li>
                  <li>Quick installation</li>
                  <li>Compact, foldable design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Curved Stairlifts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Custom-built for stairs with turns or landings</li>
                  <li>Seamless fit and smooth ride</li>
                  <li>Professional measurement and fabrication</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Outdoor Stairlifts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Weather-resistant for exterior stairs</li>
                  <li>Durable, rust-proof materials</li>
                  <li>Safe access to porches and decks</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vertical Platform Lifts (VPLs)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    For vertical travel (porch, garage, or between floors)
                  </li>
                  <li>Wheelchair accessible</li>
                  <li>Custom installation and safety features</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Why Choose Brothers for Stairlift Installation?
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
              for your stairs and needs
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
              of stairlift types and finishes
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Effortless Access?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your professional stairlift installation today and enjoy safe,
            independent access to every floor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Book Your Install</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
