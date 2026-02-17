"use client";
import React, { JSX } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaServer,
  FaCloud,
  FaUsers,
  FaCode,
  FaRobot,
} from "react-icons/fa";
import Image from "next/image";
import ContactOptions from "../data/contact-options.json";
import Expertise from "../data/expertise.json";

export default function Home() {
  const iconsMap: { [key: string]: JSX.Element } = {
    FaEnvelope: <FaEnvelope />,
    FaLinkedin: <FaLinkedin />,
    FaServer: <FaServer />,
    FaCloud: <FaCloud />,
    FaUsers: <FaUsers />,
    FaCode: <FaCode />,
    FaRobot: <FaRobot />,
    FaMedium: <FaMedium />,
  };

  const technologies = [
    "Python",
    "Golang",
    "Node.js",
    "React/Next.js",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Serverless",
    "Microservices",
    "API Gateway",
    "RAG Pipelines",
    "AI Agents",
    "MCP Integration",
  ];

  const testimonials = [
    {
      name: "Raheel Ahmad, Head of Engineering, Entertainer FZ LLC",
      text: "Ali modernized our backend, moved critical workloads to AWS Lambda in Go, and helped us scale with zero downtime. His decisions improved reliability and developer productivity massively.",
    },
    {
      name: "Mason Yarrick, Technical Director, Zyrous",
      text: "Ali designed a Python framework for our microservices architecture with SQS/SNS and GraphQL. His mentorship and system design guidance transformed our engineering practices.",
    },
    {
      name: "Founder, AI Infrastructure Company",
      text: "Ali implemented RAG pipelines and multi-agent systems for our platform. His work increased data retrieval accuracy and stabilized our AI production systems.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 pt-20 md:pt-20">
      <main className="max-w-5xl mx-auto px-6 py-16 text-center">
        <section className="mb-18 flex flex-col items-center gap-6 text-center">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg bg-gray-50">
            <Image
              src="/profile_pic.jpg"
              alt="Syed Ali"
              width={208}
              height={208}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Syed Muhammad Ali
          </h1>

          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Senior Software Engineer • Technical Consultant • Enterprise
            Architect
          </p>

          <p className="mt-3 text-gray-800 leading-relaxed max-w-3xl text-lg md:text-xl">
            I partner with B2B and B2C companies to design, scale, and optimize
            mission-critical systems. From{" "}
            <strong>high-performance backend architectures </strong>
            and <strong>cloud-native solutions</strong> to{" "}
            <strong>AI agents</strong>, <strong>RAG pipelines</strong>, and{" "}
            <strong>multi-tool MCP integrations</strong>, I ensure your
            platforms are <strong>reliable, scalable, and future-ready</strong>.
            Beyond engineering, I provide{" "}
            <strong>strategic technical guidance</strong>, mentorship for teams,
            and full-stack product leadership to deliver
            <strong> enterprise-grade solutions</strong> that align technology
            with business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {ContactOptions.map((option, i) => (
              <a
                key={i}
                href={option.link}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition"
              >
                {iconsMap[option.icon]} {option.label}
              </a>
            ))}
          </div>
        </section>

        <section className="mb-18">
          <h2 className="text-3xl font-semibold mb-10">
            Engineering Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {Expertise.map((e, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl hover:bg-gray-50 transition"
              >
                <div className="text-2xl mb-2">{iconsMap[e.icon]}</div>
                <h3 className="font-medium text-lg">{e.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-18">
          <h2 className="text-3xl font-semibold mb-6">Technologies & Tools</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((t, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 border rounded-md bg-gray-50"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8">Client & Peer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl text-sm text-gray-700 bg-white/90 shadow-sm"
              >
                <p className="italic">“{t.text}”</p>
                <p className="mt-4 font-medium text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t pt-12 mb-16">
          <h2 className="text-3xl font-semibold mb-3">Work with me</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            If you’re building or scaling a product, AI pipeline, or cloud
            system, let’s discuss how we can design and deliver a reliable
            solution together.
          </p>
          <a
            href="mailto:syedaliakhtar660@gmail.com"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition"
          >
            Contact
          </a>
        </section>
      </main>
    </div>
  );
}
