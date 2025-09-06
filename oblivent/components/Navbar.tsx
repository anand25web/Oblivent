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
            className="h-8 w-auto opacity-90"
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

      {/* Mobile Menu Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
          
          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-80 bg-gray-100 shadow-2xl z-50 md:hidden flex">
            {/* Icons Column */}
            <div className="w-20 bg-white/90 flex flex-col items-center py-6 space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                </Link>
              ))}
              
              <div className="border-t border-gray-300 w-12 my-4" />
              
              {/* Login Icon */}
              <Link
                href="/auth/login"
                className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white hover:bg-blue-600 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                  <polyline points="10,17 15,12 10,7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
              </Link>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 bg-gray-50 flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 p-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-4 text-lg text-gray-700 hover:text-blue-600 font-medium border-b border-gray-200 last:border-b-0 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="mt-8 space-y-4">
                  <Link
                    href="/auth/login"
                    className="block w-full p-4 text-center bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block w-full p-4 text-center bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}