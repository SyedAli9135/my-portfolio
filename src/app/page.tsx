"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center px-8">
      <main className="mt-24 max-w-3xl mx-auto text-center">
        {/* Header: Photo and Introduction Inline */}
        <div className="flex items-center justify-center space-x-6">
          <div className="flex-shrink-0">
            <Image
              src="/profile_pic.jpeg"
              alt="Syed Ali"
              width={100}
              height={100}
              className="rounded"
            />
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm <span className="text-blue-600">Syed Ali</span>
          </h1>
        </div>

        <p className="text-xl text-gray-700 mt-4 font-medium">
          Software Engineer | Independent Consultant | Cloud & Backend
          Specialist
        </p>

        {/* Professional Bio */}
        <div className="mt-8 text-lg text-gray-800 leading-relaxed space-y-6">
          <p>
            I'm a{" "}
            <span className="font-semibold">
              Software Engineer & Independent Consultant
            </span>{" "}
            specializing in{" "}
            <span className="text-blue-600 font-bold">
              Golang, Python, and Node.js
            </span>
            . I help companies design and build{" "}
            <span className="font-semibold">scalable, high-performance</span>{" "}
            backend systems tailored to their business needs.
          </p>
          <p>
            With deep expertise in{" "}
            <span className="text-blue-600 font-bold">Microservices</span>,{" "}
            <span className="text-blue-600 font-bold">
              Cloud-Native Architectures
            </span>
            , and{" "}
            <span className="text-blue-600 font-bold">
              Serverless Computing
            </span>
            , I collaborate with startups and enterprises to build{" "}
            <span className="font-semibold">
              resilient, distributed software solutions
            </span>
            . My work involves{" "}
            <span className="font-semibold">AWS, Terraform</span>, and{" "}
            <span className="font-semibold">event-driven architectures</span>.
          </p>
          <p>
            As an independent contractor, I have successfully built{" "}
            <span className="font-semibold">
              mission-critical backend infrastructures
            </span>{" "}
            for clients across various industries—including{" "}
            <span className="text-blue-600 font-bold">
              web, mobile, and AI-driven applications
            </span>
            . My expertise allows businesses to handle{" "}
            <span className="text-blue-600 font-bold">
              millions of requests
            </span>{" "}
            and efficiently process{" "}
            <span className="text-blue-600 font-bold">
              large-scale data workloads
            </span>
            .
          </p>
          <p>
            Whether you need to{" "}
            <span className="font-semibold">
              build a new software product, scale an existing system
            </span>
            , or{" "}
            <span className="font-semibold">
              optimize your cloud infrastructure
            </span>
            , I offer expertise to help you succeed.
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Let’s collaborate and bring your vision to life! 🚀
          </p>
        </div>
      </main>
    </div>
  );
}
