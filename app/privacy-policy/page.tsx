import { Header } from "@/components/header";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-lg text-gray-600 mb-8">
          At Brothers, we respect your privacy and are committed to protecting
          your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Personal Identification:</strong> Name, email address, phone
            number, billing and installation address when you book a service.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you access and use
            our website (e.g., IP address, browser type, pages visited).
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> Cookies and similar
            technologies to improve functionality and analytics.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>To provide, operate, and maintain our services and website.</li>
          <li>
            To process bookings, send confirmations, reminders, and updates.
          </li>
          <li>To respond to your inquiries and customer support requests.</li>
          <li>To send marketing communications, if you have opted in.</li>
          <li>
            To analyze usage and improve our offerings and user experience.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-700 mb-6">
          We do not sell or rent your personal information. We may share your
          data with:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            Third-party service providers (e.g., Supabase, email service) who
            assist in operating our website and services.
          </li>
          <li>
            Contractors and installers, solely as needed to fulfill your
            booking.
          </li>
          <li>
            Legal authorities when required by law or to protect our rights.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700 mb-6">
          We use cookies to enhance your experience, enable website
          functionality, and gather usage statistics. You can set your browser
          to refuse cookies, but some features may not work properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p className="text-gray-700 mb-6">
          We implement reasonable security measures to protect your personal
          data. However, no internet transmission is 100% secure. Use caution
          when sharing sensitive information online.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Children’s Privacy
        </h2>
        <p className="text-gray-700 mb-6">
          Our services are not intended for children under 13. We do not
          knowingly collect personal information from children. If you believe
          we have information on a child, please contact us to have it removed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. The date at the
          top will indicate the latest revision. Continued use of our site
          signifies your acceptance of any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p className="text-gray-700">
          For questions or concerns about this policy, contact us at
          <a href="mailto:hello@jays.com" className="text-blue-600 underline">
            hello@jays.com
          </a>
          .
        </p>
      </main>
    </div>
  );
}
