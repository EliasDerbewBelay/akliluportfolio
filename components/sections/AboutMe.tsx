import { Badge } from "../ui/badge";
import {
  Calendar,
  Briefcase,
  GraduationCap,
  Palette,
  Users,
  PenTool,
} from "lucide-react";

export default function AboutMe() {
  const softSkills = [
    { name: "Creativity", icon: <Palette className="w-3 h-3" /> },
    { name: "Communication", icon: <Users className="w-3 h-3" /> },
    { name: "Problem Solving", icon: <PenTool className="w-3 h-3" /> },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Bio */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          As a passionate graphics designer and visual artist, I specialize in
          creating captivating visual experiences that blend creativity with
          functionality. With expertise across branding, digital art, and
          multimedia projects, I'm dedicated to delivering high-quality work
          that exceeds expectations.
        </p>

        {/* Soft Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-0"
              >
                {skill.icon}
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>2023</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Designer Diploma
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Visual Communication and Digital Design
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  period: "2023 - Present",
                  title: "Graphic Designer",
                  description:
                    "Creating visual content for branding and digital design projects.",
                },
                {
                  period: "2020 - 2023",
                  title: "Freelance Visual Artist",
                  description:
                    "Produced custom artwork and designs for various clients.",
                },
              ].map((exp, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
