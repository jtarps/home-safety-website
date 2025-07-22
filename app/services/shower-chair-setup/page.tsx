import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Wrench, ShowerHead } from "lucide-react";
import Link from "next/link";

export default function ShowerChairSetupPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Shower Chair Setup
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Safe, Comfortable Shower Chair Setup
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Enjoy safe, independent bathing with professional shower chair
              assembly and placement—customized for your needs and space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Book Shower Chair Setup</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subtypes Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Types of Shower Chairs We Set Up
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Standard Shower Chairs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Height-adjustable legs</li>
                  <li>Non-slip feet</li>
                  <li>Lightweight and portable</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transfer Benches</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>For tub-to-shower transfers</li>
                  <li>Extra-wide seating</li>
                  <li>Sturdy, stable design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Rolling Shower Chairs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Wheeled for easy movement</li>
                  <li>Locking casters for safety</li>
                  <li>Ideal for caregivers</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom & Specialty Chairs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Swivel seats, commode chairs, bariatric options</li>
                  <li>Custom fit for your shower or tub</li>
                  <li>Professional recommendations</li>
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
            Why Choose Brothers for Shower Chair Setup?
          </h2>
          <ul className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
            <li className="flex items-start gap-2">
              <Shield className="w-6 h-6 text-blue-600 mt-1" /> Installed by
              licensed, insured professionals
            </li>
            <li className="flex items-start gap-2">
              <Wrench className="w-6 h-6 text-blue-600 mt-1" /> Custom fit for
              your shower or tub
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" /> Fast,
              clean assembly and placement
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" /> 1-year
              workmanship warranty
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />{" "}
              Recommendations for best safety and comfort
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Safer, More Comfortable Showers?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your professional shower chair setup today and enjoy peace of
            mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Book Your Setup</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
