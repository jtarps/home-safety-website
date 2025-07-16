import { Calendar, Wrench, CreditCard, Shield } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "1. Book Online",
    description: "Pick your service and time online.",
    icon: Calendar,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    number: 2,
    title: "2. We Install",
    description: "We arrive and install—fast and friendly.",
    icon: Wrench,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    number: 3,
    title: "3. Enjoy Safety",
    description: "Relax—your home is safer now!",
    icon: Shield,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and professional service in just 3 easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {step.number}
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div
                    className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="h-px bg-gray-200 my-6"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
