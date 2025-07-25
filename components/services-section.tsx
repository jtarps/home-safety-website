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
    id: "grab-bars",
    title: "Grab Bars",
    description:
      "Secure support in bathrooms, stairways, hallways, and entryways. Choose from straight, angled, flip-up, or portable styles for every need.",
  },
  {
    id: "stair-rails",
    title: "Stair Rails",
    description:
      "Sturdy handrails for safe, confident steps—custom fit for any staircase, indoors or out.",
  },
  {
    id: "safety-ramps",
    title: "Safety Ramps (Interior & Exterior)",
    description:
      "Barrier-free access with portable, modular, or custom-built ramps. OBC-compliant for safety and ease.",
  },
  {
    id: "stairlift-installation",
    title: "Stairlift (Chair Lift) Installation",
    description:
      "Straight, curved, or outdoor stairlifts for safe, effortless travel up and down stairs.",
  },
  {
    id: "accessible-bathroom-mods",
    title: "Accessible Bathroom Modifications",
    description:
      "Roll-in showers, walk-in tubs, raised toilets, and more—customized for your needs.",
  },
  {
    id: "automatic-door-opener",
    title: "Automatic Door Opener Installation",
    description:
      "Touch-free entry for true accessibility. Professional installation for homes and buildings.",
  },
  {
    id: "bathroom-safety-rails",
    title: "Bathroom Safety Rails",
    description:
      "Strategically placed rails for safe transfers and stability around tubs, toilets, and showers.",
  },
  {
    id: "shower-chair-setup",
    title: "Shower Chair Setup",
    description:
      "Professional assembly and placement of shower chairs for safe, comfortable bathing.",
  },
  {
    id: "handheld-shower-head",
    title: "Handheld Shower Head Installation",
    description:
      "Flexible, easy-to-use shower heads for seated or standing use—improving independence and comfort.",
  },
  {
    id: "doorway-widening",
    title: "Doorway Widening",
    description:
      "Expand doorways for wheelchair and walker access—seamless, code-compliant modifications.",
  },
  {
    id: "threshold-ramps",
    title: "Threshold Ramps/Reducers",
    description:
      "Eliminate trip hazards at doorways and flooring transitions with custom-fit ramps and reducers.",
  },
  {
    id: "handrails-support-rails",
    title: "Handrails & Support Rails",
    description:
      "Sturdy handrails and support rails for stairs, hallways, and high-traffic areas—installed to code.",
  },
  {
    id: "flooring-assessment",
    title: "Flooring Assessment & Modification",
    description:
      "Expert recommendations and installation of non-slip, low-pile flooring for maximum safety.",
  },
];

 export function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section id="services" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Professional Safety Installations at Flat Rates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No surprises, no hidden fees—just expert installations that make
            your home safer today
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
                  src={
                    service.id === "grab-bars"
                      ? "/grabbarinstall.png"
                      : service.id === "stair-rails"
                      ? "/stairrailings.png"
                      : service.id === "safety-ramps"
                      ? "/safetyramps.png"
                      : service.id === "bathroom-safety-rails"
                      ? "/bathroomsafety.png"
                      : service.id === "shower-chair-setup"
                      ? "/showerchair.png"
                      : service.id === "handheld-shower-head"
                      ? "/handheldshower.png"
                      : service.id === "stairlift-installation"
                      ? "/stairlift.png"
                      : service.id === "accessible-bathroom-mods"
                      ? "/accessiblebathroom.png"
                      : service.id === "automatic-door-opener"
                      ? "/automaticdoor.png"
                      : service.id === "doorway-widening"
                      ? "/doorwaywidening.png"
                      : service.id === "threshold-ramps"
                      ? "/thresholdramps.png"
                      : service.id === "handrails-support-rails"
                      ? "/handrails.png"
                      : service.id === "flooring-assessment"
                      ? "/flooringassessment.png"
                      : "/placeholder.jpg"
                  }
                  alt={`${service.title} installation service`}
                  className="object-cover w-full h-56 md:h-full rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
                />
              </div>
              {/* Text Section */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3
                  className="text-2xl font-extrabold mb-2 tracking-wide break-words leading-tight"
                  style={{
                    color: "#dd6e18",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                  title={service.title}
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
                  {/* Features removed as per new_code */}
                </ul>
                <Button
                  asChild
                  className={
                    service.id === "threshold-ramps" ||
                    service.id === "accessible-bathroom-mods"
                      ? "px-8 py-3 rounded-xl font-extrabold text-lg transition shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2 w-full max-w-full truncate"
                      : "px-8 py-3 rounded-xl font-extrabold text-lg transition shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2"
                  }
                  style={{
                    backgroundColor: "#dd6e18",
                    color: "#fff",
                    letterSpacing: "0.04em",
                  }}
                >
                  <Link
                    href={`/booking?service=${service.id}`}
                    className={
                      service.id === "threshold-ramps" ||
                      service.id === "accessible-bathroom-mods"
                        ? "flex items-center justify-center gap-2 no-underline w-full max-w-full truncate"
                        : "flex items-center justify-center gap-2 no-underline"
                    }
                  >
                    Check Availability
                    <ArrowRight
                      className="w-4 h-4 flex-shrink-0"
                      aria-hidden="true"
                    />
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
