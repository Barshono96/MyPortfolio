"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Workflow,
  Layers,
  Wrench,
  MessageSquare,
} from "lucide-react";

// Organize skills by category
const skillCategories = [
  {
    name: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["JavaScript", "TypeScript", "C/C++", "HTML/CSS", "PHP"],
  },
  {
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["SQL (PostgreSQL)", "NoSQL (MongoDB)"],
  },
  {
    name: "Frameworks",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Chakra UI",
      "ShadCN UI",
    ],
  },
  {
    name: "Developer Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["GitHub", "LaTeX", "VS Code", "Trello", "Postman", "LoadRunner"],
  },
  {
    name: "State Management",
    icon: <Workflow className="h-5 w-5" />,
    skills: ["Redux", "Redux Toolkit"],
  },
  {
    name: "Communication",
    icon: <MessageSquare className="h-5 w-5" />,
    skills: ["Microsoft Teams", "Trello", "Jira"],
  },
];

// Alternate colors for categories
const categoryColors = [
  "gradient-bg-1",
  "gradient-bg-2",
  "bg-primary/10 border-primary/30",
  "bg-accent/10 border-accent/30",
  "bg-secondary/10 border-secondary/30",
  "bg-destructive/10 border-destructive/30",
];

export function Skills() {
  return (
    <section id="skills" className="container py-24 relative">
      <div className="text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-lg text-muted-foreground backdrop-blur-sm bg-background/20 rounded-lg p-4 inline-block"
        >
          I've worked with a range of technologies in the web development world,
          from front-end to back-end and everything in between.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {skillCategories.map((category, i) => {
          const colorIndex = i % categoryColors.length;
          const textColorClass =
            colorIndex <= 1
              ? "text-white"
              : colorIndex === 2
              ? "text-primary"
              : colorIndex === 3
              ? "text-accent"
              : colorIndex === 4
              ? "text-secondary"
              : "text-destructive";

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
              className={`rounded-lg ${
                colorIndex <= 1
                  ? categoryColors[colorIndex]
                  : `border ${categoryColors[colorIndex]}`
              } p-6 backdrop-blur-sm shadow-md transition-all hover:shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-md ${
                    colorIndex <= 1
                      ? "bg-white/20"
                      : colorIndex === 2
                      ? "bg-primary/20"
                      : colorIndex === 3
                      ? "bg-accent/20"
                      : colorIndex === 4
                      ? "bg-secondary/20"
                      : "bg-destructive/20"
                  }`}
                >
                  <span className={textColorClass}>{category.icon}</span>
                </div>
                <h3 className={`text-lg font-semibold ${textColorClass}`}>
                  {category.name}
                </h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, j) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * j + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${
                        colorIndex <= 1
                          ? "bg-white"
                          : colorIndex === 2
                          ? "bg-primary"
                          : colorIndex === 3
                          ? "bg-accent"
                          : colorIndex === 4
                          ? "bg-secondary"
                          : "bg-destructive"
                      }`}
                    />
                    <span
                      className={`${
                        colorIndex <= 1
                          ? "text-white/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
