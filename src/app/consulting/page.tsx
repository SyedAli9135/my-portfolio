"use client";
import React, { useState } from "react";

export default function Consulting() {
  const [isOpen, setIsOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const contactOptions = [
    {
      title: "Email Me",
      link: "mailto:syedaliakhtar660@gmail.com",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      title: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/syed-muhammad-ali-akhtar-261417212/",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-gray-800",
    },
  ];

  // Single array for all services
  const services = [
    {
      title: "Backend & Infrastructure Engineering",
      description: (
        <>
          Need a{" "}
          <span className="font-bold text-black">
            scalable and high-performance backend
          </span>
          ? I specialize in
          <span className="font-bold text-black">
            {" "}
            Golang, Python, Node.js, AWS, and Microservices{" "}
          </span>
          to build
          <span className="font-bold text-black">
            {" "}
            robust, cloud-native architectures.
          </span>
        </>
      ),
      pricing: "Starting from $60/hour",
    },
    {
      title: "AWS Lambda Migration",
      description: (
        <>
          Looking to migrate your workloads to{" "}
          <span className="font-bold text-black">AWS Lambda & Serverless</span>?
          I provide{" "}
          <span className="font-bold text-black">
            step-by-step migration plans, architecture consulting,
          </span>{" "}
          and{" "}
          <span className="font-bold text-black">cost-efficient solutions</span>{" "}
          for{" "}
          <span className="font-bold text-black">seamless cloud adoption.</span>
        </>
      ),
      pricing: "Starting from $50/hour",
    },
    {
      title: "AWS Cloud Strategy",
      description: (
        <>
          Confused about{" "}
          <span className="font-bold text-black">AWS services</span>? Need the
          best{" "}
          <span className="font-bold text-black">cloud-native approach</span>{" "}
          for your business? I offer{" "}
          <span className="font-bold text-black">
            strategic consulting on AWS architectures, scalability,
            cost-optimization, and best practices.
          </span>
        </>
      ),
      pricing: "Book a 30-min Consultation",
    },
    {
      title: "1-on-1 Mentorship",
      description: (
        <>
          Want to level up your backend engineering skills? I provide{" "}
          <span className="font-bold text-black">personalized mentorship</span>{" "}
          on{" "}
          <span className="font-bold text-black">
            cloud architectures, Golang, microservices, and scalable systems.
          </span>
        </>
      ),
      pricing: "Starting from $30/hour",
    },
    {
      title: "Technical Consulting",
      description: (
        <>
          Need help with{" "}
          <span className="font-bold text-black">
            optimizing your cloud infrastructure, refactoring monolithic
            systems, or improving scalability?
          </span>{" "}
          Let's analyze and enhance your architecture.
        </>
      ),
      pricing: "Custom Pricing – Contact for a Quote",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-black px-8 py-6">
      <main className="mt-20 max-w-5xl mx-auto w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Consulting Services
        </h1>
        <p className="text-xl text-gray-700 mt-4 font-medium">
          Helping businesses scale with Cloud & Backend expertise
        </p>

        {/* Single Grid for All Services */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6  transition transform hover:-translate-y-1 hover:scale-105 max-w-sm text-left"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-700 mt-2">{service.description}</p>
              <p className="text-lg font-semibold text-black mt-4">
                {service.pricing}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-lg font-medium text-gray-800">
            Ready to work together? Let's build something amazing!
          </p>
          <button
            className="mt-4 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition mb-12 text-2xl font-semibold"
            onClick={() => setIsOpen(true)}
          >
            Get in Touch
          </button>
        </div>
      </main>

      {/* Modal for Contact Options */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 backdrop-blur-lg bg-black bg-opacity-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full relative animate-fadeIn">
            <button
              className="absolute top-3 right-4 text-gray-600 text-2xl hover:text-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Contact Me
            </h2>
            <p className="text-gray-700 mt-4 text-center">
              Choose an option to get in touch:
            </p>
            <div className="mt-6 flex flex-col items-center space-y-4">
              <a
                href={contactOptions[carouselIndex].link}
                className={`w-full ${contactOptions[carouselIndex].bgColor} text-white px-6 py-3 rounded-lg ${contactOptions[carouselIndex].hoverColor} transition text-center text-xl font-semibold`}
              >
                {contactOptions[carouselIndex].title}
              </a>
              <button
                className="text-black mt-4 cursor-pointer text-xl font-medium"
                onClick={() =>
                  setCarouselIndex((carouselIndex + 1) % contactOptions.length)
                }
              >
                Next Option
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
