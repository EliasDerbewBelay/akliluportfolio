import { Badge } from "../ui/badge";

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
            {[
              "Photoshop",
              "Illustrator",
              "InDesign",
              "Figma",
              "Blender",
            ].map((tool) => (
              <Badge key={tool} variant="outline" className="px-3 py-1">
                {tool}
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
            {["Filmora", "Premiere Pro", "After Effects", "CapCut"].map((tool) => (
              <Badge key={tool} variant="outline" className="px-3 py-1">
                {tool}
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
            <div className="text-sm">🇬🇧 English (Professional)</div>
            <div className="text-sm">🇪🇹 Amharic (Native)</div>
          </div>
        </div>
      </div>
    </section>
  );
}