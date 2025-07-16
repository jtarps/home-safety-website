"use client";

import { Header } from "@/components/header";
import { MultiStepBooking } from "@/components/multi-step-booking";
import { TrustIndicators } from "@/components/trust-indicators";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award } from "lucide-react";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#183f64" }}
          >
            Fast, Flat-Rate Home Safety Installs
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Get a no-obligation quote and schedule your install in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <MultiStepBooking />
          </div>

          <div className="space-y-6">
            {/* Company Image and Trust Indicators */}
            <Card
              className="shadow-lg border-0"
              style={{ backgroundColor: "#f8fafc" }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md bg-white p-2">
                    <img
                      src="/logo-main.svg"
                      alt="Jay's Home Safety Solutions Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#183f64" }}
                  >
                    Jay's Home Safety Solutions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Professional home safety installations
                  </p>
                </div>

                <div className="space-y-4">
                  <div
                    className="flex items-center p-3 rounded-lg shadow-sm"
                    style={{ backgroundColor: "#fef7f0" }}
                  >
                    <span className="font-medium" style={{ color: "#dd6e18" }}>
                      ✓ Free safety assessment & quote
                    </span>
                  </div>
                  <div
                    className="flex items-center p-3 rounded-lg shadow-sm"
                    style={{ backgroundColor: "#f0f4f8" }}
                  >
                    <span className="font-medium" style={{ color: "#183f64" }}>
                      ✓ One flat fee. Never extra.
                    </span>
                  </div>
                  <div
                    className="flex items-center p-3 rounded-lg shadow-sm"
                    style={{ backgroundColor: "#fef7f0" }}
                  >
                    <span className="font-medium" style={{ color: "#dd6e18" }}>
                      ✓ Done right—same-day booking.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TrustIndicators />

            {/* Ratings and Awards */}
            {/* <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">5.0</div>
                  <div className="text-xs text-gray-600">Average Rating</div>
                  <div className="text-xs text-gray-500 mt-1">Based on 5,100+ verified customer reviews</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">#1</div>
                  <div className="text-xs text-gray-600">Safety Installation Company</div>
                  <div className="text-xs text-gray-500 mt-1">Named best overall safety company 2023</div>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
