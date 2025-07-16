"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Grid3X3,
  ShoppingCart,
  Bed,
  StepBackIcon as Stairs,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "grab-bar",
    title: "Grab Bar Install",
    price: "$89",
    description:
      "Secure one 24\u2033 grab bar in wall studs\u2014perfect for tubs or hallways.",
    icon: Grid3X3,
    features: [
      "All hardware included",
      "Professional installation",
      "1-year warranty",
    ],
  },
  {
    id: "stair-railing",
    title: "Stair Railing Install",
    price: "$349",
    description:
      "Install one straight railing (up to 6 ft) for safe, confident steps.",
    icon: Stairs,
    features: ["Custom fit", "Sturdy handrail", "Secure mounting"],
  },
  {
    id: "straight-ramp",
    title: "Straight Ramp Install",
    price: "$125 / ft",
    description:
      "Set modular ramp segments (up to 6 ft) with handrail for easy access.",
    icon: Grid3X3,
    features: ["Aluminum ramp", "Handrail included", "Non-slip surface"],
  },
  {
    id: "safety-rail-kit",
    title: "Safety Rail Kit Install",
    price: "$549",
    description:
      "Fit up to 8 ft of deck or porch rail posts + mid-rail\u2014sturdy & code-ready.",
    icon: Grid3X3,
    features: ["Deck/porch ready", "Code-compliant", "All hardware included"],
  },
  {
    id: "bathroom-safety-rail",
    title: "Bathroom Safety Rail Install",
    price: "$199",
    description: "Mount up to 3 rails around tub or toilet for added support.",
    icon: ShoppingCart,
    features: ["Up to 3 rails", "Custom placement", "Secure mounting"],
  },
  {
    id: "handheld-shower",
    title: "Hand-Held Shower Install",
    price: "$149",
    description:
      "Install slide-bar, hose & handheld sprayer\u2014ideal for seated showers.",
    icon: Bed,
    features: ["Slide-bar included", "Flexible hose", "Easy to use"],
  },
  {
    id: "auto-door-opener",
    title: "Automatic Door Opener Install",
    price: "Custom Quote",
    description: "Mount & wire one door operator for touch-free entry.",
    icon: Stairs,
    features: ["Touch-free entry", "Professional wiring", "Custom fit"],
  },
  {
    id: "bath-surround",
    title: "Bath Surround (Bath Fitter) Install",
    price: "Custom Quote",
    description:
      "Install custom acrylic tub surround\u2014no-tear remodel in one visit.",
    icon: ShoppingCart,
    features: ["Acrylic surround", "One-day install", "No demolition"],
  },
];

export function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section id="services" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Flat-Rate Safety Installs You Can Count On
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional home safety installations with transparent pricing and
            expert service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row items-stretch rounded-2xl shadow-lg bg-white overflow-hidden mb-4 border border-gray-200"
            >
              {/* Image Section */}
              <div className="md:w-1/2 flex items-center justify-center bg-blue-50">
                <img
                  src="/placeholder.jpg"
                  alt={`${service.title} installation service`}
                  className="object-cover w-full h-56 md:h-full rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                />
              </div>
              {/* Text Section */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3
                  className="text-2xl font-extrabold uppercase mb-2 tracking-wide"
                  style={{ color: "#dd6e18" }}
                >
                  {service.title}
                </h3>
                <p className="text-lg mb-4" style={{ color: "#183f64" }}>
                  {service.description}
                </p>
                <ul
                  className="list-disc list-inside mb-6"
                  style={{ color: "#183f64" }}
                >
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="px-8 py-3 rounded-xl font-extrabold text-lg transition shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2"
                  style={{
                    backgroundColor: "#dd6e18",
                    color: "#fff",
                    letterSpacing: "0.04em",
                  }}
                >
                  <Link
                    href={`/booking?service=${service.id}`}
                    className="flex items-center justify-center gap-2 no-underline"
                  >
                    Check Availability
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
