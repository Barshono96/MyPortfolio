"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/images/project-1.png",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
    image: "/images/project-2.png",
    tags: ["React", "Firebase", "Tailwind CSS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
    image: "/images/project-3.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-24 relative">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 mx-auto max-w-xl text-muted-foreground"
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm shadow-sm transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute inset-0 bg-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-white/80 font-bold">
                {project.title.split(" ")[0]}
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <Link
                  href={project.links.github}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Source
                </Link>
                <Link
                  href={project.links.demo}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
