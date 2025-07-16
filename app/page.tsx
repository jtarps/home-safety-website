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
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
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
          src="/hero-image.png"
          alt="Home Safety Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: "brightness(0.85)" }}
        />
        {/* Subtle blur and overlay for readability */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/25 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <div className="bg-black/30 rounded-xl px-3 py-3 sm:px-6 sm:py-4 max-w-2xl mx-auto mb-2 sm:mb-4">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow max-w-lg lg:max-w-2xl mx-auto leading-tight"
            >
              Prevent Falls with Fast, Flat-Rate Installs
            </h1>
          </div>
          <div className="max-w-md w-full mx-auto mb-4">
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
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-700">
          <div className="flex items-center space-x-2">
            <Star
              className="w-6 h-6"
              style={{ color: "#dd6e18" }}
              aria-hidden="true"
            />
            <span className="font-semibold">5/5 average rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users
              className="w-6 h-6"
              style={{ color: "#dd6e18" }}
              aria-hidden="true"
            />
            <span className="font-semibold">10,000+ happy installs</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock
              className="w-6 h-6"
              style={{ color: "#dd6e18" }}
              aria-hidden="true"
            />
            <span className="font-semibold">Most jobs done same-day</span>
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
              Join thousands of satisfied customers who trust us with their home
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
    </div>
  );
}
