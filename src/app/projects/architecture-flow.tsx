import React from "react";

type Stage = {
  stage: string;
  detail: string;
  tags?: string[];
};

export default function ArchitectureFlow({
  steps,
  note,
}: {
  steps: Stage[];
  note?: string;
}) {
  return (
    <div className="mb-5 border-t border-zinc-100 pt-4">
      <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
        System architecture — how it works end to end
      </span>

      <div className="relative mt-4 pl-7">
        <div
          className="absolute left-[9px] top-1 bottom-1 w-px bg-zinc-200"
          aria-hidden="true"
        />
        {steps.map((step, i) => (
          <div key={i} className="relative pb-5 last:pb-0">
            <div
              className="absolute -left-7 top-0 w-[19px] h-[19px] rounded-full border border-zinc-300 bg-white text-[10px] font-semibold text-zinc-500 flex items-center justify-center"
              aria-hidden="true"
            >
              {i + 1}
            </div>
            <h4 className="text-sm font-semibold text-zinc-900">
              {step.stage}
            </h4>
            <p className="text-sm text-zinc-500 leading-relaxed mt-1">
              {step.detail}
            </p>
            {step.tags && step.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {step.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[11px] px-2 py-0.5 border border-zinc-200 rounded bg-zinc-50 text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {note && <p className="text-xs text-zinc-400 italic mt-3">{note}</p>}
    </div>
  );
}
