"use client";
import React, { useState } from "react";
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
      image: "python-asyncio-concurrency.png",
      description:
        "Explore Python’s concurrency landscape with threading, multiprocessing, and asyncio. This hands-on guide walks through real-world examples, performance optimizations, and best practices for writing highly concurrent applications.",
    },
  ];

  const [expanded, setExpanded] = useState(Array(blogPosts.length).fill(false));

  const toggleExpand = (index: number) => {
    setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 p-6 sm:p-12">
      <div className=" mt-15 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-14">
          Blog Posts
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded-t-2xl">
                {post.image ? (
                  <Image
                    src={`/${post.image}`}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                    No Image Available
                  </div>
                )}
              </div>
              <div className="flex flex-col p-6 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm mb-4">
                  {expanded[index]
                    ? post.description
                    : post.description.slice(0, 100) + "..."}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-600 hover:underline text-sm mb-4"
                  >
                    {expanded[index] ? "View Less" : "View More"}
                  </button>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-black text-white text-center py-2 rounded-lg font-medium hover:bg-gray-900 transition"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@syedaliakhtar660"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl font-semibold text-gray-800 hover:underline"
          >
            View More on Medium →
          </a>
        </div>
      </div>
    </div>
  );
}
