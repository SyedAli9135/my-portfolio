"use client";
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

export default function Consulting() {
  const contactOptions = [
    {
      link: "mailto:syedaliakhtar660@gmail.com",
      bgColor: "bg-gradient-to-r from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black",
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
    },
    {
      link: "https://www.linkedin.com/in/syed-muhammad-ali-akhtar-261417212/",
      bgColor: "bg-gradient-to-r from-gray-800 to-black",
      hoverColor: "hover:from-black hover:to-gray-900",
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
    },
  ];

  const services = [
    {
      title: "Enterprise Backend Architecture",
      icon: <FaServer className="text-3xl text-white" />,
      description: [
        "Design and implement scalable, high-performance backend systems",
        "4+ years expertise in Python, Node.js, and Golang ecosystems",
        "Microservices architecture and distributed systems design",
        "Performance optimization and reliability engineering",
      ],
      pricing: "Starting from $80/hour",
      highlight: "Most Popular",
    },
    {
      title: "AWS Cloud & Serverless Migration",
      icon: <FaAws className="text-3xl text-white" />,
      description: [
        "Complete serverless transformation using AWS Lambda & API Gateway",
        "Infrastructure as Code with CloudFormation/CDK",
        "Cost optimization strategies (typically 40-60% reduction)",
        "Zero-downtime migration planning and execution",
      ],
      pricing: "Starting from $70/hour",
    },
    {
      title: "Strategic Cloud Consulting",
      icon: <FaRocket className="text-3xl text-white" />,
      description: [
        "End-to-end cloud strategy and roadmap development",
        "Technical due diligence for scaling businesses",
        "Architecture reviews and optimization recommendations",
        "Multi-cloud and hybrid cloud strategies",
      ],
      pricing: "Book Strategic Session - $150/hour",
    },
    {
      title: "Senior Engineering Mentorship",
      icon: <FaUsers className="text-3xl text-white" />,
      description: [
        "1-on-1 mentorship for backend engineers (mid to senior level)",
        "System design mastery and architectural thinking",
        "Career progression and technical leadership guidance",
        "Code reviews and best practices implementation",
      ],
      pricing: "Starting from $50/hour",
    },
    {
      title: "Legacy System Modernization",
      icon: <FaCogs className="text-3xl text-white" />,
      description: [
        "Monolith to microservices transformation",
        "Database migration and optimization strategies",
        "API design and integration architecture",
        "Technical debt reduction and refactoring",
      ],
      pricing: "Custom Engagement - Contact for Quote",
    },
    {
      title: "Technical Leadership Consulting",
      icon: <FaCode className="text-3xl text-white" />,
      description: [
        "Engineering team scaling and process optimization",
        "DevOps culture implementation and CI/CD pipelines",
        "Technology stack evaluation and selection",
        "Product-engineering collaboration frameworks",
      ],
      pricing: "Retainer Packages Available",
    },
  ];

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "10+", label: "Projects Delivered" },
    { number: "3+", label: "Companies Served" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const technologies = [
    "Python",
    "Node.js",
    "Golang",
    "AWS Lambda",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "API Gateway",
    "CloudFormation",
    "Terraform",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-gray-900/10"></div>
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <div className="relative px-6 py-24 text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent leading-tight tracking-tight">
            Scale Your Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Transform your backend systems with{" "}
            <span className="font-bold text-gray-900 bg-gray-200 px-2 py-1 rounded">
              enterprise-grade architecture
            </span>{" "}
            and{" "}
            <span className="font-bold text-gray-900 bg-gray-200 px-2 py-1 rounded">
              cloud-native solutions
            </span>
            . Trusted by global companies for mission-critical systems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technologies.slice(0, 8).map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/90 backdrop-blur text-gray-800 rounded-full text-sm font-semibold border border-gray-300 shadow-md hover:bg-gray-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Experience Highlight */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-white/10 to-gray-100/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
                Proven Track Record
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-100 font-medium">
                  Led critical infrastructure projects for{" "}
                  <span className="font-black text-white bg-white/20 px-3 py-1 rounded-lg">
                    The Entertainer FZ LLC
                  </span>{" "}
                  — Dubai's premier rewards platform serving millions of users
                  globally. Specialized in high-availability systems, real-time
                  processing, and cost-effective cloud architectures that scale
                  from startup to enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900 tracking-tight">
              Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              From architecture design to team mentorship — comprehensive
              solutions for your technical challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700 hover:border-gray-600 hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: "16px 16px",
                  }}
                ></div>

                {service.highlight && (
                  <div className="absolute -top-4 left-6">
                    <span className="bg-gradient-to-r from-white to-gray-200 text-gray-900 px-4 py-2 rounded-full text-xs font-black shadow-lg">
                      {service.highlight}
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-white/10 rounded-2xl w-fit backdrop-blur">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {service.description.map((point, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="font-medium leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-gray-700">
                    <p className="text-xl font-black text-white">
                      {service.pricing}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white tracking-tight">
            Ready to Scale?
          </h2>
          <p className="text-2xl mb-16 text-gray-300 font-medium">
            Let's discuss how we can transform your backend infrastructure and
            accelerate your growth
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {contactOptions.map((option, idx) => (
              <a
                key={idx}
                href={option.link}
                className={`group flex items-center justify-center gap-4 ${option.bgColor} ${option.hoverColor} text-white px-10 py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 min-w-[200px] border border-gray-600 hover:border-gray-500`}
              >
                {option.icon}
                <span className="font-bold text-lg">{option.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 max-w-md mx-auto">
            <p className="text-gray-400 font-semibold">
              ⚡ Response within 24 hours
            </p>
            <p className="text-gray-400 font-semibold">
              💬 Free initial consultation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
