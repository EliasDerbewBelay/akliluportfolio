"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import {
  MdPalette,
  MdBrush,
  MdDesignServices,
  MdAnimation,
  MdVideocam,
  MdCamera,
} from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/aklilu-resume.pdf";
    link.download = "Aklilu_Derbew_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Design icons - Full set for desktop, minimal for mobile
  const designIcons = [
    {
      Icon: MdPalette,
      color: "#3B82F6",
      delay: 0,
      position: "top-0 left-0",
      desktopPos: "lg:top-0 lg:left-0",
      rotate: 0,
    },
    {
      Icon: MdBrush,
      color: "#1E3A8A",
      delay: 0.2,
      position: "top-10 -right-5",
      desktopPos: "lg:top-10 lg:-right-5",
      rotate: 15,
    },
    {
      Icon: MdDesignServices,
      color: "#2563EB",
      delay: 0.4,
      position: "-bottom-5 left-10",
      desktopPos: "lg:-bottom-5 lg:left-10",
      rotate: -10,
    },
    {
      Icon: MdAnimation,
      color: "#1E40AF",
      delay: 0.6,
      position: "bottom-10 -right-5",
      desktopPos: "lg:bottom-10 lg:-right-5",
      rotate: 5,
    },
    {
      Icon: MdVideocam,
      color: "#3B82F6",
      delay: 0.8,
      position: "-top-5 right-10",
      desktopPos: "lg:-top-5 lg:right-10",
      rotate: -5,
    },
    {
      Icon: MdCamera,
      color: "#1E3A8A",
      delay: 1,
      position: "bottom-0 left-0",
      desktopPos: "lg:bottom-0 lg:left-0",
      rotate: 10,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 flex flex-col items-center overflow-hidden">
      {/* Animated gradient orbs for dark mode - Desktop only */}
      <div className="absolute inset-0 -z-10 opacity-0 dark:opacity-100 overflow-hidden hidden lg:block">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-blue-800/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Light mode decorative elements - Desktop only */}
      <div className="absolute inset-0 -z-10 dark:opacity-0 hidden lg:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      {/* MOBILE LAYOUT - visible only on mobile */}
      <div className="lg:hidden w-full px-6 pt-16 pb-8 flex flex-col items-center gap-8">
        {/* Name */}
        <div className="text-center">
          <h2 className="text-sm font-bold text-gray-600 dark:text-gray-400">
            Hy! I Am
          </h2>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Aklilu Derbew.
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 dark:text-gray-400 text-sm italic text-center max-w-xs">
          I design beautifully simple things, and I love what I do.
        </p>

        {/* Profile Image with minimal icons */}
        <div className="relative my-2">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/20 blur-xl animate-pulse -z-10" />

            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/hero-image.png"
                alt="Aklilu Derbew"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Only 4 icons on mobile, positioned closer */}
            {designIcons
              .slice(0, 4)
              .map(({ Icon, color, delay, position }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position.replace("lg:", "")}`}
                  animate={{
                    scale: [1, 1.1, 1],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay,
                    repeat: Infinity,
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center"
                    style={{ color }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Bottom Section - Full width buttons */}
        <div className="w-full space-y-6 mt-4">
          {/* Experience & Social */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                01
              </span>
              <span className="text-[8px] uppercase tracking-wider text-gray-500 leading-tight">
                Years
                <br />
                Experience
              </span>
            </div>

            <div className="flex gap-3 text-gray-600 dark:text-gray-400">
              <Link href="https://t.me/aki_project">
                <FaTelegram className="w-4 h-4 cursor-pointer hover:text-blue-500 transition-colors" />
              </Link>
              <Link href="https://tiktok.com/@akiproject7">
                <FaTiktok className="w-4 h-4 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>
              <Link href="#">
                <FaYoutube className="w-4 h-4 cursor-pointer hover:text-red-600 transition-colors" />
              </Link>

              <Link href="https://www.instagram.com/aki.project7">
                <FaInstagram className="w-4 h-4 cursor-pointer hover:text-pink-600 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Job Title */}
          <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 text-center">
            Creative{" "}
            <span className="text-blue-600 dark:text-blue-400">Designer.</span>
          </h3>

          {/* Buttons - Full width and professional */}
          <div className="flex flex-col gap-3 w-full">
            <Link href="/contact-me" className="w-full">
              <button className="w-full px-4 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-all duration-300 shadow-md">
                Get in Touch
              </button>
            </Link>

            <button
              onClick={handleDownloadCV}
              className="w-full px-4 py-3.5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white font-medium rounded-xl text-sm transition-all duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT - visible only on desktop */}
      <div className="hidden lg:block relative w-full h-screen">
        {/* Top Left: Name and Intro */}
        <div className="absolute top-20 left-20 max-w-none">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-2">
            Hy! I Am
          </h2>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Aklilu Derbew.
          </h1>
        </div>

        {/* Top Right: Tagline */}
        <div className="absolute top-20 right-20 max-w-[200px] text-right">
          <p className="text-gray-600 dark:text-gray-400 text-base italic">
            I design beautifully simple things, and I love what I do.
          </p>
        </div>

        {/* Center: Main Image with all icons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/20 blur-xl animate-pulse -z-10" />

            <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl ring-4 ring-blue-600/20 dark:ring-blue-400/20">
              <Image
                src="/hero-image.png"
                alt="Aklilu Derbew"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* All 6 icons with full animation */}
            {designIcons.map(
              ({ Icon, color, delay, desktopPos, rotate }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${desktopPos} z-20`}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [rotate, rotate + 10, rotate],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center"
                    style={{ color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* Bottom Left: Experience & Socials - Updated icons */}
        <div className="absolute bottom-20 left-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              01
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500 leading-tight">
              Years
              <br />
              Experience
            </span>
          </div>

          <div className="flex gap-6 text-gray-600 dark:text-gray-400">
            <Link href="https://t.me/aki_project">
              <FaTelegram className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
            </Link>
            <Link href="https://www.tiktok.com/@akiproject7">
              <FaTiktok className="w-5 h-5 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="https://www.youtube.com/@aki_project7">
              <FaYoutube className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/aki.project7">
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-pink-600 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/aklilu-derbew">
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-blue-700 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Bottom Right: Job Title & Buttons */}
        <div className="absolute bottom-20 right-20 text-right">
          <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200 italic mb-6">
            Creative <br />{" "}
            <span className="text-blue-600 dark:text-blue-400">Designer.</span>
          </h3>

          <div className="flex gap-4 justify-end">
            <Link href="/contact-me">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-md">
                Get in Touch
              </button>
            </Link>

            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white font-medium rounded-lg text-base transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-black/10 pointer-events-none" />

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
