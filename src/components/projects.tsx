"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "PlayTomic - Sports Booking App",
    description: [
      "Developed a sports booking app enabling players to create, book, update, and manage club and court information, improving booking efficiency.",
      "Implemented full-stack features using Node.js, React, TypeScript, Express, and PostgreSQL.",
      "Created responsive UI components and implemented real-time updates for booking management.",
    ],
    tech: ["Node.js", "React", "TypeScript", "Express", "PostgreSQL"],
    frontendLink: "https://github.com/Barshono96/Playtomic_FrontendPart",
    backendLink: "https://github.com/Barshono96/Playtomic_Backend",
  },
  {
    title: "BlainClothApp",
    description: [
      "Developed the backend using Node.js, NestJS, Prisma ORM, and PostgreSQL.",
      "Integrated AI with a weather API to recommend outfits based on occasion, location, and temperature.",
      "Built social features for sharing and engagement within the app.",
    ],
    tech: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "AI/ML"],
    backendLink: "https://github.com/backbencherstudio/Blain_clothApp",
  },
  {
    title: "TopProczar",
    description: [
      "Contributed to the backend of a business management platform using Node.js, NestJS, Prisma ORM, and PostgreSQL.",
      "Developed modules for eCommerce, CRM, HRM, POS, and Accounting to provide an all-in-one operational solution.",
    ],
    tech: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "eCommerce"],
    backendLink: "https://github.com/backbencherstudio/toppro_server",
  },
  {
    title: "Finance Tracker",
    description: [
      "Built a web app for tracking monthly finances with full CRUD functionality for income and expenses.",
      "Implemented user-friendly interface using Chakra UI and Redux for state management.",
      "Developed features for budget overview and financial management using Next.js and TypeScript.",
    ],
    tech: ["Next.js", "TypeScript", "Chakra UI", "Redux", "JSON Server"],
    frontendLink: "https://github.com/Barshono96/Finance-tracker-fina-",
  },
  {
    title: "Travel Itinerary Planner",
    description: [
      "Built a responsive travel planner app with interactive maps and trip management features.",
      "Implemented simulated authentication, itinerary management, and budget tracking.",
      "Developed features for trip summaries and PDF export using local storage and JSON server.",
    ],
    tech: ["Next.js", "TypeScript", "Redux", "Leaflet"],
    frontendLink: "https://github.com/Barshono96/Travel-Planner",
  },
  {
    title: "Employee Management System",
    description: [
      "Developed a comprehensive web application for efficient employee record management.",
      "Implemented authentication, CRUD functionalities, and form validation.",
      "Created responsive UI with sidebar and navbar using Tailwind CSS and ShadCN UI.",
    ],
    tech: ["Next.js", "TypeScript", "Redux", "Tailwind CSS", "ShadCN UI"],
    frontendLink: "https://github.com/Barshono96/Employee-Management-App",
  },
  {
    title: "Quiz Platform",
    description: [
      "Built a dynamic and interactive quiz platform for teachers and students.",
      "Implemented features for exam creation, question management, and time control.",
      "Developed student participation monitoring and automatic answer submission.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    frontendLink: "https://github.com/Barshono96/Quiz-app",
  },
];

export function Projects() {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [cardsPerView, setCardsPerView] = React.useState(1);

  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1200) {
        setCardsPerView(1);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(projects.length / cardsPerView);

  const goToSlide = (index: number) => {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }
    setActiveIndex(index);

    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * index;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const slideWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / slideWidth);

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  React.useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);
      return () => carouselElement.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  return (
    <section id="projects" className="container py-24 relative">
      <div className="text-center relative z-10 max-w-3xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mt-4"
        >
          Showcasing my development work and technical expertise
        </motion.p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full min-w-full flex-shrink-0 snap-center px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all hover:border-primary/30 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Section */}
                  <div className="md:w-1/3">
                    <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-border/30 h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
                        <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl inline-flex shadow-md mb-4">
                          <Github className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {project.title}
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col gap-3">
                          <a
                            href={project.frontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-xl"
                          >
                            <Github className="h-4 w-4" />
                            {project.title === "PlayTomic - Sports Booking App"
                              ? "Frontend Repository"
                              : "GitHub Repository"}
                          </a>
                          {project.backendLink && (
                            <a
                              href={project.backendLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-xl"
                            >
                              <Github className="h-4 w-4" />
                              Backend Repository
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="md:w-2/3">
                    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-border/30 h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
                        <h4 className="text-lg font-semibold mb-6 text-foreground/90 pb-2 border-b border-primary/20">
                          Project Details
                        </h4>

                        <ul className="space-y-4">
                          {project.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 * i }}
                              viewport={{ once: true }}
                              className="pl-4 border-l-2 border-primary/30 flex items-start group/item"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 -ml-5.5 mr-2.5 group-hover/item:scale-150 transition-transform" />
                              <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                                {item}
                              </p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => goToSlide(activeIndex - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 p-3 md:p-4 rounded-full bg-background/80 border border-border backdrop-blur-sm text-primary hover:bg-primary/20 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 p-3 md:p-4 rounded-full bg-background/80 border border-border backdrop-blur-sm text-primary hover:bg-primary/20 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-primary w-6"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
