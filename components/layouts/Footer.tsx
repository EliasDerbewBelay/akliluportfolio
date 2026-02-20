import Link from "next/link";
import { Linkedin, Send, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://linkedin.com/in/akliluderbew"
              target="_blank"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>

            <Link
              href="https://t.me/akliluderbew"
              target="_blank"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </Link>

            <Link
              href="https://instagram.com/akliluderbew"
              target="_blank"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
