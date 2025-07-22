import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Wrench, DoorOpen } from "lucide-react";
import Link from "next/link";

export default function AutomaticDoorOpenerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Automatic Door Opener Installation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Touch-Free, Accessible Entry Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Enjoy true independence with a professionally installed automatic
              door opener—perfect for homes, condos, and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Book Door Opener Install</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subtypes Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Types of Automatic Door Openers We Install
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Residential Door Openers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>For front, back, or interior doors</li>
                  <li>Push-button or remote activation</li>
                  <li>Discreet, quiet operation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Condo & Apartment Openers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Works with most condo entry systems</li>
                  <li>Key fob, keypad, or remote options</li>
                  <li>Secure, code-compliant installation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Commercial Door Openers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>For offices, clinics, and public spaces</li>
                  <li>ADA/OBC-compliant for accessibility</li>
                  <li>Heavy-duty, high-traffic solutions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom & Specialty Openers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Sliding, swinging, or double doors</li>
                  <li>Integration with smart home systems</li>
                  <li>Custom recommendations for your needs</li>
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
            Why Choose Brothers for Door Opener Installation?
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
              for your door and needs
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
              of opener types and controls
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Effortless Entry?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your professional automatic door opener installation today and
            enjoy true independence.
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
