import { Badge } from "../ui/badge";
import {
  Calendar,
  Briefcase,
  Palette,
  Users,
  PenTool,
  Heart,
  Target,
} from "lucide-react";

export default function AboutMe() {
  const softSkills = [
    {
      name: "Creativity",
      icon: <Palette className="w-3 h-3" />,
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      name: "Communication",
      icon: <Users className="w-3 h-3" />,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      name: "Problem Solving",
      icon: <PenTool className="w-3 h-3" />,
      color:
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      name: "Attention to Detail",
      icon: <Target className="w-3 h-3" />,
      color:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      name: "Passion for Learning",
      icon: <Heart className="w-3 h-3" />,
      color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    },
  ];

  const experience = [
    {
      period: "2023 - Present",
      title: "Freelance Graphics Designer",
      description:
        "Creating visual content for branding, social media, and digital design projects.",
    },
    {
      period: "2021 - 2023",
      title: "Self-Taught Designer & Editor",
      description:
        "Learned through YouTube tutorials and hands-on practice with various design tools.",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Simple Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto mt-3" />
        </div>

        {/* Bio - Clean and simple */}
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-2xl mx-auto">
          As a passionate graphics designer and visual artist, I specialize in
          creating captivating visual experiences that blend creativity with
          functionality. I combine formal education with self-taught skills from
          YouTube tutorials and hands-on practice.
        </p>

        {/* Soft Skills */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge
                key={skill.name}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium border-0 ${skill.color}`}
              >
                {skill.icon}
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Experience Only */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Experience
            </h3>
          </div>

          <div className="space-y-4">
            {experience.map((exp, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                <h4 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
                  {exp.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
