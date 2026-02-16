"use client";
import React, { useState } from "react";

export default function Project() {
  const professionalProjects = [
    {
      title: "Delivery Module & 3PL Partner Integrations",
      company: "The Entertainer FZ LLC",
      role: "Backend Engineer & Consultant",
      description:
        "Architected and optimized the Entertainer’s delivery ecosystem by migrating latency-prone Python services into idempotent, event-driven Golang AWS Lambda functions. Refactored core workflows into smaller, composable units to improve observability, resilience, and fault tolerance. Designed APIs with API Gateway and message-driven orchestration via SQS/SNS, ensuring horizontal scalability with near-zero downtime deployments.",
      impact:
        "Reduced average response latency by 40%, enabled seamless onboarding of new 3PL partners, and improved system reliability for millions of active users during peak traffic.",
      technologies: [
        "Golang",
        "Python",
        "AWS Lambda",
        "API Gateway",
        "SQS",
        "SNS",
        "CloudWatch",
      ],
    },
    {
      title: "Enterprise Microservices Platform",
      company: "Zyrous",
      role: "Backend Consultant",
      description:
        "Developed a Python-based internal framework to standardize microservices development across enterprise projects. Implemented service scaffolding with GraphQL endpoints, event-driven integrations with SQS/SNS, and standardized observability hooks (logging, tracing, metrics). Built CI/CD pipelines that automated provisioning and deployments through Terraform, ensuring consistency across staging and production environments.",
      impact:
        "Accelerated microservice delivery timelines by 60%, reduced onboarding effort for new developers, and established architectural patterns that scaled with business demands.",
      technologies: [
        "Python",
        "GraphQL",
        "SQS",
        "SNS",
        "Terraform",
        "CI/CD",
        "Docker",
      ],
    },
    {
      title: "Sustainability & Compliance Evaluation Platform",
      company: "Estonian Federal Agency",
      role: "Consultant & Backend Engineer",
      description:
        "Engineered backend data pipelines to evaluate corporate compliance and environmental impact reports. Designed ETL workflows to process thousands of structured and unstructured documents, normalizing them into PostgreSQL for efficient querying. Integrated automated validation rules and asynchronous job queues to guarantee consistency and throughput, while exposing secure APIs for regulators and auditors.",
      impact:
        "Delivered a reliable compliance scoring engine, enabling data-driven insights for government regulators and ensuring transparency in environmental accountability.",
      technologies: [
        "Python",
        "PostgreSQL",
        "ETL",
        "Asynchronous Jobs",
        "Data Pipelines",
        "REST APIs",
      ],
    },
  ];

  const sideProjects = [
    {
      title: "RAG Chatbot with FastAPI, Agno, and NiceGUI",
      link: "https://github.com/SyedAli9135/RAG-ChatBot-Test",
      description:
        "A production-ready Retrieval-Augmented Generation (RAG) chatbot that allows users to upload PDF documents and ask questions about them. Built with modern Python frameworks and featuring real-time streaming responses.",
    },
    {
      title: "Embracing API Gateway Via Consul and Golang",
      link: "https://github.com/SyedAli9135/Go-ApiGateway",
      description:
        "API Gateway in Go (Gin framework) with centralized routing, authentication, rate limiting, and Consul-based service discovery.",
    },
    {
      title: "Distributed Task Scheduler with Leader Election",
      link: "https://github.com/SyedAli9135/Go-DistributedTaskScheduler",
      description:
        "Distributed scheduler with leader election ensuring reliable task assignment, execution monitoring, and fault tolerance.",
    },
    {
      title: "Real-Time Collaborative Document Editing",
      link: "https://github.com/SyedAli9135/Go-RealtimeDocEditor",
      description:
        "Low-latency WebSocket-powered document editor in Go, enabling multiple users to edit collaboratively in real time.",
    },
    {
      title: "Bootcamp Organizing System (Node.js Monolith)",
      link: "https://github.com/SyedAli9135/Devcamper_API",
      description:
        "Monolithic Node.js backend for managing bootcamps, courses, and user registrations in an educational platform.",
    },
    {
      title: "Fine-Tuning LLaMA-3 8B with Unsloth",
      link: "https://github.com/SyedAli9135/Fine-Tuning-Lllama",
      description:
        "Google Colab notebook for fine-tuning LLaMA-3 8B with LoRA and 4-bit quantization using Unsloth.",
    },
    {
      title: "LSTM Trained Textual Classifier",
      link: "https://github.com/SyedAli9135/Text-Classifier",
      description:
        "LSTM-based multi-class news classifier trained on a scraped dataset, showcasing NLP and deep learning capabilities.",
    },
  ];

  // Single expand logic (one open at a time)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 sm:p-12">
      <div className="max-w-7xl mt-12 mx-auto">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-black text-center text-gray-900 mb-12">
          Technical Showcase
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
          A showcase of my professional contributions and open-source work —
          proving my ability to deliver at scale, across industries, and in
          cutting-edge technologies.
        </p>

        {/* Professional Work */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Professional Work
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
            {professionalProjects.map((proj, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col"
              >
                <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-gray-900 text-white rounded-full w-fit shadow-md">
                  {proj.company}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{proj.role}</p>
                <p className="text-gray-700 text-sm mb-3">
                  {expandedIndex === index
                    ? proj.description
                    : proj.description.slice(0, 120) + "..."}
                </p>
                <p className="text-gray-800 font-medium text-sm mb-4">
                  <span className="font-bold">Impact: </span>
                  {proj.impact}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 text-blue-600 hover:underline text-sm"
                >
                  {expandedIndex === index ? "View Less" : "View More"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Side Projects */}
        <section>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Side Projects & Open Source
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {sideProjects.map((proj, index) => (
              <div
                key={index + professionalProjects.length}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {expandedIndex === index + professionalProjects.length
                    ? proj.description
                    : proj.description.slice(0, 100) + "..."}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() =>
                      toggleExpand(index + professionalProjects.length)
                    }
                    className="text-blue-600 hover:underline text-sm mb-4"
                  >
                    {expandedIndex === index + professionalProjects.length
                      ? "View Less"
                      : "View More"}
                  </button>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-black text-white text-center py-2 rounded-lg font-medium hover:bg-gray-900 transition"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
