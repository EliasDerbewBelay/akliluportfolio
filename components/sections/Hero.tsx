"use client";

import { Josefin_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Download, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export default function ProfilePage() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/cv/aklilu-resume.pdf"; // Path to your CV file
    link.download = "Aklilu_Derbew_Resume.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main
      className={`${josefin.variable} font-josefin min-h-screen transition-colors duration-300`}
    >
      {/* Light Mode Background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:opacity-0" />

      {/* Dark Mode Background */}
      <div className="fixed inset-0 -z-20 opacity-0 dark:opacity-100 bg-gradient-to-br from-[#0B1120] via-[#0F1A2F] to-[#1A1F35]" />

      {/* Animated gradient orbs for dark mode */}
      <div className="fixed inset-0 -z-10 opacity-0 dark:opacity-100 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Light mode decorative elements */}
      <div className="fixed inset-0 -z-10 dark:opacity-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="relative py-12 px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Clean Profile Image */}
            <div className="relative inline-block">
              <div className="w-38 h-58 rounded-full overflow-hidden mx-auto border-4 border-blue-600 dark:border-blue-400">
                <Image
                  src="/hero-image.png"
                  width={126}
                  height={126}
                  alt="Aklilu Derbew"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
                Aklilu Derbew
              </h1>

              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm sm:text-base bg-blue-600 hover:bg-purple-600 text-white border-0 transition-colors duration-300 cursor-default"
              >
                Graphics Designer & Visual Artist
              </Badge>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600 dark:text-blue-400" />
                Jornalistaklilu@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-purple-600 dark:text-purple-400"
                />
                Addis Ababa, Ethiopia
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-pink-600 dark:text-pink-400" />
                +251 99 383 4681
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact-me" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-purple-600 text-white px-8 py-6 rounded-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-2 justify-center">
                    <MessageCircle className="w-5 h-5" />
                    Get in Touch
                  </span>
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadCV}
                className="w-full sm:w-auto border-2 border-blue-600 dark:border-blue-400 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:text-white px-8 py-6 rounded-xl transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center gap-2 justify-center">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
              </Button>
            </div>

            {/* Optional: Add a small note about CV format */}
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
              Download my resume (PDF format)
            </p>
          </div>
        </section>
      </div>

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
    </main>
  );
}
