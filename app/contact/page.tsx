"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");
    setError("");
    // Basic validation
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }
    const { error } = await supabase.from("contacts").insert([
      {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      },
    ]);
    if (error) {
      setError("There was an error submitting your message. Please try again.");
    } else {
      setSuccess("Thank you! Your message has been sent.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to make your home safer? Get in touch with our team for a
              free consultation and quote. We're here to help with all your home
              safety needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={form.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={form.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(416) 555-0123"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="grab-bars">Grab Bar Installation</option>
                        <option value="stair-railings">Stair Railings</option>
                        <option value="wheelchair-ramps">
                          Wheelchair Ramps
                        </option>
                        <option value="bathroom-safety">Bathroom Safety</option>
                        <option value="home-modifications">
                          Home Modifications
                        </option>
                        <option value="safety-assessment">
                          Safety Assessment
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and any specific requirements..."
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    {success && (
                      <div className="text-green-600 font-medium">
                        {success}
                      </div>
                    )}
                    {error && (
                      <div className="text-red-600 font-medium">{error}</div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={submitting}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-6 h-6 text-blue-600" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-orange-600 mb-2">
                      <Link
                        href="tel:+16473710899"
                        className="hover:underline transition-colors text-3xl font-extrabold text-orange-600"
                        aria-label="Call (647) 371-0899"
                      >
                        (647) 371-0899
                      </Link>
                    </p>
                    <p className="text-gray-600">
                      Call us for immediate assistance or to schedule a
                      consultation
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-6 h-6 text-blue-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold mb-2">
                      info@1800grabbars.com
                    </p>
                    <p className="text-gray-600">
                      Send us an email and we'll respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      Service Area
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold mb-2">
                      Greater Toronto Area
                    </p>
                    <p className="text-gray-600">
                      Including Toronto, Mississauga, Brampton, Markham,
                      Richmond Hill, Vaughan, and surrounding areas
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-6 h-6 text-blue-600" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-semibold">Emergency Only</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Emergency installations available 24/7
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Emergency Service Available
            </h2>
            <p className="text-xl text-red-700 mb-8">
              Need immediate assistance? We offer 24/7 emergency installation
              services for urgent safety needs.
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-2xl font-extrabold px-8 py-4"
            >
              <Link
                href="tel:+16473710899"
                className="flex items-center no-underline text-white text-2xl font-extrabold"
                aria-label="Call emergency line (647) 371-0899"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Call Emergency Line: (647) 371-0899
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Quick Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our frequently asked questions or browse our service
              pages for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <a href="/faqs">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  View FAQs
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/services">Browse Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
