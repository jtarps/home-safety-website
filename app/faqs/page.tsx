"use client";
import { Header } from "@/components/header";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Jay's offer?",
    answer:
      "Grab bars, handrails, stairlifts, ramps, and full home-safety assessments—all at flat rates.",
  },
  {
    question: "How do I schedule my installation?",
    answer:
      "Enter your postal code online, pick a date & time, then complete the form or call us at 1‑800‑SAFE-HOME.",
  },
  {
    question: "Are consultations and quotes free?",
    answer:
      "Yes—every quote and safety assessment is free and comes with no obligation.",
  },
  {
    question: "Who installs my safety equipment?",
    answer:
      "Our vetted, licensed technicians handle every install, and we’re fully insured for your peace of mind.",
  },
  {
    question: "How fast can you install?",
    answer:
      "Most installs are available same-day or next-day in the GTA. Emergency bookings can be arranged 24/7.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept credit card, debit, and e‑transfer. You pay only after your install is complete and you’re satisfied.",
  },
  {
    question: "Is there a warranty on the work?",
    answer:
      "Yes—every installation includes a 1-year workmanship warranty, with optional extended coverage available.",
  },
  {
    question: "Can you customize unique safety solutions?",
    answer:
      "Absolutely—tell us your needs, and we’ll craft a custom accessibility plan just for you.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-900 drop-shadow-sm">
            Jay's FAQs
          </h1>
          <p className="text-lg text-gray-600 mb-10 text-center">
            Find quick answers about our flat-rate safety installs, booking
            process, and more.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={String(idx)}
                className="bg-blue-50/60 rounded-xl mb-4 border border-blue-100 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-medium text-blue-900 hover:bg-blue-100/60 focus:bg-blue-100/80 transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700 bg-white/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}
