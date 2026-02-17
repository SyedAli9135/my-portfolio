import React from "react";

export default function ServiceCard({
  service,
  Icon,
}: {
  service: {
    title: string;
    description: string[];
    pricing: string;
  };
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-gray-700 text-xl" />
        <h3 className="font-semibold text-lg text-gray-900">{service.title}</h3>
      </div>

      <ul className="text-sm text-gray-600 space-y-2 mb-5">
        {service.description.map((d, i) => (
          <li key={i}>• {d}</li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-sm font-medium">
        <span className="text-black-500">Pricing</span>
        <span className="text-gray-900">{service.pricing}</span>
      </div>
    </div>
  );
}
