import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/logo-main.svg"
              alt="Jay's Home Safety Solutions Logo"
              className="h-12 w-auto max-w-[180px] object-contain mb-4"
              style={{ background: "transparent" }}
            />
            <h3 className="text-xl font-bold mb-4" style={{ color: "#dd6e18" }}>
              Jay's Home Safety Solutions
            </h3>
            <p className="text-gray-300 mb-4">
              Making homes safer and more accessible for over 15 years.
              Professional installation, guaranteed results.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <Link
                  href="tel:1-800-SAFE-HOME"
                  className="hover:underline transition-colors hover:text-orange-300"
                  aria-label="Call 1-800-SAFE-HOME"
                >
                  1-800-SAFE-HOME
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>info@1800grabbars.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Serving Toronto & GTA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/grab-bars"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Grab Bar Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/stair-railings"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Stair Railings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wheelchair-ramps"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Wheelchair Ramps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bathroom-safety"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bathroom Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/services/home-modifications"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home Modifications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/safety-assessments"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Safety Assessments
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Company */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "#dd6e18" }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                {/* <Link
                  href="/reviews"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Customer Reviews
                </Link> */}
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                {/* <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Pricing
                </Link> */}
              </li>
              {/* <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  FAQs
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "#dd6e18" }}
            >
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-gray-300 hover:text-orange-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: "#183f64" }}
            >
              <h5 className="font-semibold mb-2" style={{ color: "#dd6e18" }}>
                Emergency Service
              </h5>
              <p className="text-sm text-blue-100 mb-2">
                24/7 emergency installations available
              </p>
              <Link
                href="tel:1-800-SAFE-HOME"
                className="text-white font-semibold hover:text-orange-300 transition-colors"
              >
                Call Now: 1-800-SAFE-HOME
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Jay's Home Safety Solutions. All
              rights reserved. Licensed, Bonded & Insured.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-orange-300 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-300 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-orange-300 text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
