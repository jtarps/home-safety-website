"use client";

import { useState, useTransition, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  MapPin,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  Loader2,
  Gift,
} from "lucide-react";
import {
  submitBooking,
  checkAvailability,
  validateReferralCode,
} from "@/app/actions/booking";
import { SMSConfirmation } from "@/components/sms-confirmation";
import { AddressAutocomplete } from "@/components/address-autocomplete";
import { ServiceSelector } from "@/components/service-selector";
import { CalendarIntegration } from "@/components/calendar-integration";
import Link from "next/link";

type BookingStep =
  | "availability"
  | "services"
  | "appointment"
  | "details"
  | "confirmation";

interface BookingResult {
  success: boolean;
  bookingId?: string;
  message?: string;
  error?: string;
  smsConfirmation?: boolean;
}

export function MultiStepBooking() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<BookingStep>("availability");
  const [postalCode, setPostalCode] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(
    null
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [referralCodeDiscount, setReferralCodeDiscount] = useState<any>(null);

  const [isPending, startTransition] = useTransition();
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [isValidatingReferral, setIsValidatingReferral] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    services: [] as string[],
    notes: "",
    referredBy: "",
    referralCode: "",
    marketingOptIn: false,
  });

  // Check if user came from home page with pre-filled postal code
  useEffect(() => {
    const urlPostalCode = searchParams.get("postalCode");
    const urlAvailable = searchParams.get("available");

    if (urlPostalCode && urlAvailable === "true") {
      setPostalCode(urlPostalCode);
      setIsAvailable(true);
      setCurrentStep("appointment");
    }
  }, []); // Remove searchParams dependency to prevent re-running

  // Add this useEffect after the existing useEffect
  useEffect(() => {
    console.log("currentStep changed to:", currentStep);
  }, [currentStep]);

  // Generate real dates for the next 14 days (excluding Sundays)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const currentDate = new Date(today);
    // Enable same-day bookings by starting from today
    currentDate.setDate(currentDate.getDate()); // <-- Same-day booking enabled
    // currentDate.setDate(currentDate.getDate() + 1) // Start from tomorrow (disabled)

    while (dates.length < 10) {
      // Skip Sundays (0 = Sunday)
      if (currentDate.getDay() !== 0) {
        dates.push({
          value: currentDate.toISOString().split("T")[0],
          label: currentDate.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
        });
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const availableDates = generateAvailableDates();
  const timeSlots = [
    "8:30am - 10:30am",
    "10:30am - 12:30pm",
    "12:30pm - 2:30pm",
    "2:30pm - 4:30pm",
    "4:30pm - 6:30pm",
  ];

  const handleCheckAvailability = async () => {
    if (postalCode.length < 3) return;

    setIsCheckingAvailability(true);
    setErrors({});

    try {
      const result = await checkAvailability(postalCode);
      setIsAvailable(result.available);
      setPostalCode(result.postalCode);

      if (result.available) {
        setCurrentStep("services");
      } else {
        setErrors({
          postalCode: "Sorry, we don't currently service this area.",
        });
      }
    } catch (error) {
      setErrors({
        postalCode: "Error checking availability. Please try again.",
      });
    } finally {
      setIsCheckingAvailability(false);
    }
  };

  const handleReferralCodeValidation = async (code: string) => {
    if (!code.trim()) {
      setReferralCodeDiscount(null);
      return;
    }

    setIsValidatingReferral(true);
    try {
      const result = await validateReferralCode(code);
      if (result.valid) {
        setReferralCodeDiscount(result);
        setErrors((prev) => ({ ...prev, referralCode: "" }));
      } else {
        setReferralCodeDiscount(null);
        setErrors((prev) => ({
          ...prev,
          referralCode: result.message || "Invalid referral code",
        }));
      }
    } catch (error) {
      setReferralCodeDiscount(null);
      setErrors((prev) => ({
        ...prev,
        referralCode: "Error validating referral code",
      }));
    } finally {
      setIsValidatingReferral(false);
    }
  };

  const proceedToAppointment = () => {
    if (formData.services.length > 0) {
      setCurrentStep("appointment");
      setErrors({});
    } else {
      setErrors((prev) => ({
        ...prev,
        services: "Please select at least one service",
      }));
    }
  };

  const proceedToDetails = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep("details");
      setErrors({});
    }
  };

  // Debug function - remove after fixing
  const debugStepState = () => {
    console.log("Debug Step State:", {
      currentStep,
      isAvailable,
      postalCode,
      selectedDate,
      selectedTime,
      fromURL: {
        urlPostalCode: searchParams.get("postalCode"),
        urlAvailable: searchParams.get("available"),
      },
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (formData.services.length === 0)
      newErrors.services = "Please select at least one service";

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Basic phone validation
    const phoneRegex = /^[\d\s\-+()]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Address validation - ensure it includes postal code
    if (formData.address && formData.address.length < 10) {
      newErrors.address =
        "Please provide a complete address including postal code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitBooking = () => {
    if (!validateForm()) return;

    startTransition(async () => {
      const formDataObj = new FormData();
      formDataObj.append("postalCode", postalCode);
      formDataObj.append("selectedDate", selectedDate);
      formDataObj.append("selectedTime", selectedTime);
      formDataObj.append("name", formData.name);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("email", formData.email);
      formDataObj.append("address", formData.address);
      formDataObj.append("services", JSON.stringify(formData.services));
      formDataObj.append("notes", formData.notes);
      formDataObj.append("referredBy", formData.referredBy);
      formDataObj.append("referralCode", formData.referralCode);
      formDataObj.append("marketingOptIn", formData.marketingOptIn.toString());

      const result = await submitBooking(formDataObj);
      setBookingResult(result);

      if (result.success) {
        setCurrentStep("confirmation");
      }
    });
  };

  const getStepStatus = (step: BookingStep) => {
    if (step === "availability" && isAvailable) return "completed";
    if (
      step === "services" &&
      (currentStep === "appointment" ||
        currentStep === "details" ||
        currentStep === "confirmation")
    )
      return "completed";
    if (
      step === "appointment" &&
      (currentStep === "details" || currentStep === "confirmation")
    )
      return "completed";
    if (step === "details" && currentStep === "confirmation")
      return "completed";
    if (step === currentStep) return "active";
    return "inactive";
  };

  const StepHeader = ({
    step,
    number,
    title,
  }: {
    step: BookingStep;
    number: number;
    title: string;
  }) => {
    const status = getStepStatus(step);
    return (
      <div
        className={`flex items-center space-x-3 p-4 border-b ${
          status === "active"
            ? "bg-orange-50 border-orange-200"
            : status === "completed"
            ? "bg-green-50 border-green-200"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            status === "completed"
              ? "bg-green-600"
              : status === "active"
              ? "bg-orange-600"
              : "bg-gray-400"
          }`}
          style={{
            backgroundColor:
              status === "active"
                ? "#dd6e18"
                : status === "completed"
                ? "#16a34a"
                : "#9ca3af",
          }}
        >
          {status === "completed" ? (
            <Check className="w-5 h-5 text-white" />
          ) : (
            <span className="text-white font-bold text-sm">{number}</span>
          )}
        </div>
        <h3
          className={`text-lg font-semibold ${
            status === "active"
              ? "text-orange-900"
              : status === "completed"
              ? "text-green-900"
              : "text-gray-500"
          }`}
          style={{
            color:
              status === "active"
                ? "#7c2d12"
                : status === "completed"
                ? "#14532d"
                : "#6b7280",
          }}
        >
          {title}
        </h3>
        {status === "completed" && step === "availability" && (
          <span className="text-green-700 font-medium">{postalCode}</span>
        )}
      </div>
    );
  };

  // Confirmation Step
  if (currentStep === "confirmation" && bookingResult?.success) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You’re All Set!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Thank you, {formData.name}! Your installation is scheduled for{" "}
              {availableDates.find((d) => d.value === selectedDate)?.label} at{" "}
              {selectedTime}.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">
                Booking Details:
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Booking ID:</strong> {bookingResult.bookingId}
                </div>
                <div>
                  <strong>Services:</strong> {formData.services.join(", ")}
                </div>
                <div>
                  <strong>Date & Time:</strong>{" "}
                  {availableDates.find((d) => d.value === selectedDate)?.label}{" "}
                  at {selectedTime}
                </div>
                <div>
                  <strong>Location:</strong> {postalCode}
                </div>
                <div>
                  <strong>Contact:</strong> {formData.name} - {formData.phone}
                </div>
                {referralCodeDiscount && (
                  <div>
                    <strong>Discount Applied:</strong> {formData.referralCode} -{" "}
                    {referralCodeDiscount.discount_type === "percentage"
                      ? `${referralCodeDiscount.discount_amount}%`
                      : `$${referralCodeDiscount.discount_amount}`}{" "}
                    off
                  </div>
                )}
              </div>
            </div>

            {/* Add SMS Confirmation Component */}
            <div className="mb-6">
              <SMSConfirmation
                phone={formData.phone}
                success={bookingResult.smsConfirmation}
              />
            </div>

            {/* Calendar Integration */}
            <div className="mb-6">
              <CalendarIntegration
                bookingDetails={{
                  service: formData.services,
                  date:
                    availableDates.find((d) => d.value === selectedDate)
                      ?.label || selectedDate,
                  time: selectedTime,
                  address: formData.address,
                  bookingId: bookingResult.bookingId || "",
                }}
              />
            </div>

            <div className="bg-orange-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4" style={{ color: "#dd6e18" }}>
                What happens next?
              </h3>
              <div className="space-y-3 text-left text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xs font-bold">1</span>
                  </div>
                  <span className="text-orange-800">
                    We’ll call you within 2 hours to confirm details
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xs font-bold">2</span>
                  </div>
                  <span className="text-orange-800 flex items-center">
                    <Calendar
                      className="w-4 h-4 mr-2"
                      style={{ color: "#dd6e18" }}
                    />
                    Add this install to your calendar
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xs font-bold">3</span>
                  </div>
                  <span className="text-orange-800">
                    Our tech arrives on time with everything you need
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button
                  onClick={() => {
                    /* logic to add calendar invite */
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded"
                  size="lg"
                  style={{ backgroundColor: "#dd6e18" }}
                >
                  Add to Calendar
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Need help? Call{" "}
                <a
                  href="tel:+16473710899"
                  className="font-semibold text-blue-600"
                >
                  (647) 371-0899
                </a>
              </p>
              <Button
                onClick={() => (window.location.href = "/")}
                variant="outline"
              >
                Return to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Session Warning */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-red-800">
          <strong>Important:</strong> Your session will expire in 15 minutes.
          Please complete your booking or contact us at{" "}
          <Link
            href="tel:+16473710899"
            className="font-semibold hover:underline transition-colors"
            aria-label="Call (647) 371-0899"
          >
            (647) 371-0899
          </Link>
          .
        </div>
      </div>

      {/* Step 1: Check Availability */}
      <Card>
        <StepHeader step="availability" number={1} title="Check Availability" />
        {currentStep === "availability" && (
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Enter your postal code to check if we service your area
                </span>
              </div>
              <div className="flex space-x-3">
                <div className="flex-1">
                  <Input
                    placeholder="e.g., M4W 0A2"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    maxLength={7}
                    className={errors.postalCode ? "border-red-500" : ""}
                  />
                  {errors.postalCode && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.postalCode}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleCheckAvailability}
                  disabled={postalCode.length < 3 || isCheckingAvailability}
                  className="px-6"
                >
                  {isCheckingAvailability ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    "Check Availability"
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Step 2: Select Services */}
      <Card>
        <StepHeader step="services" number={2} title="Select Services" />
        {currentStep === "services" && (
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label>What services do you need? *</Label>
              <div className="mt-2">
                <ServiceSelector
                  selectedServices={formData.services}
                  onChange={(services) =>
                    setFormData((prev) => ({ ...prev, services }))
                  }
                />
                {errors.services && (
                  <p className="text-red-600 text-sm mt-1">{errors.services}</p>
                )}
              </div>
              <Button
                onClick={proceedToAppointment}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                size="lg"
              >
                Next: Select Date & Time →
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Step 3: Choose Appointment */}
      <Card>
        <StepHeader step="appointment" number={3} title="Select Date & Time" />
        {currentStep === "appointment" && (
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                Pick a date and time for your install.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <Select value={selectedDate} onValueChange={setSelectedDate}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select a date" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableDates.map((date) => (
                        <SelectItem key={date.value} value={date.value}>
                          {date.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot, index) => (
                        <SelectItem key={index} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={proceedToDetails}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                size="lg"
              >
                Next: Enter Details →
              </Button>

              <div className="text-center text-sm text-gray-600 mt-4">
                <strong>No credit card required.</strong>
                <br />
                Cancel or reschedule any time.
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Step 4: Enter Service Details */}
      <Card>
        <StepHeader step="details" number={4} title="Your Info" />
        {currentStep === "details" && (
          <CardContent className="p-6">
            <div className="space-y-6">
              {bookingResult?.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                  {bookingResult.error}
                </div>
              )}

              {/* Contact Information */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">
                  Contact Information
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className={errors.name ? "border-red-500" : ""}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className={errors.phone ? "border-red-500" : ""}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className={errors.email ? "border-red-500" : ""}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service Address */}
              <div>
                <Label htmlFor="address">Service Address *</Label>
                <AddressAutocomplete
                  value={formData.address}
                  onChange={(address) =>
                    setFormData((prev) => ({ ...prev, address }))
                  }
                  placeholder="Enter your complete address including postal code"
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && (
                  <p className="text-red-600 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* Referral Information */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">
                  Referral Information (Optional)
                </h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="referredBy">
                      Were you referred by someone?
                    </Label>
                    <Input
                      id="referredBy"
                      value={formData.referredBy}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          referredBy: e.target.value,
                        }))
                      }
                      placeholder="Doctor's name, clinic, or person who referred you"
                    />
                  </div>

                  <div>
                    <Label htmlFor="referralCode">Referral/Promo Code</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="referralCode"
                        value={formData.referralCode}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            referralCode: e.target.value,
                          }));
                          if (e.target.value !== formData.referralCode) {
                            handleReferralCodeValidation(e.target.value);
                          }
                        }}
                        placeholder="Enter promo code"
                        className={
                          errors.referralCode
                            ? "border-red-500"
                            : referralCodeDiscount
                            ? "border-green-500"
                            : ""
                        }
                      />
                      {isValidatingReferral && (
                        <Loader2 className="w-4 h-4 animate-spin mt-3" />
                      )}
                    </div>
                    {errors.referralCode && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.referralCode}
                      </p>
                    )}
                    {referralCodeDiscount && (
                      <div className="flex items-center space-x-2 mt-1 text-green-600 text-sm">
                        <Gift className="w-4 h-4" />
                        <span>
                          Code applied!{" "}
                          {referralCodeDiscount.discount_type === "percentage"
                            ? `${referralCodeDiscount.discount_amount}% off`
                            : `$${referralCodeDiscount.discount_amount} off`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <Label htmlFor="notes">Additional Details</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="Any specific requirements, accessibility needs, or questions about the installation?"
                  rows={3}
                />
              </div>

              {/* Marketing Opt-in */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketingOptIn"
                  checked={formData.marketingOptIn}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      marketingOptIn: !!checked,
                    }))
                  }
                />
                <Label htmlFor="marketingOptIn" className="text-sm">
                  Send me home safety tips &amp; special offers
                </Label>
              </div>

              <Button
                onClick={handleSubmitBooking}
                disabled={isPending}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                size="lg"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Lock In My Install
                  </>
                ) : (
                  "Lock In My Install"
                )}
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
