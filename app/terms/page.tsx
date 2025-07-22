import { Header } from "@/components/header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4 text-gray-700">
          Welcome to Brothers. By accessing or using our website and services,
          you agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Services</h2>
        <p className="mb-4 text-gray-700">
          Brothers provides home-safety installation services, including grab
          bars, stair railings, wheelchair ramps, and other accessibility
          modifications.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Booking & Payments
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>
            All bookings require accurate information at the time of scheduling.
          </li>
          <li>
            Flat-rate pricing is provided at the time of booking; any additional
            work requires prior approval.
          </li>
          <li>
            Payment is due upon completion of the service. We accept credit
            card, debit, and e-transfer.
          </li>
          <li>
            A refundable deposit may be required for certain services as stated
            in your booking confirmation.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Cancellations & Rescheduling
        </h2>
        <p className="mb-4 text-gray-700">
          You may cancel or reschedule your appointment up to 24 hours before
          the scheduled time without penalty. Cancellations or reschedules
          within 24 hours may incur a fee up to 50% of the service price.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Client Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Ensure the work area is safe and accessible.</li>
          <li>
            Provide any necessary information for permit or code compliance.
          </li>
          <li>
            Communicate any special requirements or mobility concerns prior to
            the appointment.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Intellectual Property
        </h2>
        <p className="mb-4 text-gray-700">
          All content on this site, including text, graphics, logos, and images,
          is the property of Brothers or its licensors and is protected by
          copyright and trademark laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-700">
          To the fullest extent permitted by law, Brothers and its affiliates
          shall not be liable for any indirect, incidental, consequential, or
          punitive damages arising from or related to the use of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Governing Law</h2>
        <p className="mb-4 text-gray-700">
          These terms are governed by the laws of the Province of Ontario and
          the federal laws of Canada, without regard to conflict of law
          provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          8. Changes to Terms
        </h2>
        <p className="mb-4 text-gray-700">
          We may update these Terms of Service from time to time. The date of
          the latest revision will appear at the top of this page. Continued use
          of our services constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about these terms, please contact us at
          <a href="mailto:hello@jays.com" className="text-blue-600 underline">
            hello@jays.com
          </a>
          .
        </p>
      </main>
    </div>
  );
}
