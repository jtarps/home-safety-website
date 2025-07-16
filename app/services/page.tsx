"use client";

import { Header } from "@/components/header";
import { PostalCodeChecker } from "@/components/postal-code-checker";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      id: "grab-bar",
      title: "Grab Bar Install",
      desc: "Secure one 24\u2033 grab bar in wall studs—perfect for tubs or hallways.",
    },
    {
      id: "stair-rail",
      title: "Stair Railing Install",
      desc: "Install one straight railing (up to 6 ft) for safe, confident steps.",
    },
    {
      id: "straight-ramp",
      title: "Straight Ramp Install",
      desc: "Set modular ramp segments (up to 6 ft) with handrail for easy access.",
    },
    {
      id: "rail-kit",
      title: "Safety Rail Kit Install",
      desc: "Fit up to 8 ft of deck or porch rail posts + mid-rail—sturdy & code-ready.",
    },
    {
      id: "bath-rail",
      title: "Bathroom Safety Rail Install",
      desc: "Mount up to 3 rails around tub or toilet for added support.",
    },
    {
      id: "shower",
      title: "Hand-Held Shower Install",
      desc: "Install slide-bar, hose & handheld sprayer—ideal for seated showers.",
    },
    {
      id: "door-opener",
      title: "Automatic Door Opener Install",
      desc: "Mount & wire one door operator for touch-free entry.",
    },
    {
      id: "bath-surround",
      title: "Bath Surround Install",
      desc: "Custom acrylic tub surround—no-tear remodel in one visit.",
    },
  ];

  return (
    <div>
      <Header />
      <section className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Home Safety Installation Services
        </h1>
        <p className="text-lg text-gray-600">
          Discover our expert, flat-rate home safety installs. Get a quote in
          minutes.
        </p>
      </section>
      {services.map(({ id, title, desc }, index) => {
        return (
          <section
            key={id}
            id={id}
            data-aos="fade-up"
            className="container mx-auto px-4 py-12 mb-8"
          >
            <div
              className="flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden shadow-lg"
              style={{ backgroundColor: "#183f64" }}
            >
              {/* Text Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h2
                  className="text-3xl font-extrabold uppercase mb-2 tracking-wide"
                  style={{ color: "#dd6e18" }}
                >
                  {title}
                </h2>
                <p className="text-blue-100 text-lg mb-4">{desc}</p>
                <p className="text-blue-200 mb-6">
                  Our certified installers handle every step with care—ensuring
                  a clean, sturdy, and attractive result.
                </p>
                <ul className="list-disc list-inside text-blue-200 mb-6">
                  <li>Anchored to wall studs for maximum strength</li>
                  <li>High-quality, corrosion-resistant hardware</li>
                  <li>1-year workmanship warranty</li>
                </ul>
                <button
                  className="px-10 py-4 rounded-xl font-extrabold text-lg transition shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  style={{
                    backgroundColor: "#dd6e18",
                    color: "#fff",
                    letterSpacing: "0.04em",
                  }}
                  onClick={() => setIsModalOpen(true)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#c45f13")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#dd6e18")
                  }
                >
                  Check Availability
                </button>
              </div>
              {/* Image Placeholder */}
              <div
                className="md:w-1/3 flex items-center justify-center"
                style={{ backgroundColor: "#183f64" }}
              >
                <img
                  src="/placeholder.jpg"
                  alt="Service placeholder"
                  className="object-cover w-full h-64 md:h-full"
                />
              </div>
            </div>
          </section>
        );
      })}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
          style={{ background: "rgba(24, 63, 100, 0.92)" }}
        >
          <div className="relative w-full max-w-lg mx-4 sm:mx-auto">
            <div className="absolute top-4 right-4 z-10">
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-3xl text-orange-600 shadow-lg hover:bg-orange-100 hover:text-orange-700 transition"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl px-6 py-10 sm:px-12 flex flex-col items-center">
              <div
                className="w-16 h-2 rounded-full mb-6"
                style={{ backgroundColor: "#dd6e18" }}
              ></div>
              <h3
                className="text-2xl font-extrabold mb-2 text-center"
                style={{ color: "#183f64", letterSpacing: "0.02em" }}
              >
                Check Service Availability
              </h3>
              <p className="text-gray-700 mb-6 text-center text-base sm:text-lg">
                Enter your postal code to see if we service your area.
              </p>
              <div className="w-full max-w-md mx-auto mb-2">
                <PostalCodeChecker />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
