"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Download } from "lucide-react";

interface CalendarIntegrationProps {
  bookingDetails: {
    service: string[];
    date: string;
    time: string;
    address: string;
    bookingId: string;
  };
}

export function CalendarIntegration({
  bookingDetails,
}: CalendarIntegrationProps) {
  const generateCalendarEvent = (type: "google" | "outlook" | "ics") => {
    const startDate = new Date(
      `${bookingDetails.date} ${bookingDetails.time.split(" - ")[0]}`
    );
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later

    const title = `Safe Home Installation - ${bookingDetails.service.join(
      ", "
    )}`;
    const description = `Booking ID: ${
      bookingDetails.bookingId
    }\nServices: ${bookingDetails.service.join(", ")}\nAddress: ${
      bookingDetails.address
    }\n\nContact: (647) 371-0899`;
    const location = bookingDetails.address;

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    if (type === "google") {
      const googleUrl = new URL("https://calendar.google.com/calendar/render");
      googleUrl.searchParams.set("action", "TEMPLATE");
      googleUrl.searchParams.set("text", title);
      googleUrl.searchParams.set(
        "dates",
        `${formatDate(startDate)}/${formatDate(endDate)}`
      );
      googleUrl.searchParams.set("details", description);
      googleUrl.searchParams.set("location", location);

      window.open(googleUrl.toString(), "_blank");
    } else if (type === "outlook") {
      const outlookUrl = new URL(
        "https://outlook.live.com/calendar/0/deeplink/compose"
      );
      outlookUrl.searchParams.set("subject", title);
      outlookUrl.searchParams.set("startdt", startDate.toISOString());
      outlookUrl.searchParams.set("enddt", endDate.toISOString());
      outlookUrl.searchParams.set("body", description);
      outlookUrl.searchParams.set("location", location);

      window.open(outlookUrl.toString(), "_blank");
    } else if (type === "ics") {
      const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Safe Home Installers//Booking//EN",
        "BEGIN:VEVENT",
        `UID:${bookingDetails.bookingId}@safehomeinstallers.com`,
        `DTSTART:${formatDate(startDate)}`,
        `DTEND:${formatDate(endDate)}`,
        `SUMMARY:${title}`,
        `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
        `LOCATION:${location}`,
        "STATUS:CONFIRMED",
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\r\n");

      const blob = new Blob([icsContent], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `brothers-appointment-${bookingDetails.bookingId}.ics`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Calendar className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-blue-900">Add to Calendar</h3>
      </div>
      <p className="text-blue-800 text-sm mb-4">
        Don't forget your appointment! Add it to your calendar so you'll get a
        reminder.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => generateCalendarEvent("google")}
          variant="outline"
          size="sm"
          className="bg-white"
        >
          Google Calendar
        </Button>
        <Button
          onClick={() => generateCalendarEvent("outlook")}
          variant="outline"
          size="sm"
          className="bg-white"
        >
          Outlook
        </Button>
        <Button
          onClick={() => generateCalendarEvent("ics")}
          variant="outline"
          size="sm"
          className="bg-white flex items-center gap-1"
        >
          <Download className="w-4 h-4" />
          Download .ics
        </Button>
      </div>
    </div>
  );
}
