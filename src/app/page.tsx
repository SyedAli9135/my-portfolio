"use client";
import React, { JSX } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaGithub,
  FaServer,
  FaDatabase,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import Image from "next/image";
import ContactOptions from "../data/contact-options.json";
import Expertise from "../data/expertise.json";

export default function Home() {
  const iconsMap: { [key: string]: JSX.Element } = {
    FaEnvelope: <FaEnvelope />,
    FaLinkedin: <FaLinkedin />,
    FaGithub: <FaGithub />,
    FaServer: <FaServer />,
    FaDatabase: <FaDatabase />,
    FaUsers: <FaUsers />,
    FaRobot: <FaRobot />,
    FaMedium: <FaMedium />,
  };

  const techGroups = [
    {
      label: "Languages & Backend",
      items: ["Python", "Golang", "Node.js", "TypeScript", "Microservices"],
    },
    {
      label: "Data & Cloud",
      items: [
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Redis",
        "AWS",
        "Terraform",
        "Docker",
      ],
    },
    {
      label: "AI & LLM Systems",
      items: [
        "Agent Orchestration",
        "RAG Pipelines",
        "MCP",
        "A2A Protocol",
        "Vector Search",
        "Anthropic & OpenAI APIs",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Raheel Ahmad",
      role: "Head of Engineering, The Entertainer FZ LLC",
      text: "Ali modernized our backend, moved critical workloads to AWS Lambda in Go, and helped us scale with zero downtime. His decisions improved reliability and developer productivity massively.",
    },
    {
      name: "Mason Yarrick",
      role: "Technical Director, Zyrous",
      text: "Ali designed a Python framework for our microservices architecture with SQS/SNS and GraphQL. His mentorship and system design guidance transformed our engineering practices.",
    },
    {
      name: "Founder",
      role: "AI Infrastructure Company",
      text: "Ali implemented RAG pipelines and multi-agent systems for our platform. His work increased data retrieval accuracy and stabilized our AI production systems.",
    },
  ];

  return (
    <div className="bg-[#fafaf9] text-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero */}
        <section className="mb-24 flex flex-col items-start gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/profile_pic.jpg"
              alt="Syed Muhammad Ali Akhtar"
              width={96}
              height={96}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
              Syed Muhammad Ali Akhtar
            </h1>
            <p className="mt-2 text-base sm:text-lg text-zinc-500">
              Senior Backend Engineer &amp; AI Systems Consultant
            </p>
          </div>

          <p className="text-zinc-700 leading-relaxed text-base sm:text-lg max-w-2xl">
            I&apos;m a senior engineer who spent the last four years building
            distributed backend systems, databases, and cloud infrastructure
            for enterprise and consumer products — and the last year applying
            that same discipline to production AI: agent orchestration, RAG
            pipelines, and LLM-driven workflow automation, built
            provider-agnostic across Anthropic, OpenAI, and open-source
            models. I care more about reliability and correctness under load
            than about chasing whatever&apos;s trending in AI this month.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-zinc-900 text-white rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Download Résumé
            </a>
            {ContactOptions.map((option, i) => (
              <a
                key={i}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-zinc-300 rounded-md text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
              >
                {iconsMap[option.icon]} {option.label}
              </a>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
            What I do
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {Expertise.map((e, i) => (
              <div key={i} className="border border-zinc-200 rounded-lg p-5 bg-white">
                <div className="text-lg text-zinc-800 mb-3">{iconsMap[e.icon]}</div>
                <h3 className="font-medium text-zinc-900">{e.title}</h3>
                <p className="text-zinc-500 mt-2 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
            Technologies &amp; tools
          </h2>
          <div className="flex flex-col gap-5">
            {techGroups.map((group, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <span className="text-sm text-zinc-500 w-44 shrink-0">{group.label}</span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((t, j) => (
                    <span
                      key={j}
                      className="text-sm px-3 py-1 border border-zinc-200 rounded-md text-zinc-700 bg-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
            What people say
          </h2>
          <div className="flex flex-col gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-zinc-200 rounded-lg p-5 bg-white">
                <p className="text-zinc-700 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-3 text-sm font-medium text-zinc-900">
                  {t.name} <span className="font-normal text-zinc-500">— {t.role}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-zinc-200 pt-14">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-3">Work with me</h2>
          <p className="text-zinc-500 mb-6 max-w-xl leading-relaxed">
            If you&apos;re scaling a backend, modernizing a legacy system, or
            need production-grade AI workflows built by someone who treats AI
            as an engineering discipline — let&apos;s talk.
          </p>
          <a
            href="mailto:syedaliakhtar660@gmail.com"
            className="inline-block px-5 py-2.5 bg-zinc-900 text-white rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Get in touch
          </a>
        </section>
      </main>
    </div>
  );
}
