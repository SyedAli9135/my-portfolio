import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaAws,
  FaCode,
  FaServer,
  FaCogs,
  FaRocket,
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
    FaServer,
    FaAws,
    FaCode,
    FaUsers,
    FaRocket,
    FaCogs,
  };

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "10+", label: "Projects Delivered" },
    { number: "3+", label: "Companies Served" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Golang",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Engineering consulting for scalable products
        </h1>

        <div className="mt-9 flex flex-wrap justify-center gap-2">
          {[
            "AWS & Serverless",
            "React & Next.js",
            "Python & Golang",
            "Microservices",
            "AI Systems",
          ].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full text-sm border border-gray-500 bg-white text-gray-700"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="border border-gray-400 rounded-xl p-5 text-center"
            >
              <div className="text-3xl font-bold">{s.number}</div>
              <div className="text-xs text-gray-500 font-bold uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Consulting Services</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Practical engineering strategies with a focus on scalability,
            reliability, and cost efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              Icon={iconsMap[service.icon]}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-3">Technology Stack</h2>
        <p className="text-gray-600 mb-6">
          Production-tested tools for scalable backend systems and modern
          frontends.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm border rounded-full bg-white"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 text-center border-t pt-14">
        <h3 className="text-2xl font-semibold mb-3">
          Let’s discuss your system architecture and roadmap
        </h3>

        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Share your product, constraints, and timeline. I’ll propose a
          practical technical strategy with scalability and cost in mind.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          {ContactOptions.map((option, i) => {
            const Icon = iconsMap[option.icon];
            if (!Icon) return null;
            return (
              <a
                key={i}
                href={option.link}
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition"
              >
                <Icon className="text-white text-lg" /> {option.label}
              </a>
            );
          })}

          <a
            href="/"
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
}
