import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Wrench, Stairs } from "lucide-react";
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
              Stair Railings
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Safe, Stylish Stair Railings for Every Home
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Prevent falls and add elegance with professionally installed stair
              railings—customized for safety, code, and your style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Book Stair Railing Installation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subtypes Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Types of Stair Railings We Install
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Interior Railings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Wood, metal, or composite options</li>
                  <li>Custom lengths and finishes</li>
                  <li>OBC/ADA-compliant for safety</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exterior Railings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Weather-resistant materials</li>
                  <li>Deck, porch, and entryway railings</li>
                  <li>Secure, long-lasting installation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom & Decorative Railings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Modern, traditional, or custom designs</li>
                  <li>Glass, cable, or wrought iron options</li>
                  <li>Tailored to your home's style</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Handrail Upgrades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>Replace or reinforce existing handrails</li>
                  <li>Improve safety and accessibility</li>
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
            Why Choose Brothers for Stair Railings?
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
              of styles and finishes
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Safer Stairs?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your professional stair railing installation today and enjoy
            safety and style throughout your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Book Your Installation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
