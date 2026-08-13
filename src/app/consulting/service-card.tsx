import React from "react";

export default function ServiceCard({
  service,
  Icon,
}: {
  service: {
    title: string;
    description: string[];
    engagement: string;
  };
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-zinc-700 text-lg" />
        <h3 className="font-medium text-zinc-900">{service.title}</h3>
      </div>

      <ul className="text-sm text-zinc-500 space-y-2 mb-5 leading-relaxed">
        {service.description.map((d, i) => (
          <li key={i}>· {d}</li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-zinc-100 flex justify-between text-sm">
        <span className="text-zinc-400">Engagement</span>
        <span className="text-zinc-700">{service.engagement}</span>
      </div>
    </div>
  );
}
