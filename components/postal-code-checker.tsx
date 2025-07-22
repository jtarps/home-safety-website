"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Check, X, Calendar, DollarSign } from "lucide-react";
import Link from "next/link";

// Comprehensive GTA postal codes
const supportedPostalCodes = [
  // Toronto (M prefixes)
  "M1A",
  "M1B",
  "M1C",
  "M1E",
  "M1G",
  "M1H",
  "M1J",
  "M1K",
  "M1L",
  "M1M",
  "M1N",
  "M1P",
  "M1R",
  "M1S",
  "M1T",
  "M1V",
  "M1W",
  "M1X",
  "M2H",
  "M2J",
  "M2K",
  "M2L",
  "M2M",
  "M2N",
  "M2P",
  "M2R",
  "M3A",
  "M3B",
  "M3C",
  "M3H",
  "M3J",
  "M3K",
  "M3L",
  "M3M",
  "M3N",
  "M4A",
  "M4B",
  "M4C",
  "M4E",
  "M4G",
  "M4H",
  "M4J",
  "M4K",
  "M4L",
  "M4M",
  "M4N",
  "M4P",
  "M4R",
  "M4S",
  "M4T",
  "M4V",
  "M4W",
  "M4X",
  "M4Y",
  "M5A",
  "M5B",
  "M5C",
  "M5E",
  "M5G",
  "M5H",
  "M5J",
  "M5K",
  "M5L",
  "M5M",
  "M5N",
  "M5P",
  "M5R",
  "M5S",
  "M5T",
  "M5V",
  "M5W",
  "M5X",
  "M6A",
  "M6B",
  "M6C",
  "M6E",
  "M6G",
  "M6H",
  "M6J",
  "M6K",
  "M6L",
  "M6M",
  "M6N",
  "M6P",
  "M6R",
  "M6S",
  "M7A",
  "M7Y",
  "M8V",
  "M8W",
  "M8X",
  "M8Y",
  "M8Z",
  "M9A",
  "M9B",
  "M9C",
  "M9L",
  "M9M",
  "M9N",
  "M9P",
  "M9R",
  "M9V",
  "M9W",
  // Mississauga
  "L4T",
  "L4V",
  "L4W",
  "L4X",
  "L4Y",
  "L4Z",
  "L5A",
  "L5B",
  "L5C",
  "L5E",
  "L5G",
  "L5H",
  "L5J",
  "L5K",
  "L5L",
  "L5M",
  "L5N",
  "L5R",
  "L5S",
  "L5T",
  "L5V",
  "L5W",
  // Brampton
  "L6P",
  "L6R",
  "L6S",
  "L6T",
  "L6V",
  "L6W",
  "L6X",
  "L6Y",
  "L6Z",
  "L7A",
  // Markham
  "L3P",
  "L3R",
  "L3S",
  "L3T",
  "L6B",
  "L6C",
  "L6E",
  "L6G",
  // Richmond Hill
  "L4B",
  "L4C",
  "L4E",
  "L4S",
  // Vaughan
  "L4H",
  "L4J",
  "L4K",
  "L4L",
  "L6A",
  // Oakville
  "L6H",
  "L6J",
  "L6K",
  "L6L",
  "L6M",
  // Burlington
  "L7L",
  "L7M",
  "L7N",
  "L7P",
  "L7R",
  "L7S",
  "L7T",
  // Milton
  "L9T",
  "L9E",
  // Ajax
  "L1S",
  "L1T",
  "L1Z",
  // Pickering
  "L1V",
  "L1W",
  "L1X",
  "L1Y",
  // Whitby
  "L1M",
  "L1N",
  "L1P",
  "L1R",
  // Oshawa
  "L1G",
  "L1H",
  "L1J",
  "L1K",
  "L1L",
  // Newmarket
  "L3X",
  "L3Y",
  // Aurora
  "L4G",
  // King City
  "L7B",
  // Stouffville
  "L4A",
  // Georgina
  "L4P",
];

export function PostalCodeChecker() {
  const [postalCode, setPostalCode] = useState("");
  const [result, setResult] = useState<"available" | "unavailable" | null>(
    null
  );
  const [isChecking, setIsChecking] = useState(false);

  const checkAvailability = async () => {
    if (!postalCode.trim()) return;
    setIsChecking(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const cleanCode = postalCode.replace(/\s/g, "").toUpperCase();
    const prefix = cleanCode.substring(0, 3);
    setResult(
      supportedPostalCodes.includes(prefix) ? "available" : "unavailable"
    );
    setIsChecking(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkAvailability();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-4">
        {/* <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-blue-600" />
          Check Service Availability
        </h3> */}
        {/* <p className="text-gray-600 text-sm">
          Enter your postal code to see if we service your area
        </p> */}
      </div>
      {result === null && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 items-center bg-white/80 rounded-xl shadow-sm px-6 py-4 border border-blue-100"
          role="search"
          aria-label="Check service availability by postal code"
        >
          <Input
            type="text"
            placeholder="Enter your postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="flex-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-lg py-4 px-6 rounded-md"
            maxLength={7}
            aria-label="Postal code"
            aria-describedby="postal-code-help"
            pattern="[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]"
            title="Enter a valid Canadian postal code (e.g., M5V 3A8)"
          />
          <div id="postal-code-help" className="sr-only">
            Enter your 6-character Canadian postal code
          </div>
          <Button
            type="submit"
            disabled={!postalCode.trim() || isChecking}
            style={{ backgroundColor: "#dd6e18", color: "white" }}
            className="hover:bg-orange-700 text-white px-10 py-4 text-lg rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors duration-200"
            aria-label={
              isChecking
                ? "Checking availability..."
                : "Check service availability"
            }
          >
            {isChecking ? "Checking..." : "Check My Availability"}
          </Button>
        </form>
      )}
      {result && (
        <div
          className={`mt-4 p-4 rounded-lg border ${
            result === "available"
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
          role="alert"
          aria-live="polite"
          aria-label={
            result === "available"
              ? "Service available"
              : "Service not available"
          }
        >
          <div className="flex items-center gap-2 mb-2">
            {result === "available" ? (
              <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
            ) : (
              <X className="w-5 h-5 text-red-600" aria-hidden="true" />
            )}
            <span
              className={`font-medium ${
                result === "available" ? "text-green-800" : "text-red-800"
              }`}
            >
              {result === "available" ? "Great news!" : "Sorry!"}
            </span>
          </div>
          <p
            className={`text-sm mb-3 ${
              result === "available" ? "text-green-700" : "text-red-700"
            }`}
          >
            {result === "available"
              ? "We provide service in your area. Book your installation today!"
              : "We don't currently service this area, but we're expanding soon!"}
          </p>
          {result === "available" && (
            <div className="flex gap-2 mb-2">
              <Button
                asChild
                size="sm"
                style={{ backgroundColor: "#dd6e18", color: "white" }}
                className="flex-1 hover:bg-orange-700 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors duration-200"
              >
                <Link
                  href={`/booking?postalCode=${encodeURIComponent(
                    postalCode
                  )}&available=true`}
                  className="flex items-center justify-center gap-1 no-underline"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Book a Visit
                </Link>
              </Button>
            </div>
          )}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              className="mt-1"
              onClick={() => {
                setResult(null);
                setPostalCode("");
              }}
            >
              Check another postal code
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
