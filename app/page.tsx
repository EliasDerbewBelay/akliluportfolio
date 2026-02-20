import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Tools from "@/components/sections/Tools";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Width */}
      <Hero />

      {/* About Me & Tools Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-blue-950/10" />

        {/* Mobile Layout (Stacked) */}
        <div className="block lg:hidden space-y-12">
          <section className="scroll-mt-16" id="about">
            <AboutMe />
          </section>

          <div className="relative">
            <Separator className="my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>

          <section className="scroll-mt-16" id="tools">
            <Tools />
          </section>
        </div>

        {/* Desktop Layout (Side by Side with Vertical Separator) */}
        <div className="hidden lg:block">
          <div className="flex items-stretch gap-8 xl:gap-12">
            {/* About Me Section - Left Side */}
            <section className="flex-1 scroll-mt-16" id="about">
              <AboutMe />
            </section>

            {/* Vertical Separator */}
            <div className="relative flex items-stretch">
              <Separator
                orientation="vertical"
                className="h-full bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent w-[2px]"
              />
            </div>

            {/* Tools Section - Right Side */}
            <section className="flex-1 scroll-mt-16" id="tools">
              <Tools />
            </section>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-20 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -z-10" />
        <div className="absolute bottom-20 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -z-10" />
      </div>
    </main>
  );
}
