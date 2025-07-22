"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div
        className="bg-gray-900 text-white py-2 px-4 text-sm"
        style={{ backgroundColor: "#183f64" }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="font-semibold text-white">(647) 371-0899</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Same-Day Service Available</span>
            </div>
          </div>
          {/* Proudly Canadian badge centered */}
          <div className="flex-1 flex justify-center">
            <span className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 font-semibold text-white text-sm">
              <span role="img" aria-label="Canadian flag">
                🇨🇦
              </span>{" "}
              Proudly Canadian
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-blue-100">Free Safety Assessment</span>
            <span className="text-orange-400 font-semibold">
              ✓ Licensed & Insured
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow h-16 md:h-24 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Navigation links left */}
            <div className="hidden md:flex items-center space-x-8 h-full">
              <Link
                href="/services"
                className="text-gray-600 hover:text-gray-900 transition-colors text-xl font-semibold px-2"
              >
                Services
              </Link>
              <Link
                href="/#how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors text-xl font-semibold px-2"
              >
                How It Works
              </Link>
            </div>

            {/* Logo center */}
            <div className="flex-1 flex justify-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/brotherslogo.svg"
                  alt="Brothers Home Safety Solutions Logo"
                  className="h-12 w-auto max-w-[160px] md:h-20 md:max-w-[260px] object-contain drop-shadow-sm"
                  style={{ maxHeight: 80 }}
                />
              </Link>
            </div>

            {/* Phone and CTA right */}
            <div className="hidden md:flex items-center space-x-8 h-full">
              <div
                className="flex items-center space-x-2"
                style={{ color: "#183f64" }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <Link
                  href="tel:+16473710899"
                  className="font-bold text-xl md:text-2xl text-orange-600 hover:underline transition-colors ml-2"
                  aria-label="Call (647) 371-0899"
                >
                  (647) 371-0899
                </Link>
              </div>
              <Button
                asChild
                style={{ backgroundColor: "#dd6e18", color: "white" }}
                className="hover:bg-orange-700 text-white text-xl font-semibold px-8 py-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 shadow-md transition-colors duration-200"
              >
                <Link
                  href="/booking"
                  className="flex items-center gap-2 no-underline"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Book a Visit
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 ml-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/40 z-[99]"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="fixed top-0 left-0 right-0 z-[100] md:hidden py-3 border-b border-gray-200 bg-white shadow-lg rounded-b-xl">
                <div className="flex justify-end px-2">
                  <button
                    className="p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-7 h-7" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-2 px-2 pb-2">
                  <Link
                    href="/services"
                    className="text-gray-700 hover:text-blue-700 transition-colors py-2 text-lg font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/#how-it-works"
                    className="text-gray-700 hover:text-blue-700 transition-colors py-2 text-lg font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                  <div
                    className="flex items-center space-x-2 py-2"
                    style={{ color: "#183f64" }}
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <Link
                      href="tel:+16473710899"
                      className="font-semibold hover:underline transition-colors"
                      aria-label="Call (647) 371-0899"
                    >
                      (647) 371-0899
                    </Link>
                  </div>
                  <Button
                    asChild
                    style={{ backgroundColor: "#dd6e18", color: "white" }}
                    className="hover:bg-orange-700 text-white text-base font-semibold px-4 py-2 rounded-lg mt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors duration-200"
                  >
                    <Link
                      href="/booking"
                      className="flex items-center gap-2 no-underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      Book a Visit
                    </Link>
                  </Button>
                </nav>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
