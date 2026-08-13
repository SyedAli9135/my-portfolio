"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/consulting", label: "Consulting" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fafaf9]/90 backdrop-blur-sm border-b border-[#e4e4e3] z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          Syed Ali
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-zinc-900 transition-colors">
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-zinc-300 rounded-md text-zinc-900 hover:border-zinc-900 transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-zinc-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#e4e4e3] bg-[#fafaf9] px-6 py-4 flex flex-col gap-4 text-sm text-zinc-700">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
