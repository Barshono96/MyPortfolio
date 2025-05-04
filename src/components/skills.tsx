"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Workflow,
  Layers,
  Wrench,
  MessageSquare,
  FileCode,
  FileText,
  Globe,
  Server,
  Box,
  GitBranch,
  FileType,
  Code2,
  Terminal,
  Bug,
  Users,
  MessageCircle,
  Calendar,
} from "lucide-react";

// Organize skills by category
const skillCategories = [
  {
    name: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "JavaScript", icon: <FileCode className="h-4 w-4" /> },
      { name: "TypeScript", icon: <FileType className="h-4 w-4" /> },
      { name: "C/C++", icon: <Code2 className="h-4 w-4" /> },
      { name: "HTML/CSS", icon: <Globe className="h-4 w-4" /> },
      { name: "PHP", icon: <Server className="h-4 w-4" /> },
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "SQL (PostgreSQL)", icon: <Database className="h-4 w-4" /> },
      { name: "NoSQL (MongoDB)", icon: <Box className="h-4 w-4" /> },
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Frameworks",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      { name: "React", icon: <Code className="h-4 w-4" /> },
      { name: "Next.js", icon: <FileCode className="h-4 w-4" /> },
      { name: "Node.js", icon: <Server className="h-4 w-4" /> },
      { name: "Express", icon: <Workflow className="h-4 w-4" /> },
      { name: "Chakra UI", icon: <Layers className="h-4 w-4" /> },
      { name: "ShadCN UI", icon: <Layers className="h-4 w-4" /> },
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Developer Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "GitHub", icon: <GitBranch className="h-4 w-4" /> },
      { name: "LaTeX", icon: <FileText className="h-4 w-4" /> },
      { name: "VS Code", icon: <Code className="h-4 w-4" /> },
      { name: "Trello", icon: <Calendar className="h-4 w-4" /> },
      { name: "Postman", icon: <Server className="h-4 w-4" /> },
      { name: "LoadRunner", icon: <Bug className="h-4 w-4" /> },
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "State Management",
    icon: <Workflow className="h-5 w-5" />,
    skills: [
      { name: "Redux", icon: <Workflow className="h-4 w-4" /> },
      { name: "Redux Toolkit", icon: <Workflow className="h-4 w-4" /> },
    ],
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    name: "Communication",
    icon: <MessageSquare className="h-5 w-5" />,
    skills: [
      { name: "Microsoft Teams", icon: <Users className="h-4 w-4" /> },
      { name: "Trello", icon: <Calendar className="h-4 w-4" /> },
      { name: "Jira", icon: <MessageCircle className="h-4 w-4" /> },
    ],
    gradient: "from-indigo-500/20 to-violet-500/20",
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl hover:border-primary/30"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-2 rounded-lg bg-primary/10 text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {category.skills.map((skill, j) => (
                      <motion.tr
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * j + 0.2 }}
                        viewport={{ once: true }}
                        className="group-hover:translate-x-1 duration-300"
                      >
                        <td className="py-2">
                          <div className="flex items-center gap-2">
                            <motion.div
                              className="h-1.5 w-1.5 rounded-full bg-primary/50"
                              whileHover={{ scale: 1.5 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            />
                            <span className="text-primary/70">
                              {skill.icon}
                            </span>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
