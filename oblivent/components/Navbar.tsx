"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Mock authentication state - you can replace with real auth logic
  const isAuthenticated = false;
  
  // Check if user is on a platform page
  const isPlatformPage = pathname.startsWith('/platforms/');

  const menuItems = [
    { 
      name: "Home", 
      href: "/",
      gradient: "from-blue-400 to-blue-600",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      )
    },
    { 
      name: "E-Learning", 
      href: "/platforms/elearning",
      gradient: "from-emerald-400 to-cyan-500",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
        </svg>
      )
    },
    { 
      name: "Digital Marketing Agency", 
      href: "/platforms/agency",
      gradient: "from-red-400 to-pink-500",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    { 
      name: "Test E-Commerce", 
      href: "/platforms/mart",
      gradient: "from-orange-400 to-red-500",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      )
    },
    { 
      name: "Broker Dabba Trading", 
      href: "/platforms/software",
      gradient: "from-blue-400 to-indigo-500",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      )
    },
    { 
      name: "Useful Apps & Websites", 
      href: "/tools",
      gradient: "from-purple-400 to-blue-500",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <rect x="7" y="8" width="10" height="8" rx="1" ry="1" />
        </svg>
      )
    },
    { 
      name: "Oblivent Mart", 
      href: "/mart",
      gradient: "from-green-400 to-emerald-500",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
      )
    },
    { 
      name: "AI Tools", 
      href: "/ai-tools",
      gradient: "from-violet-400 to-purple-600",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      name: "Books", 
      href: "/books",
      gradient: "from-indigo-400 to-blue-600",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
      )
    },
    { 
      name: "About", 
      href: "/about",
      gradient: "from-gray-400 to-gray-600",
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
      gradient: "from-pink-400 to-rose-500",
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
        
        {/* Mobile Menu Button - Left Side */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-blue-700/50 rounded-xl transition-all"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.slice(0, 4).map((item) => (
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

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          {isAuthenticated ? (
            <>
              <Link
                href="/profile"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 
                  text-white font-semibold transition-all"
              >
                Profile
              </Link>
              <button className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 
                text-white font-semibold transition-all">
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Logo - Right Side */}
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/oblivent-logo-new.png" 
            alt="Oblivent Logo" 
            className="h-9 w-auto"
          />
        </Link>
      </div>

      {/* Custom Sidebar Design - Exactly like drawing */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
          
          {/* Icon Column - Left boundary */}
          <div className="fixed left-4 top-20 w-16 bg-white/10 backdrop-blur-2xl 
            border border-white/20 shadow-2xl z-50 md:hidden rounded-2xl p-2 space-y-2 max-h-[calc(100vh-7rem)] overflow-y-auto">
            
            {/* Home Icon */}
            <Link
              href="/"
              className={`w-12 h-12 bg-gradient-to-br ${menuItems[0].gradient} rounded-xl 
                flex items-center justify-center text-white shadow-md
                hover:scale-105 transition-transform ${
                pathname === '/' ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {menuItems[0].icon}
            </Link>

            {/* Dashboard - Show only if authenticated and on platform page */}
            {isAuthenticated && isPlatformPage && (
              <Link
                href="/dashboard"
                className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl 
                  flex items-center justify-center text-white shadow-md
                  hover:scale-105 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <rect x="7" y="7" width="10" height="10" rx="1" ry="1" />
                </svg>
              </Link>
            )}

            {/* Platform Icons */}
            {menuItems.slice(1, 7).map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl 
                  flex items-center justify-center text-white shadow-md
                  hover:scale-105 transition-transform ${
                  pathname === item.href ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
              </Link>
            ))}

            {/* Auth Icons */}
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl 
                    flex items-center justify-center text-white shadow-md
                    hover:scale-105 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </Link>
                <button className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl 
                  flex items-center justify-center text-white shadow-md
                  hover:scale-105 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                    <polyline points="16,17 21,12 16,7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl 
                    flex items-center justify-center text-white shadow-md
                    hover:scale-105 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                    <polyline points="10,17 15,12 10,7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                </Link>
                
                <Link
                  href="/auth/signup"
                  className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl 
                    flex items-center justify-center text-white shadow-md
                    hover:scale-105 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" y1="8" x2="19" y2="14" />
                    <line x1="22" y1="11" x2="16" y2="11" />
                  </svg>
                </Link>
              </>
            )}
          </div>
          
          {/* Text Labels - Right boundary */}
          <div className="fixed left-24 top-20 w-48 bg-white/10 backdrop-blur-2xl 
            border border-white/20 shadow-2xl z-50 md:hidden rounded-2xl p-4 space-y-2 max-h-[calc(100vh-7rem)] overflow-y-auto">
            
            {/* Home Text */}
            <div className={`p-2 rounded-xl transition-all ${
              pathname === '/' ? 'bg-blue-500/30 border border-blue-400/50' : 'hover:bg-white/10'
            }`}>
              <span className="text-sm font-medium text-white">Home</span>
            </div>

            {/* Dashboard Text - Show only if authenticated and on platform page */}
            {isAuthenticated && isPlatformPage && (
              <div className="p-2 rounded-xl transition-all hover:bg-white/10">
                <span className="text-sm font-medium text-white">Dashboard</span>
              </div>
            )}

            {/* Platform Text Labels */}
            {menuItems.slice(1, 7).map((item, index) => (
              <div 
                key={item.name}
                className={`p-2 rounded-xl transition-all ${
                  pathname === item.href ? 'bg-blue-500/30 border border-blue-400/50' : 'hover:bg-white/10'
                }`}
              >
                <span className="text-sm font-medium text-white">{item.name}</span>
              </div>
            ))}

            {/* Auth Text Labels */}
            {isAuthenticated ? (
              <>
                <div className="p-2 rounded-xl transition-all hover:bg-white/10">
                  <span className="text-sm font-medium text-white">Profile</span>
                </div>
                <div className="p-2 rounded-xl transition-all hover:bg-white/10">
                  <span className="text-sm font-medium text-white">Logout</span>
                </div>
              </>
            ) : (
              <>
                <div className="p-2 rounded-xl transition-all hover:bg-white/10">
                  <span className="text-sm font-medium text-white">Login</span>
                </div>
                <div className="p-2 rounded-xl transition-all hover:bg-white/10">
                  <span className="text-sm font-medium text-white">Sign Up</span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </nav>
  );
}