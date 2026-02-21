"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Camera,
  Palette,
  Video,
  Sparkles,
  Heart,
  Youtube,
  PlayCircle,
  Clock,
  Target,
  TrendingUp,
  Lightbulb,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function About() {
  // YouTube learning resources (you can customize these)
  const learningResources = [
    {
      platform: "YouTube",
      channel: "Ben Marriott",
      topic: "Motion Graphics",
      lessons: "50+ tutorials",
      icon: PlayCircle,
    },
    {
      platform: "YouTube",
      channel: "Justin Odisho",
      topic: "Adobe Suite",
      lessons: "100+ tutorials",
      icon: PlayCircle,
    },
    {
      platform: "YouTube",
      channel: "Video Copilot",
      topic: "After Effects",
      lessons: "30+ tutorials",
      icon: PlayCircle,
    },
    {
      platform: "YouTube",
      channel: "The Futur",
      topic: "Design Principles",
      lessons: "80+ videos",
      icon: PlayCircle,
    },
  ];

  // Skills I'm learning/teaching myself
  const skillsInProgress = [
    {
      name: "Adobe Photoshop",
      progress: 75,
      icon: Palette,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Premiere Pro",
      progress: 70,
      icon: Video,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "After Effects",
      progress: 50,
      icon: Camera,
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Illustrator",
      progress: 65,
      icon: Layers,
      color: "from-orange-500 to-orange-600",
    },
  ];

  // Stats about learning journey
  const learningStats = [
    { label: "YouTube Hours", value: "500+", icon: Youtube },
    { label: "Tutorials Watched", value: "200+", icon: PlayCircle },
    { label: "Practice Hours", value: "300+", icon: Clock },
    { label: "Projects Started", value: "25+", icon: Target },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section - Mobile First */}
      <section className="relative px-4 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Creative Background */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Learning Through
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Curiosity & Practice
              </span>
            </h1>

            {/* Personal Story */}
            <div className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              <p>
                I'm currently studying{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Video Editing at Debre Markos University
                </span>
                , but most of my skills come from countless hours of
                self-learning through YouTube tutorials and hands-on practice.
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Every tutorial watched, every project attempted, and every
                mistake made has shaped my creative journey.
              </p>
            </div>

            {/* YouTube Learning Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {learningStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 mb-2">
                      <Icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* University & Self-Learning Section */}
      <section className="px-4 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - University */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Formal Education
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Debre Markos University
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  <span>Bachelor's in Video Editing (In Progress)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  <span>2024 - Present</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  <span>
                    Learning film theory, editing techniques, and production
                    workflows
                  </span>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-6">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-gray-400">
                    Program Progress
                  </span>
                  <span className="font-medium text-purple-600 dark:text-purple-400">
                    Year 1/4
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "25%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Self Learning */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    YouTube University
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Self-Taught Journey
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  My classroom has been YouTube, and my teachers are amazing
                  creators who share their knowledge for free.
                </p>

                {/* Learning resources */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {learningResources.map((resource, index) => {
                    const Icon = resource.icon;
                    return (
                      <div
                        key={resource.channel}
                        className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-red-500" />
                          <span className="text-xs font-medium text-gray-900 dark:text-white">
                            {resource.channel}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {resource.topic} • {resource.lessons}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills in Progress Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Skills in Progress</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I'm Learning Now
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Every day is a school day. Here's what I'm currently mastering
            </p>
          </motion.div>

          <div className="space-y-4">
            {skillsInProgress.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10 flex items-center justify-center`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                      {skill.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    Self-learning through tutorials and practice
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <Lightbulb className="w-10 h-10 mb-4 opacity-75" />
            <h3 className="text-xl font-bold mb-3">My Learning Philosophy</h3>
            <p className="text-sm sm:text-base text-purple-100 mb-4">
              "I believe the best education is free and driven by curiosity.
              While my university provides structure, YouTube and self-practice
              give me the freedom to explore what truly excites me. Every
              tutorial watched and every project attempted brings me one step
              closer to mastery."
            </p>
            <div className="flex items-center gap-2 text-xs text-purple-200">
              <Heart className="w-3 h-3" />
              <span>Currently learning: After Effects & Motion Graphics</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action - Collaborate */}
      <section className="px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Want to learn together or collaborate?
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            I'm always excited to connect with fellow learners and creators
          </p>
          <Link
            href="/contact-me"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Let's Connect
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
