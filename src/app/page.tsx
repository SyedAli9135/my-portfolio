"use client";
import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaCode,
  FaServer,
  FaCloud,
  FaRocket,
  FaChevronRight,
  FaLightbulb,
  FaTasks,
  FaCogs,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const socialLinks = [
    {
      href: "mailto:syedaliakhtar660@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/syed-muhammad-ali-akhtar-261417212/",
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
    },
    {
      href: "https://medium.com/@syedaliakhtar660",
      icon: <FaMedium className="text-xl" />,
      label: "Blog",
    },
  ];

  const expertise = [
    {
      icon: <FaCode className="text-3xl text-white" />,
      title: "Backend Engineering",
      description: "Python • Node.js • Golang",
      highlight: "4+ Years",
    },
    {
      icon: <FaCloud className="text-3xl text-white" />,
      title: "Cloud Architecture",
      description: "AWS • Serverless • Microservices",
      highlight: "Scalable",
    },
    {
      icon: <FaServer className="text-3xl text-white" />,
      title: "Infrastructure",
      description: "Docker • Kubernetes • Terraform",
      highlight: "Enterprise",
    },
  ];

  const technologies = [
    "Python",
    "Node.js",
    "Golang",
    "AWS Lambda",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Terraform",
    "API Gateway",
    "Microservices",
  ];

  const testimonials = [
    {
      name: "Raheel Ahmad",
      role: "Head of Engineering, Entertainer FZ LLC",
      feedback:
        "Syed was instrumental in modernizing our core backend services at Entertainer. He led the migration of slow, latency-prone Python services into smaller, idempotent AWS Lambda functions written in Golang. His ability to balance performance optimization with clean, maintainable design had a lasting impact on our platform’s reliability and scalability.",
      image: "/raheel-entertainer.png",
    },
    {
      name: "Mason Yarrick",
      role: "Technical Director, Zyrous",
      feedback:
        "I had the pleasure of collaborating with Syed on building a Python framework that became the foundation for our microservices development. His forward-thinking design supported event-driven architectures using SQS, SNS, and GraphQL, significantly improving developer productivity and system flexibility. Syed brings both technical depth and practical problem-solving to every challenge.",
      image: "/technical-director-zyrous.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <main className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-gray-900/10"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="relative px-6 py-24 md:py-28 max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-28">
            <div className="mb-10">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-3xl mx-auto shadow-2xl overflow-hidden border border-gray-200 bg-white/70 backdrop-blur">
                <Image
                  src="/profile_pic.jpg"
                  alt="Syed Ali"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-gray-900">Syed Muhammad Ali</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-10 max-w-3xl mx-auto">
              Senior Backend Engineer & Independent Consultant
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Cloud Architecture",
                "Microservices",
                "Serverless Computing",
              ].map((spec, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2 bg-white/90 backdrop-blur text-gray-800 rounded-full text-sm font-bold border border-gray-300 shadow-md hover:bg-gray-100 transition-colors"
                >
                  {spec}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    social.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[160px]"
                >
                  {social.icon}
                  <span className="font-bold">{social.label}</span>
                  {social.href.startsWith("http") && (
                    <FaChevronRight className="text-sm opacity-70" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* About Me */}
          <section className="max-w-5xl mx-auto text-center mb-28">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-gray-200 shadow-xl">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                About Me
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                I’m a{" "}
                <span className="font-bold">
                  Backend Software Engineer and Consultant
                </span>
                with a passion for building systems that aren’t just functional
                today but remain{" "}
                <span className="font-bold">
                  scalable, reliable, and future-ready
                </span>{" "}
                for years to come.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Over the past <span className="font-bold">4+ years</span>, I’ve
                worked across{" "}
                <span className="font-bold">
                  product-based (B2B & B2C) and service-based companies
                </span>
                , solving backend challenges that range from optimizing legacy
                monoliths to designing{" "}
                <span className="font-bold">event-driven microservices</span>{" "}
                and <span className="font-bold">serverless architectures</span>{" "}
                handling millions of users.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                My toolkit includes{" "}
                <span className="font-bold">
                  Golang, Python, Node.js, AWS, and Terraform
                </span>
                , which I’ve used to create everything from{" "}
                <span className="font-bold">
                  real-time transaction platforms
                </span>{" "}
                to <span className="font-bold">AI-powered systems</span> and{" "}
                <span className="font-bold">global-scale APIs</span>. But
                engineering for me is never just about writing code—it’s about{" "}
                <span className="font-bold">
                  architecting systems that align with business goals
                </span>
                , enable growth, and eliminate bottlenecks before they happen.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                I specialize in{" "}
                <span className="font-bold">Backend Engineering</span>{" "}
                (low-latency APIs, distributed systems),{" "}
                <span className="font-bold">Cloud & DevOps</span> (AWS
                serverless, Terraform, cost optimization),{" "}
                <span className="font-bold">System Design</span> (scalable
                architectures), and{" "}
                <span className="font-bold">Consulting & Mentorship</span> (best
                practices, architecture guidance).
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Beyond the technical side, I thrive in{" "}
                <span className="font-bold">collaborative environments</span>
                —leading initiatives, simplifying complexity, and delivering
                systems that improve{" "}
                <span className="font-bold">
                  reliability, reduce costs, and accelerate product delivery
                </span>
                . At the heart of it all, I’m passionate about{" "}
                <span className="font-bold">solving problems that matter</span>.
                If you’re building something ambitious and want a backend that’s
                just as strong, let’s connect.
              </p>
            </div>
          </section>

          {/* Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
            {expertise.map((item, idx) => (
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
                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-white/10 rounded-2xl w-fit backdrop-blur">
                    {item.icon}
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-bold">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How I Work */}
          <section className="max-w-6xl mx-auto text-center mb-28">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">
              How I Work
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  icon: <FaLightbulb className="text-yellow-500" />,
                  title: "Discovery",
                  desc: "Understand your business challenges, technical gaps, and desired outcomes.",
                },
                {
                  icon: <FaTasks className="text-blue-500" />,
                  title: "Strategy",
                  desc: "Propose tailored solutions focusing on scalability, cost, and long-term maintainability.",
                },
                {
                  icon: <FaCogs className="text-green-500" />,
                  title: "Delivery",
                  desc: "Implement, guide your team, and ensure smooth handover with documentation and mentorship.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all"
                >
                  <h3 className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 mb-4">
                    {step.icon} {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <div className="mb-28 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2 bg-white/90 backdrop-blur text-gray-800 rounded-full text-sm font-semibold border border-gray-300 shadow-sm hover:bg-gray-100 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <section className="mb-28 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-12">
              What People Say
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all"
                >
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    “{t.feedback}”
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover border border-gray-300 shadow"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
              <FaRocket className="text-gray-700" />
              Ready to build scalable backend systems?
            </p>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let’s discuss your challenges and create something exceptional
              together.
            </p>
            <a
              href="mailto:syedaliakhtar660@gmail.com"
              className="inline-block bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white px-10 py-5 rounded-2xl font-extrabold shadow-xl transition-transform transform hover:scale-105"
            >
              Work With Me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
