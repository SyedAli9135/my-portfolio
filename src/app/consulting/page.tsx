import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaAws,
  FaDatabase,
  FaServer,
  FaCogs,
  FaRobot,
  FaUsers,
} from "react-icons/fa";
import ServiceCard from "./service-card";
import ContactOptions from "../../data/contact-options.json";
import Services from "../../data/provided-services.json";
import { IconType } from "react-icons";

export default function Consulting() {
  const iconsMap: Record<string, IconType> = {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaMedium,
    FaServer,
    FaAws,
    FaDatabase,
    FaCogs,
    FaRobot,
    FaUsers,
  };

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "5+", label: "Companies & Clients" },
    { number: "1M+", label: "End Users Reached" },
  ];

  const technologies = [
    "Python",
    "Golang",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Terraform",
    "Docker",
    "RAG",
    "AI Agents",
    "MCP",
    "A2A",
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] text-zinc-900">
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Backend, data &amp; AI systems consulting for teams that need
          production-grade delivery
        </h1>
        <p className="mt-4 text-zinc-600 leading-relaxed max-w-2xl">
          I work with founders and engineering teams on the systems underneath
          the product — backend architecture, databases, cloud
          infrastructure, and, increasingly, AI agent and LLM workflows built
          with the same reliability standard as everything else.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Backend & Distributed Systems",
            "Databases & Cloud",
            "AI Agent & LLM Systems",
            "Legacy Modernization",
          ].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-md text-sm border border-zinc-200 bg-white text-zinc-600"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="border border-zinc-200 rounded-lg p-5 text-center bg-white">
              <div className="text-2xl font-semibold text-zinc-900">{s.number}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
          Services
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {Services.map((service, i) => (
            <ServiceCard key={i} service={service} Icon={iconsMap[service.icon]} />
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">
          Technology stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm border border-zinc-200 rounded-md bg-white text-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24 border-t border-zinc-200 pt-14">
        <h2 className="text-2xl font-semibold mb-3">
          Let&apos;s discuss your system architecture and roadmap
        </h2>
        <p className="text-zinc-500 max-w-xl mb-8 leading-relaxed">
          Share your product, constraints, and timeline, and I&apos;ll
          propose a practical technical approach with scalability and cost
          in mind.
        </p>

        <div className="flex flex-wrap gap-3">
          {ContactOptions.map((option, i) => {
            const Icon = iconsMap[option.icon];
            if (!Icon) return null;
            return (
              <a
                key={i}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-zinc-300 rounded-md text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
              >
                <Icon className="text-base" /> {option.label}
              </a>
            );
          })}

          <a
            href="/"
            className="px-5 py-2.5 rounded-md text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Back to home
          </a>
        </div>
      </section>
    </div>
  );
}
