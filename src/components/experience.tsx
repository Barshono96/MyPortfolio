"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Project Code",
    location: "House 90, Road 104, Gulshan 2, Dhaka 1212",
    period: "May 2024 - Present",
    description: [
      "Successfully completed an intensive 12-week immersive bootcamp in full-stack development, in collaboration with Codeworks, Europe's best coding bootcamp.",
      "Currently working as a developer, applying expertise in modern web technologies including JavaScript, React, Node.js, Express, MongoDB, and Git.",
      "Contribute to production-level applications while collaborating in an agile development environment.",
      "Implement responsive, user-friendly interfaces and robust backend solutions for diverse client projects.",
      "Leverage strong software engineering foundations to deliver scalable, maintainable code following industry best practices.",
    ],
  },
  {
    title: "Jr. Database and Data Analyst",
    company: "Skybus BD Ltd",
    location:
      "Sister concern of Universal Perfumes and Cosmetics, House-21, Road-5, Sector-11, Uttara",
    period: "February 2023 - April 2024",
    description: [
      "Performed database updates, ensuring data accuracy, and developed tools to validate functionality.",
      "Identified and reported bugs, and conducted data entry and analysis to support business decisions.",
    ],
  },
];

export function Experience() {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [cardsPerView, setCardsPerView] = React.useState(1);

  // Update cards per view based on screen size
  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1200) {
        setCardsPerView(1); // Show 1 card on larger screens for full detail view
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

  const totalSlides = Math.ceil(experiences.length / cardsPerView);

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
    <section id="experience" className="container py-24 relative">
      <div className="text-center relative z-10 max-w-3xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          My <span className="gradient-text">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mt-4"
        >
          Professional journey and work history
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
          }}
        >
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="w-full min-w-full flex-shrink-0 snap-center px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:border-primary/30 h-full"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl p-6 border border-border/30 h-full">
                      <div className="mb-5">
                        <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg inline-flex shadow-md mb-4">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center mb-4 text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-primary/70" />
                          <span className="font-medium">
                            {experience.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-lg mb-1">
                          {experience.company}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30 h-full">
                      <h4 className="text-md font-semibold mb-4 text-foreground/80 pb-2 border-b border-border/30">
                        Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            className="pl-4 border-l-2 border-primary/30 flex items-start"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 -ml-5.5 mr-2.5"></div>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
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
          aria-label="Previous experience"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 p-3 md:p-4 rounded-full bg-background/80 border border-border backdrop-blur-sm text-primary hover:bg-primary/20 transition-colors"
          aria-label="Next experience"
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
                  ? "bg-primary w-6" // Make active indicator wider
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
