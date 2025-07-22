"use client";

import { Header } from "@/components/header";
import { PostalCodeChecker } from "@/components/postal-code-checker";
import { ServicesSection } from "@/components/services-section";
import { HowItWorks } from "@/components/how-it-works";
import { Button } from "@/components/ui/button";
import {
  Star,
  Users,
  Clock,
  Calendar,
  DollarSign,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What areas do you service?",
      answer:
        "We service the entire Greater Toronto Area (GTA) including Toronto, Mississauga, Brampton, Markham, Richmond Hill, Vaughan, Oakville, Burlington, and surrounding communities. Enter your postal code above to check availability.",
    },
    {
      question: "How quickly can you install?",
      answer:
        "Most installations are completed the same day or within 24 hours of booking. Our certified technicians arrive on time and typically complete grab bar and railing installations in under 2 hours.",
    },
    {
      question: "Are your prices really flat-rate with no hidden fees?",
      answer:
        "Yes! Our pricing is completely transparent. The price you see is the price you pay. No hidden fees, no surprises. All hardware and installation is included in our flat-rate pricing.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "All our installations come with a 1-year workmanship warranty. We use high-quality, corrosion-resistant hardware and ensure proper installation to wall studs for maximum strength and durability.",
    },
    {
      question: "Do I need to be home during installation?",
      answer:
        "While we prefer to have someone home to discuss placement and ensure satisfaction, we can work with your schedule. Our technicians are professional, respectful, and will clean up after themselves.",
    },
    {
      question: "Can you install in any type of home?",
      answer:
        "Yes! We install in houses, condos, apartments, and retirement communities. Our technicians are experienced with various wall types and can work around existing fixtures and finishes.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[420px] lg:min-h-[540px] w-full overflow-hidden pt-16 sm:pt-20 pb-0"
        style={{
          aspectRatio: "16/9",
          maxHeight: 600,
        }}
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <img
          src="/brothershero2.png"
          alt="Home Safety Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: "brightness(0.85)" }}
        />
        {/* Subtle blur and overlay for readability */}
        <div className="absolute inset-0 backdrop-blur-[2.5px] bg-black/34 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <div className="max-w-4xl mx-auto mb-2 sm:mb-4">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 drop-shadow max-w-3xl lg:max-w-5xl mx-auto leading-tight"
            >
              Prevent Falls with
              <br />
              <span>Fast, Flat-Rate Installs</span>
            </h1>
            <div className="flex justify-center mt-2 mb-2">
              <span className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 font-semibold text-white text-ml shadow">
                <span role="img" aria-label="Canadian flag">
                  🇨🇦
                </span>{" "}
                Proudly Canadian
              </span>
            </div>
          </div>
          <div className="max-w-3xl w-full mx-auto mb-4">
            <PostalCodeChecker />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-4 sm:mb-6 leading-snug drop-shadow max-w-xl mx-auto">
            Grab bars, handrails, stairlifts & more—installed by pros.
          </p>
        </div>
      </section>

      {/* Visual separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Trust Indicators - moved up */}
      <div className="py-16" style={{ backgroundColor: "#f2a26a" }}>
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-x-16 gap-y-8 text-gray-700">
          <div className="flex items-center space-x-4">
            <Star
              className="w-12 h-12"
              style={{ color: "#dd6e18" }}
              aria-hidden="true"
            />
            <span className="font-semibold text-xl">5/5 average rating</span>
          </div>
          <div className="flex items-center space-x-4">
            <Users
              className="w-12 h-12"
              style={{ color: "#dd6e18" }}
              aria-hidden="true"
            />
            <span className="font-semibold text-xl">100+ happy installs</span>
          </div>
          <div className="flex items-center space-x-4">
            <Clock
              className="w-12 h-12"
              style={{ color: "#dd6e18" }}
              aria-hidden="true"
            />
            <span className="font-semibold text-xl">
              Most jobs done same-day
            </span>
          </div>
        </div>
      </div>

      {/* Visual separator between trust indicators and services */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="h-8 bg-gray-50"></div>

      <ServicesSection />

      {/* Visual separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <HowItWorks />

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#183f64" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#183f64", opacity: 0.85 }}
        ></div>
        {/* CTA Content */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#dd6e18" }}
            >
              Ready to Make Your Home Safer?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who trust us with their home
              safety needs.
            </p>
            <Button
              asChild
              size="lg"
              className="text-xl px-10 py-4 h-auto rounded-xl font-bold shadow-lg"
              style={{ backgroundColor: "#dd6e18", color: "#fff" }}
            >
              <Link href="/booking">Schedule Your Installation Today</Link>
            </Button>
          </div>
        </div>
        {/* Add visual separation between CTA and feature banner */}
        <div className="h-4"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60 mb-4"></div>
        {/* Feature Banner */}
        <div
          className="relative z-10 py-8 border-b"
          style={{ borderColor: "#dd6e18" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 text-white">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#dd6e18" }}
                >
                  <DollarSign
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Flat pricing — no hidden fees
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Transparent pricing with no surprises
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#dd6e18" }}
                >
                  <UserCheck
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Vetted installers, fast service
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Professional, certified technicians
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#dd6e18" }}
                >
                  <Calendar className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Cancel or reschedule anytime
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Flexible scheduling to fit your life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our home safety services
              </p>
            </div>

            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="px-8 py-3 rounded-xl font-semibold"
                style={{ backgroundColor: "#dd6e18", color: "#fff" }}
              >
                <Link href="/faqs">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
