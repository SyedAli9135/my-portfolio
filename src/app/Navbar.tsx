"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-200 bg-opacity-90 backdrop-blur-md shadow-md py-6 px-8 border-b border-gray-400 z-50">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          {/* Navigation Links - Centered */}
          <div className="hidden md:flex space-x-8 text-lg font-semibold">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/blog" className="hover:text-gray-600">
              Blog
            </Link>
            <Link href="/youtube" className="hover:text-gray-600">
              YouTube
            </Link>
            <Link href="/projects" className="hover:text-gray-600">
              Projects
            </Link>
            <Link href="/consulting" className="hover:text-gray-600">
              Consulting
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl absolute right-6"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-200 p-6 flex flex-col space-y-6 items-center md:hidden text-lg font-semibold">
            <Link
              href="/"
              className="hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/youtube"
              className="hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              YouTube
            </Link>
            <Link
              href="/projects"
              className="hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/consulting"
              className="hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Consulting
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
