import ModeToggle from "../ui/modeToggle";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
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

          {/* Navigation links with professional hover effects */}
          <div>
            <ul
              className={`flex gap-8 ${josefin.className} text-gray-700 dark:text-gray-200 font-medium`}
            >
              {["Home", "Projects", "Certificates", "Contact Me"].map(
                (item) => (
                  <li key={item} className="relative group">
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="cursor-pointer px-2 py-1 inline-block transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item}
                      {/* Animated underline */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                      {/* Subtle background effect on hover */}
                      <span className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Mode Toggle with hover effect */}
          <div className="relative group">
            <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <ModeToggle />
            </div>
            {/* Optional tooltip */}
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Toggle theme
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
