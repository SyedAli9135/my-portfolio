"use client";
import React from "react";
import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      title:
        "Hexagonal Architecture in Modern Microservices: A Practical Approach",
      link: "https://medium.com/@syedaliakhtar660/embracing-hexagonal-architecture-in-modern-microservices-19b4d6e323ce",
      image: "hexagonal-architecture.png",
      description:
        "Discover how hexagonal architecture decouples core business logic from external dependencies, fostering scalability, testability, and maintainability in modern microservices. This article explores real-world use cases and best practices.",
    },
    {
      title:
        "Domain-Driven Design (DDD): A Deep Dive into Modeling Complex Systems",
      link: "https://medium.com/@syedaliakhtar660/domain-driven-design-a-deep-dive-into-modeling-complex-systems-fe85e2195a7d",
      image: "domain-driven-design.png",
      description:
        "Learn how Domain-Driven Design (DDD) helps tackle the complexity of large-scale systems by structuring domain logic effectively. This guide covers core DDD principles, strategic design patterns, and Python-based practical implementations.",
    },
    {
      title: "Fine-Tuning LLaMA-3 8B with Unsloth: A Hands-On Guide",
      link: "https://medium.com/@syedaliakhtar660/fine-tuning-llama-3-8b-with-unsloth-a-comprehensive-guide-b9aa8400fec9",
      image: "Fine-tuning-llama3-8b.png",
      description:
        "A comprehensive, step-by-step tutorial on fine-tuning LLaMA-3 8B using Unsloth. Learn advanced techniques, including 4-bit quantization and LoRA-based parameter-efficient fine-tuning, to optimize model performance with minimal resources.",
    },
    {
      title: "Building High-Performance TCP and UDP Servers in Golang",
      link: "https://medium.com/@syedaliakhtar660/tcp-and-udp-servers-in-golang-a-deep-dive-0d9ad190a413",
      image: "tcp-udp.png",
      description:
        "Gain an in-depth understanding of TCP and UDP protocols in Golang. This article covers their architectural differences, real-world use cases, and how to build efficient, scalable network servers from scratch.",
    },
    {
      title:
        "Mastering Concurrency in Python: Threads, Multiprocessing, and Asyncio",
      link: "https://medium.com/@syedaliakhtar660/mastering-concurrency-in-python-a-deep-dive-into-asyncio-threading-multiprocessing-and-testing-403be0e15a2e",
      image: "",
      description:
        "Explore Python’s concurrency landscape with threading, multiprocessing, and asyncio. This hands-on guide walks through real-world examples, performance optimizations, and best practices for writing highly concurrent applications.",
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
              {/* Display project image */}
              <div className="mb-4">
                <Image
                  src={`/${post.image}`}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="object-contain rounded-md mx-auto"
                />
              </div>
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
