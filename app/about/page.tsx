import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Award, Shield, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Jay's
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              At Jay's, we're on a mission to help you live more safely and
              independently at home. From grab bars to stairlifts, our certified
              team delivers fast, flat-rate installations backed by a
              satisfaction guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                <p className="text-gray-600 mb-4">
                  Jay's was born from a passion for helping seniors and families
                  feel safe at home. Our team brings together years of expertise
                  in accessibility and home improvement to take the worry out of
                  safety upgrades.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be serving the Greater Toronto Area with
                  fast, flat-rate installs and personal service you can trust.
                </p>
              </div>
              <div
                className="p-8 rounded-lg shadow-lg"
                style={{ backgroundColor: "#183f64" }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "#dd6e18" }}
                    >
                      100+
                    </div>
                    <div className="text-white">Homes Served</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "#dd6e18" }}
                    >
                      100+
                    </div>
                    <div className="text-white">Installs Completed</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "#dd6e18" }}
                    >
                      5.0
                    </div>
                    <div className="text-white">Star Rating</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "#dd6e18" }}
                    >
                      100%
                    </div>
                    <div className="text-white">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield
                    className="w-12 h-12 mb-4"
                    style={{ color: "#dd6e18" }}
                  />
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every installation meets or exceeds safety standards. We
                    never compromise on quality or safety protocols.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart
                    className="w-12 h-12 mb-4"
                    style={{ color: "#dd6e18" }}
                  />
                  <CardTitle>Compassionate Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We understand that home modifications can be emotional. We
                    approach every job with empathy and respect.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award
                    className="w-12 h-12 mb-4"
                    style={{ color: "#dd6e18" }}
                  />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We take pride in our craftsmanship and stand behind every
                    installation with comprehensive warranties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Certifications & Credentials
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Award
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#dd6e18" }}
                />
                <h3 className="font-semibold mb-2">Licensed Contractor</h3>
                <p className="text-gray-600 text-sm">
                  Fully licensed and insured in Ontario
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Shield
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#dd6e18" }}
                />
                <h3 className="font-semibold mb-2">Safety Certified</h3>
                <p className="text-gray-600 text-sm">
                  WSIB compliant and safety trained
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: "#183f64" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#dd6e18" }}>
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their home
            safety needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-xl font-bold shadow-lg"
              style={{ backgroundColor: "#dd6e18", color: "#fff" }}
            >
              <Link href="/booking">Schedule Service</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent rounded-xl"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
