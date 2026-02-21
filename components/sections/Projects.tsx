"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Sparkles,
  ExternalLink,
  Youtube,
  Instagram,
  Video,
  Palette,
  Film,
  Printer,
  Briefcase,
  Menu,
} from "lucide-react";

// Define TypeScript interfaces
interface Project {
  id: number;
  title: string;
  category: "branding" | "motion" | "print" | "video";
  image: string;
  tags: string[];
  videoLinks?: {
    youtube?: string;
    instagram?: string;
    tiktok?: string;
  };
  description?: string;
}

interface Category {
  id: "all" | "branding" | "motion" | "print" | "video";
  name: string;
  icon: React.ElementType;
}

// Project data from your public/project folder
const projects: Project[] = [
  // Branding Projects
  {
    id: 1,
    title: "Asterio Brand Identity",
    category: "branding",
    image: "/project/asterio.jpg",
    tags: ["branding", "logo design", "identity"],
    description:
      "Complete brand identity design including logo, color palette, and typography.",
  },
  {
    id: 4,
    title: "EKF Visuals",
    category: "branding",
    image: "/project/ekf.jpg",
    tags: ["branding", "packaging", "identity"],
    description: "Brand packaging and visual identity system.",
  },

  // Motion Graphics Projects
  {
    id: 7,
    title: "Hywet Productions",
    category: "motion",
    image: "/project/hywet.jpg",
    tags: ["motion graphics", "animation", "2d"],
    description: "Motion graphics piece with dynamic animations.",
  },
  {
    id: 9,
    title: "Lije Creations",
    category: "motion",
    image: "/project/lije.jpg",
    tags: ["motion graphics", "animation", "3d"],
    description: "3D animation and motion design project.",
  },

  // Print Projects
  {
    id: 2,
    title: "Brush Collection",
    category: "print",
    image: "/project/brush.jpg",
    tags: ["print", "illustration", "editorial"],
    description: "Editorial design and illustration for print publication.",
  },
  {
    id: 3,
    title: "Efoy Creative",
    category: "print",
    image: "/project/efoy.jpg",
    tags: ["print", "poster", "typography"],
    description: "Poster design series with experimental typography.",
  },
  {
    id: 5,
    title: "Geta Design",
    category: "print",
    image: "/project/geta.jpg",
    tags: ["print", "illustration", "character"],
    description: "Character illustrations for print media.",
  },
  {
    id: 6,
    title: "Geta2 Series",
    category: "print",
    image: "/project/geta2.jpg",
    tags: ["print", "digital art", "concept"],
    description: "Digital art series for print reproduction.",
  },
  {
    id: 10,
    title: "Mablue Design",
    category: "print",
    image: "/project/mablue.jpg",
    tags: ["ui design", "web design", "digital"],
    description: "UI/Web design concepts for digital platforms.",
  },

  // Video Projects (with social links)
  {
    id: 8,
    title: "Lada Visuals",
    category: "video",
    image: "/project/lada.jpg",
    tags: ["video edit", "color grading", "commercial"],
    description: "Commercial video edit with advanced color grading.",
    videoLinks: {
      youtube: "https://youtube.com/watch?v=example1",
      instagram: "https://instagram.com/p/example1",
    },
  },
  {
    id: 11,
    title: "Wyyt Productions",
    category: "video",
    image: "/project/wyyt.jpg",
    tags: ["video edit", "post-production", "music video"],
    description: "Music video production with post-production effects.",
    videoLinks: {
      youtube: "https://youtube.com/watch?v=example2",
      instagram: "https://instagram.com/reel/example2",
      tiktok: "https://tiktok.com/@user/video/example2",
    },
  },
];

