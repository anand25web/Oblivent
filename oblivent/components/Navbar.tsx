"use client";

import { useState } from "react";
import Link from "next/link";
// Using SVG icons instead of lucide-react for now

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { 
      name: "Home", 
      href: "/", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      )
    },
    { 
      name: "Platforms", 
      href: "/platforms", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      )
    },
    { 
      name: "About", 
      href: "/about", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      )
    },
    { 
      name: "Contact", 
      href: "/contact", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
  ];

  return (
    <nav className="fixed w-full flex justify-center z-50">
      <div className="mt-4 mx-6 w-[92%] bg-blue-950/40 backdrop-blur-xl 
        border border-blue-800/30 shadow-lg rounded-2xl 
        px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/oblivent-logo.png" 
            alt="Oblivent Logo" 
            className="h-8 w-auto mix-blend-screen opacity-95"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
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

      {/* Mobile Menu Sidebar - Right Side */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
          
          {/* Right Sidebar */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="flex-1 p-6 space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-12 h-12 bg-gray-100 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
              
              <div className="border-t border-gray-200 my-6" />
              
              {/* Auth Buttons */}
              <Link
                href="/auth/login"
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-blue-50 transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-12 h-12 bg-blue-100 border-2 border-blue-200 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                    <polyline points="10,17 15,12 10,7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  Login
                </span>
              </Link>
              
              <Link
                href="/auth/signup"
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-green-50 transition-all group"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-12 h-12 bg-green-100 border-2 border-green-200 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:border-green-500 group-hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" y1="8" x2="19" y2="14" />
                    <line x1="22" y1="11" x2="16" y2="11" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}