"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-gray-700">
        This website uses cookies for analytics and to enhance your experience.
        By using our site, you agree to our use of cookies.
      </span>
      <Button
        onClick={acceptCookies}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Accept
      </Button>
    </div>
  );
}
