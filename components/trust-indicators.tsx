import { Star, Users, Clock, Shield } from "lucide-react";

export function TrustIndicators() {
  const indicators = [
    {
      icon: Star,
      value: "5/5",
      label: "Customer Rating",
    },
    {
      icon: Clock,
      value: "Same Day",
      label: "Service Available",
    },
    {
      icon: Shield,
      value: "Fully",
      label: "Insured & Licensed",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8">
      {indicators.map((indicator, index) => (
        <div key={index} className="text-center">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 shadow-sm"
            style={{ backgroundColor: "#f0f4f8" }}
          >
            <indicator.icon className="w-6 h-6" style={{ color: "#dd6e18" }} />
          </div>
          <div className="font-bold text-lg text-gray-900">
            {indicator.value}
          </div>
          <div className="text-sm text-gray-600">{indicator.label}</div>
        </div>
      ))}
    </div>
  );
}
