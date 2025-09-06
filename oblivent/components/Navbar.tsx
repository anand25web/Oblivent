"use client";

import { useState } from "react";
import Link from "next/link";
// Using SVG icons instead of lucide-react for now

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Platforms", href: "/platforms" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full flex justify-center z-50">
      <div className="mt-4 mx-6 w-[92%] bg-blue-950/40 backdrop-blur-xl 
        border border-blue-800/30 shadow-lg rounded-2xl 
        px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-white tracking-wide">
          Oblivent
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side (Login/Signup or Profile/Logout) */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/auth/login"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 
              text-white font-semibold transition-all"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 
              text-white font-semibold transition-all"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16" />
              <path d="M4 6h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 w-[92%] mx-6 bg-blue-950/50 
          backdrop-blur-xl border border-blue-800/30 shadow-lg 
          rounded-2xl p-6 flex flex-col space-y-4 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white font-medium hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-blue-800/40" />
          <Link
            href="/auth/login"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all text-center"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold transition-all text-center"
            onClick={() => setIsOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}