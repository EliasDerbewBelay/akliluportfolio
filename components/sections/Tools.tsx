import { Badge } from "../ui/badge";
import Image from "next/image";

// Define the available icon keys as a type
type AvailableTool = keyof typeof availableIcons;

// Map of available icons from your public/icons folder
const availableIcons = {
  // Adobe Icons
  "After Effects": "/icons/adobe-after-effects-svgrepo-com.svg",
  Animate: "/icons/adobe-animate-svgrepo-com.svg",
  "Creative Cloud": "/icons/adobe-creative-cloud-svgrepo-com.svg",
  Dreamweaver: "/icons/adobe-dreamweaver-svgrepo-com.svg",
  Illustrator: "/icons/adobe-illustrator-svgrepo-com.svg",
  Lightroom: "/icons/adobe-lightroom-svgrepo-com.svg",
  Photoshop: "/icons/adobe-photoshop-svgrepo-com.svg",
  Premiere: "/icons/adobe-premiere-svgrepo-com.svg",
  "Premiere Pro": "/icons/adobe-premiere-svgrepo-com.svg",
  XD: "/icons/adobe-xd-svgrepo-com.svg",
  Aero: "/icons/adobe-aero-svgrepo-com.svg",

  // Other tools
  Blender: "/icons/blender-svgrepo-com.svg",
  CapCut: "/icons/capcut-svgrepo-com.svg",
  InDesign: "/icons/indesign-cc-logo-svgrepo-com.svg",
} as const; // Use 'as const' for better type inference

// Define which tools to show in each category using only available icons
const designTools: AvailableTool[] = [
  "Photoshop",
  "Illustrator",
  "InDesign",
  "XD",
  "Aero",
  "Blender",
  "Dreamweaver",
  "Animate",
  "Creative Cloud",
];

const editingTools: AvailableTool[] = [
  "Premiere Pro",
  "After Effects",
  "CapCut",
  "Premiere",
  "Lightroom",
];

export default function Tools() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Skills & Tools
        </h2>

        {/* Design Tools */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Design Software
          </h3>
          <div className="flex flex-wrap gap-2">
            {designTools.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="px-3 py-2 flex items-center justify-center group relative cursor-default hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title={tool}
              >
                <Image
                  src={availableIcons[tool]}
                  alt={tool}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                {/* Custom tooltip on hover */}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {tool}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Editing Tools */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Editing Software
          </h3>
          <div className="flex flex-wrap gap-2">
            {editingTools.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="px-3 py-2 flex items-center justify-center group relative cursor-default hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title={tool}
              >
                <Image
                  src={availableIcons[tool]}
                  alt={tool}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                {/* Custom tooltip on hover */}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {tool}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="text-sm flex items-center gap-1">
              <span className="text-xl">🇬🇧</span> English (Professional)
            </div>
            <div className="text-sm flex items-center gap-1">
              <span className="text-xl">🇪🇹</span> Amharic (Native)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
