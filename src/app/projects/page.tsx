"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ProfessionalProjects from "../../data/enterprise-projects.json";
import PersonalProjects from "../../data/personal-projects.json";

export default function Project() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-white from-gray-50 via-gray-100 to-gray-200 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto mt-18">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-gray-900 mb-6">
          Technical Projects & Engineering Showcase
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Deep dives into enterprise-level engineering projects, RAG & AI
          systems, and innovative backend solutions. Each project demonstrates
          design, scalability, and real-world impact.
        </p>

        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-rows-auto">
          {ProfessionalProjects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200 shadow p-6 flex flex-col"
              style={{ alignSelf: "start", cursor: "pointer" }}
            >
              <span className="inline-block mb-3 px-3 py-1 text-xs font-bold bg-gray-900 text-white rounded-full w-fit">
                {proj.company}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 font-medium mb-3">{proj.role}</p>
              <p className="text-gray-800 text-base md:text-lg mb-3">
                {expandedIndex === idx
                  ? proj.description
                  : proj.description.slice(0, 180) + "..."}
              </p>
              <p className="text-gray-900 font-semibold mb-3">
                <span className="font-bold">Impact: </span>
                {proj.impact}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-[10px] md:text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => toggleExpand(idx)}
                className="text-black hover:underline text-sm md:text-base font-semibold"
              >
                {expandedIndex === idx ? "View Less" : "View More"}
              </button>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 mb-6 text-center">
            Side Projects & Open Source
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
            {PersonalProjects.map((proj, idx) => (
              <div
                key={idx + ProfessionalProjects.length}
                className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200 shadow p-4 flex flex-col"
                style={{ alignSelf: "start", cursor: "pointer" }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {proj.title}
                  </h3>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 bg-gray-100 hover:bg-gray-200 p-1 rounded-full flex items-center justify-center"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-gray-800 text-base md:text-lg mb-3">
                  {expandedIndex === idx + ProfessionalProjects.length
                    ? proj.description
                    : proj.description.slice(0, 100) + "..."}
                </p>

                <button
                  onClick={() =>
                    toggleExpand(idx + ProfessionalProjects.length)
                  }
                  className="text-black hover:underline text-sm md:text-base font-semibold mt-auto"
                >
                  {expandedIndex === idx + ProfessionalProjects.length
                    ? "View Less"
                    : "View More"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
