"use client";

import { useState } from "react";
import ModeToggle from "../ui/modeToggle";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Josefin_Sans } from "next/font/google";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Home", "Projects", "Certificates", "Contact Me"];

  const getHref = (item) => {
    if (item === "Home") {
      return "/";
    }
    return `/${item.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with subtle hover effect */}
          <div className="flex items-center">
            <div className="relative group">
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:block">
            <ul
              className={`flex gap-8 ${josefin.className} text-gray-700 dark:text-gray-200 font-medium`}
            >
              {navItems.map((item) => (
                <li key={item} className="relative group">
                  <Link
                    href={getHref(item)}
                    className="cursor-pointer px-2 py-1 inline-block transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                    <span className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Mode Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Mode Toggle with hover effect */}
            <div className="relative group">
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <ModeToggle />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
                Toggle theme
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul
            className={`${josefin.className} text-gray-700 dark:text-gray-200 font-medium py-4 px-4`}
          >
            {navItems.map((item, index) => (
              <li
                key={item}
                className={`transform transition-all duration-300 delay-${index * 75} ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
              >
                <a
                  href={getHref(item)}
                  className="block py-3 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
