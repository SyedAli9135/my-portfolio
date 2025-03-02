"use client";
import React from "react";
import Image from "next/image";

export default function Project() {
  const projects = [
    {
      title: "Embracing API Gateway Via Consul and Golang",
      link: "https://github.com/SyedAli9135/Go-ApiGateway",
      image: "API-Gateway.png",
      description:
        "This project is an API Gateway built using the Gin framework in Go. It offers centralized routing, rate limiting, authentication, and service discovery via Consul—designed for scalability, efficiency, and security within a modern microservices architecture.",
    },
    {
      title: "Distributed Task Scheduler with Leader Election",
      link: "https://github.com/SyedAli9135/Go-DistributedTaskScheduler",
      image: "Distributed-task-scheduler.png",
      description:
        "This system enables clients to submit tasks via a Task Scheduler API, which validates and stores them in a distributed state store. A leader node assigns tasks to available workers, which poll, execute, and update task statuses, while real-time metrics ensure robust monitoring and performance.",
    },
    {
      title: "Real-Time Collaborative Document Editing System",
      link: "https://github.com/SyedAli9135/Go-RealtimeDocEditor",
      image: "Go-RealtimeDocEditor.png",
      description:
        "This project implements a real-time collaborative document editing system using WebSockets in Go. It allows multiple users to edit documents simultaneously with low latency and efficient concurrency, ensuring smooth collaboration.",
    },
    {
      title: "Bootcamp Organizing System (Monolith in Node.js)",
      link: "https://github.com/SyedAli9135/Devcamper_API",
      image: "bootcamp-node.png",
      description:
        "A comprehensive bootcamp organizing system built as a classical monolith using Node.js. It manages bootcamp data, user registrations, and course scheduling, providing a robust backend solution for educational platforms.",
    },
    {
      title: "Fine-Tuning LLaMA-3 8B with Unsloth: A Comprehensive Guide",
      link: "https://github.com/SyedAli9135/Fine-Tuning-Lllama",
      image: "Fine-tuning-llama3-8b.png",
      description:
        "This repository contains a Google Colab notebook for fine-tuning the LLaMA-3 8B model using Unsloth on a custom dataset formatted in the Alpaca style. It leverages 4-bit quantization and LoRA-based PEFT to efficiently fine-tune large models on resource-constrained hardware.",
    },
    {
      title: "LSTM Trained Textual Classifier",
      link: "https://github.com/SyedAli9135/Fine-Tuning-Lllama",
      image: "lstm-classifier.png",
      description:
        "This repository contains a notebook for training a textual classifier for news multi-categorical classification on a dataset scraped from various news sources.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-black p-8">
      <div className="mt-24 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Technical Showcase
        </h1>
        <p className="text-xl text-gray-700 text-center mb-10">
          Explore cutting-edge projects demonstrating my proficiency in backend
          engineering, cloud solutions, and microservices.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl p-6 border border-gray-300 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
            >
              {/* Display project image */}
              <div className="mb-4">
                <Image
                  src={`/${proj.image}`}
                  alt={proj.title}
                  width={400}
                  height={250}
                  className="object-contain rounded-md mx-auto"
                />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2">
                {proj.title}
              </h4>
              <p className="text-gray-700">{proj.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