// Categories with icons - Clean and minimal
const categories: Category[] = [
  { id: "all", name: "All", icon: Briefcase },
  { id: "branding", name: "Branding", icon: Palette },
  { id: "motion", name: "Motion", icon: Film },
  { id: "print", name: "Print", icon: Printer },
  { id: "video", name: "Video", icon: Video },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "branding" | "motion" | "print" | "video"
  >("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Filter projects based on category and search
  const filteredProjects: Project[] = useMemo(() => {
    return projects.filter((project: Project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag: string) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openProjectModal = (project: Project): void => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = (): void => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Restore body scrolling
    document.body.style.overflow = "unset";
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "branding":
        return "text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400";
      case "motion":
        return "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400";
      case "print":
        return "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-400";
      case "video":
        return "text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-400";
      default:
        return "text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
            Creative Portfolio
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto px-4">
            A collection of design and motion projects
          </p>
        </motion.div>

        {/* Filter Bar - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 sm:mb-16 space-y-6 sm:space-y-8"
        >
          {/* Search Input - Mobile Optimized */}
          <div className="relative max-w-xs mx-auto px-4 sm:px-0">
            <Search className="absolute left-7 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="w-full pl-10 pr-8 py-2.5 sm:py-2 bg-transparent border-b border-gray-200 dark:border-gray-800 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 sm:right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle */}
          <div className="sm:hidden px-4">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Filter by category
              </span>
              <Menu className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Category Filters - Desktop */}
          <div className="hidden sm:flex flex-wrap justify-center gap-6 lg:gap-8">
            {categories.map((category: Category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-sm font-medium transition-all duration-200 pb-1 border-b-2 ${
                    isActive
                      ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                      : "border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Category Filters - Dropdown */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="sm:hidden overflow-hidden px-4"
              >
                <div className="py-2 space-y-1">
                  {categories.map((category: Category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                          isActive
                            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                        {isActive && (
                          <span className="ml-auto text-xs text-gray-500">
                            Active
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count - Mobile Optimized */}
          <div className="text-center text-xs sm:text-sm text-gray-400 dark:text-gray-500 px-4 sm:px-0">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"} found
          </div>
        </motion.div>

        {/* Projects Grid - Smaller Cards with Mobile Optimization */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0"
        >
          <AnimatePresence>
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="space-y-2 sm:space-y-3">
                  {/* Image Container - Smaller */}
                  <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Minimal Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />

                    {/* Category Badge - Mobile Optimized */}
                    <span
                      className={`absolute top-2 right-2 text-[8px] sm:text-[10px] uppercase tracking-wider ${getCategoryColor(project.category)} px-1.5 sm:px-2 py-0.5 rounded-sm sm:rounded`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info - Compact */}
                  <div className="space-y-0.5 sm:space-y-1.5 px-0.5 sm:px-0">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                      {project.tags.slice(0, 2).join(" · ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State - Mobile Optimized */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 sm:py-32 px-4"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 dark:bg-gray-900 rounded-full mb-4">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </div>
            <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-1">
              No projects found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal - Enhanced Mobile First */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="relative w-full sm:max-w-2xl lg:max-w-4xl bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[92vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Drag Handle for Mobile - Visual indicator that you can swipe down */}
              <div className="sm:hidden w-full flex justify-center pt-2 pb-1">
                <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
              </div>

              {/* Close Button - Mobile Optimized */}
              <button
                onClick={closeProjectModal}
                className="absolute top-3 right-3 z-20 p-2.5 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full transition-colors shadow-md backdrop-blur-sm"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Scrollable Content Container */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {/* Image Section */}
                <div className="relative w-full h-[35vh] sm:h-[45vh] lg:h-[50vh] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    priority
                  />

                  {/* Category Badge - Moved inside image for mobile */}
                  <div className="absolute top-3 left-3 sm:hidden">
                    <span
                      className={`inline-block text-[10px] font-medium uppercase tracking-wider ${getCategoryColor(selectedProject.category)} px-3 py-1 rounded-full shadow-sm`}
                    >
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6">
                  {/* Header - Hidden category on mobile since it's in image */}
                  <div className="space-y-1 sm:space-y-2">
                    <span
                      className={`hidden sm:inline-block text-xs uppercase tracking-wider ${getCategoryColor(selectedProject.category)} px-2 py-0.5 rounded`}
                    >
                      {selectedProject.category}
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 dark:text-white pr-8">
                      {selectedProject.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.description ||
                        "A carefully crafted project that demonstrates creative expertise and attention to detail."}
                    </p>
                  </div>

                  {/* Tags - Horizontal scroll on mobile */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Tags
                    </h4>
                    <div className="flex flex-nowrap sm:flex-wrap gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                      {selectedProject.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="flex-shrink-0 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video Links - Mobile Optimized */}
                  {selectedProject.category === "video" &&
                    selectedProject.videoLinks && (
                      <div className="space-y-3 pt-2 sm:pt-4 border-t border-gray-100 dark:border-gray-800">
                        <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Watch on
                        </h4>
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                          {selectedProject.videoLinks.youtube && (
                            <a
                              href={selectedProject.videoLinks.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2.5 sm:px-4 sm:py-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="text-xs sm:text-sm font-medium">
                                YouTube
                              </span>
                              <ExternalLink className="w-3 h-3 ml-auto sm:ml-1 opacity-70" />
                            </a>
                          )}
                          {selectedProject.videoLinks.instagram && (
                            <a
                              href={selectedProject.videoLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2.5 sm:px-4 sm:py-2 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-pink-600 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="text-xs sm:text-sm font-medium">
                                Instagram
                              </span>
                              <ExternalLink className="w-3 h-3 ml-auto sm:ml-1 opacity-70" />
                            </a>
                          )}
                          {selectedProject.videoLinks.tiktok && (
                            <a
                              href={selectedProject.videoLinks.tiktok}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2.5 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="text-xs sm:text-sm font-medium">
                                TikTok
                              </span>
                              <ExternalLink className="w-3 h-3 ml-auto sm:ml-1 opacity-70" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                  {/* Project Meta - Optional additional info */}
                  <div className="pt-2 text-center sm:text-left">
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Click outside or swipe down to close
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
