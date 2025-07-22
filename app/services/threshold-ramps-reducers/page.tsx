import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Wrench, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ThresholdRampsReducersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Threshold Ramps & Reducers
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Smooth Transitions, Safe Access
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Eliminate trip hazards and create seamless transitions with
              professional threshold ramps and reducers—perfect for wheelchairs,
              walkers, and everyday safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Book Threshold Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subtypes Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Types of Threshold Solutions We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Threshold Ramps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Custom-fit ramps for any threshold height</li>
                  <li>Non-slip surfaces for safety</li>
                  <li>Weather-resistant materials</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Threshold Reducers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Lower existing thresholds</li>
                  <li>Create smooth transitions</li>
                  <li>Maintain weather protection</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transition Strips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Seamless floor-to-floor transitions</li>
                  <li>Eliminate height differences</li>
                  <li>Professional finish</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Specialized ramps for unique situations</li>
                  <li>Integration with existing door systems</li>
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
            Why Choose Brothers for Threshold Solutions?
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
              for your specific threshold
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
              of materials and finishes
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Smooth, Safe Transitions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your professional threshold solutions today and eliminate trip
            hazards throughout your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Book Your Solution</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
