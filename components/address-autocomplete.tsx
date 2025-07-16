"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, AlertCircle } from "lucide-react"

interface AddressAutocompleteProps {
  value: string
  onChange: (address: string, details?: any) => void
  placeholder?: string
  className?: string
}

// Declare global google types
declare global {
  interface Window {
    google: any
    initGoogleMaps: () => void
  }
}

export function AddressAutocomplete({ value, onChange, placeholder, className }: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [autocomplete, setAutocomplete] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // Check if Google Maps API key is available
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      console.log("Google Maps API key not found. Using fallback address input.")
      return
    }

    // Load Google Places API if not already loaded
    if (!window.google?.maps?.places) {
      loadGoogleMapsScript(apiKey)
    } else {
      initializeAutocomplete()
    }

    return () => {
      if (autocomplete && window.google?.maps?.event) {
        try {
          window.google.maps.event.clearInstanceListeners(autocomplete)
        } catch (error) {
          console.log("Error clearing Google Maps listeners:", error)
        }
      }
    }
  }, [])

  const loadGoogleMapsScript = (apiKey: string) => {
    // Check if script is already loading or loaded
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      return
    }

    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMaps`
    script.async = true
    script.defer = true

    // Set up callback
    window.initGoogleMaps = () => {
      setIsLoaded(true)
      initializeAutocomplete()
    }

    script.onerror = () => {
      console.error("Failed to load Google Maps API")
      setHasError(true)
      setErrorMessage("Failed to load address autocomplete. Please enter your address manually.")
    }

    // Listen for Google Maps API errors
    window.addEventListener("error", (event) => {
      if (event.message && event.message.includes("Google Maps")) {
        console.error("Google Maps API Error:", event.message)
        setHasError(true)
        setErrorMessage("Address autocomplete unavailable. Please enter your address manually.")
      }
    })

    document.head.appendChild(script)
  }

  const initializeAutocomplete = () => {
    if (!inputRef.current || !window.google?.maps?.places) {
      return
    }

    try {
      const autocompleteInstance = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ["address"],
        componentRestrictions: { country: ["ca", "us"] }, // Restrict to Canada and US
        fields: ["formatted_address", "address_components", "geometry"],
      })

      autocompleteInstance.addListener("place_changed", () => {
        try {
          const place = autocompleteInstance.getPlace()
          if (place.formatted_address) {
            onChange(place.formatted_address, place)
          }
        } catch (error) {
          console.error("Error getting place details:", error)
          setHasError(true)
          setErrorMessage("Error with address autocomplete. Please enter your address manually.")
        }
      })

      setAutocomplete(autocompleteInstance)
    } catch (error) {
      console.error("Error initializing Google Places Autocomplete:", error)
      setHasError(true)
      setErrorMessage("Address autocomplete unavailable. Please enter your address manually.")
    }
  }

  // If there's an error or no API key, show textarea fallback
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || hasError) {
    return (
      <div className="space-y-2">
        <div className="relative">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || "Enter your complete address including postal code"}
            className={className}
            rows={3}
          />
          <MapPin className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
        </div>
        {hasError && errorMessage && (
          <div className="flex items-center space-x-2 text-amber-600 text-xs">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}
        <p className="text-xs text-gray-500">
          Please include your full address with postal code for accurate service delivery
        </p>
      </div>
    )
  }

  // Show Google Maps autocomplete input
  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "Start typing your address..."}
          className={className}
        />
        <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
      <p className="text-xs text-gray-500">Start typing for address suggestions, or enter manually</p>
    </div>
  )
}
