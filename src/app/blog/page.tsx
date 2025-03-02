"use client";
import React from "react";

export default function Blog() {
  const blogPosts = [
    {
      title: "Embracing Hexagonal Architecture In Modern Microservices",
      link: "https://medium.com/@syedaliakhtar660/embracing-hexagonal-architecture-in-modern-microservices-19b4d6e323ce",
      description:
        "Explore how hexagonal architecture decouples business logic from external systems, enabling robust and maintainable microservices with real-world examples.",
    },
    {
      title: "Domain Driven Design For Modeling Complex Systems",
      link: "https://medium.com/@syedaliakhtar660/domain-driven-design-a-deep-dive-into-modeling-complex-systems-fe85e2195a7d",
      description:
        "Dive deep into Domain-Driven Design to understand how to model complex systems using strategic patterns and practical examples in Python.",
    },
    {
      title: "Fine-Tuning LLaMA-3 8B with Unsloth: A Comprehensive Guide",
      link: "https://medium.com/@syedaliakhtar660/fine-tuning-llama-3-8b-with-unsloth-a-comprehensive-guide-b9aa8400fec9",
      description:
        "A step-by-step guide on fine-tuning LLaMA-3 8B using Unsloth, featuring 4-bit quantization and LoRA-based parameter-efficient fine-tuning techniques.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-black p-8">
      <div className="mt-24 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Blog Posts
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl p-6 border border-gray-300 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
            >
              <h4 className="text-2xl font-bold text-black-700 mb-2">
                {post.title}
              </h4>
              <p className="text-gray-700">{post.description}</p>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://medium.com/@syedaliakhtar660"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-2xl font-medium text-black-600 hover:underline transition"
          >
            View More on Medium →
          </a>
        </div>
      </div>
    </div>
  );
}
