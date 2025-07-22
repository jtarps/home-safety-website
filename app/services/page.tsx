"use client";

import { Header } from "@/components/header";
import { PostalCodeChecker } from "@/components/postal-code-checker";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: "grab-bars",
      title: "Grab Bars",
      desc: "Secure support in bathrooms, stairways, hallways, and entryways. Choose from straight, angled, flip-up, or portable styles for every need.",
    },
    {
      id: "stair-rails",
      title: "Stair Rails Installation",
      desc: "Sturdy handrails for safe, confident steps—custom fit for any staircase, indoors or out.",
    },
    {
      id: "safety-ramps",
      title: "Safety Ramps (Interior & Exterior)",
      desc: "Barrier-free access with portable, modular, or custom-built ramps. OBC-compliant for safety and ease.",
    },
    {
      id: "bathroom-safety-rails",
      title: "Bathroom Safety Rails",
      desc: "Strategically placed rails for safe transfers and stability around tubs, toilets, and showers.",
    },
    {
      id: "shower-chair-setup",
      title: "Shower Chair Setup",
      desc: "Professional assembly and placement of shower chairs for safe, comfortable bathing.",
    },
    {
      id: "handheld-shower-head",
      title: "Handheld Shower Head Installation",
      desc: "Flexible, easy-to-use shower heads for seated or standing use—improving independence and comfort.",
    },
    {
      id: "stairlift-installation",
      title: "Stairlift (Chair Lift) Installation",
      desc: "Straight, curved, or outdoor stairlifts for safe, effortless travel up and down stairs.",
    },
    {
      id: "accessible-bathroom-mods",
      title: "Accessible Bathroom Modifications",
      desc: "Roll-in showers, walk-in tubs, raised toilets, and more—customized for your needs.",
    },
    {
      id: "automatic-door-opener",
      title: "Automatic Door Opener Installation",
      desc: "Touch-free entry for true accessibility. Professional installation for homes and buildings.",
    },
    {
      id: "doorway-widening",
      title: "Doorway Widening",
      desc: "Expand doorways for wheelchair and walker access—seamless, code-compliant modifications.",
    },
    {
      id: "threshold-ramps",
      title: "Threshold Ramps/Reducers",
      desc: "Eliminate trip hazards at doorways and flooring transitions with custom-fit ramps and reducers.",
    },
    {
      id: "handrails-support-rails",
      title: "Handrails & Support Rails",
      desc: "Sturdy handrails and support rails for stairs, hallways, and high-traffic areas—installed to code.",
    },
    {
      id: "flooring-assessment",
      title: "Flooring Assessment & Modification",
      desc: "Expert recommendations and installation of non-slip, low-pile flooring for maximum safety.",
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
            className="container mx-auto px-4 py-4 mb-2"
          >
            <div
              className="flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden shadow-lg transition-all duration-200 hover:shadow-2xl hover:ring-2 hover:ring-orange-300 hover:scale-[1.02]"
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
                  src={
                    id === "grab-bars"
                      ? "/grabbarinstall.png"
                      : id === "stair-rails"
                      ? "/stairrailings.png"
                      : id === "safety-ramps"
                      ? "/safetyramps.png"
                      : id === "bathroom-safety-rails"
                      ? "/bathroomsafety.png"
                      : id === "shower-chair-setup"
                      ? "/showerchair.png"
                      : id === "handheld-shower-head"
                      ? "/handheldshower.png"
                      : id === "stairlift-installation"
                      ? "/stairlift.png"
                      : id === "accessible-bathroom-mods"
                      ? "/accessiblebathroom.png"
                      : id === "automatic-door-opener"
                      ? "/automaticdoor.png"
                      : id === "doorway-widening"
                      ? "/doorwaywidening.png"
                      : id === "threshold-ramps"
                      ? "/thresholdramps.png"
                      : id === "handrails-support-rails"
                      ? "/handrails.png"
                      : id === "flooring-assessment"
                      ? "/flooringassessment.png"
                      : "/placeholder.jpg"
                  }
                  alt={
                    id === "grab-bars"
                      ? "Professional grab bar installation"
                      : id === "stair-rails"
                      ? "Professional stair railing installation"
                      : id === "safety-ramps"
                      ? "Professional safety ramp installation"
                      : id === "bathroom-safety-rails"
                      ? "Professional bathroom safety rail installation"
                      : id === "shower-chair-setup"
                      ? "Professional shower chair setup"
                      : id === "handheld-shower-head"
                      ? "Professional handheld shower head installation"
                      : id === "stairlift-installation"
                      ? "Professional stairlift installation"
                      : id === "accessible-bathroom-mods"
                      ? "Professional accessible bathroom modification"
                      : id === "automatic-door-opener"
                      ? "Professional automatic door opener installation"
                      : id === "doorway-widening"
                      ? "Professional doorway widening"
                      : id === "threshold-ramps"
                      ? "Professional threshold ramp installation"
                      : id === "handrails-support-rails"
                      ? "Professional handrails and support rails installation"
                      : id === "flooring-assessment"
                      ? "Professional flooring assessment and modification"
                      : "Service placeholder"
                  }
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
