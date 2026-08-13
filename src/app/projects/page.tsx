"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ProfessionalProjects from "../../data/enterprise-projects.json";
import PersonalProjects from "../../data/personal-projects.json";
import ArchitectureFlow from "./architecture-flow";

export default function Project() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
          Projects
        </h1>
        <p className="text-zinc-500 max-w-2xl mb-12 leading-relaxed">
          Enterprise delivery work and side projects across backend systems,
          databases, and AI agent / LLM workflows.
        </p>

        <section className="grid gap-5 md:grid-cols-2">
          {ProfessionalProjects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200 rounded-lg p-6 flex flex-col self-start"
            >
              <span className="inline-block mb-3 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                {proj.company}
              </span>
              <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                {proj.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-3">{proj.role}</p>
              <p className="text-zinc-700 text-sm leading-relaxed mb-3">
                {expandedIndex === idx
                  ? proj.description
                  : proj.description.slice(0, 170) + "..."}
              </p>
              <p className="text-zinc-800 text-sm mb-4">
                <span className="font-medium">Impact: </span>
                {proj.impact}
              </p>
              {expandedIndex === idx && proj.architecture && (
                <ArchitectureFlow
                  steps={proj.architecture}
                  note={"architectureNote" in proj ? proj.architectureNote : undefined}
                />
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => toggleExpand(idx)}
                className="text-zinc-900 hover:underline text-sm font-medium mt-auto text-left"
              >
                {expandedIndex === idx
                  ? "View less"
                  : "View architecture & details"}
              </button>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
            Side projects &amp; open source
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PersonalProjects.map((proj, idx) => (
              <div
                key={idx + ProfessionalProjects.length}
                className="bg-white border border-zinc-200 rounded-lg p-5 flex flex-col self-start"
              >
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {proj.title}
                  </h3>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${proj.title} on GitHub`}
                      className="text-zinc-500 hover:text-zinc-900 shrink-0"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-3">
                  {expandedIndex === idx + ProfessionalProjects.length
                    ? proj.description
                    : proj.description.slice(0, 100) + "..."}
                </p>

                <button
                  onClick={() =>
                    toggleExpand(idx + ProfessionalProjects.length)
                  }
                  className="text-zinc-900 hover:underline text-sm font-medium mt-auto text-left"
                >
                  {expandedIndex === idx + ProfessionalProjects.length
                    ? "View less"
                    : "View more"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
