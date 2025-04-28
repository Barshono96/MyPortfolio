"use client";

import { motion } from "framer-motion";
import { GearBackground } from "@/components/gear-background";

export default function AboutPage() {
  return (
    <div className="relative">
      <GearBackground />
      <div className="container py-24">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold md:text-5xl text-white"
          >
            About <span className="gradient-text">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-white/80 md:text-lg backdrop-blur-md bg-background/30 rounded-lg p-4 border border-white/10"
          >
            Learn more about my journey, experience, and the person behind the
            code.
          </motion.p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white">My Story</h2>
            <div className="space-y-4 text-white/80 backdrop-blur-md bg-background/30 rounded-lg p-6 border border-white/10 shadow-xl">
              <p>
                Hi there! I'm Shifaeta Kadari, an innovative software engineer
                graduated in CSE from United International University.
              </p>
              <p>
                My journey into web development began during university when I
                built my first website. What started as a curiosity quickly
                evolved into a passion, and I've been honing my skills ever
                since.
              </p>
              <p>
                I'm constantly learning and exploring new technologies to stay
                at the forefront of web development. I believe in writing clean,
                maintainable code and creating intuitive user experiences.
              </p>
              <p>
                I'm proficient in various programming languages and frameworks
                including JavaScript, TypeScript, React, Next.js, Node.js, and
                more.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-white">Experience</h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-md p-6 shadow-xl"
              >
                <div className="mb-3 flex justify-between">
                  <h3 className="font-bold text-white">Full-Stack Developer</h3>
                  <span className="text-sm text-white/70">
                    May 2024 - Present
                  </span>
                </div>
                <p className="mb-2 text-sm text-white/90">Project Code</p>
                <p className="text-xs text-white/70 mb-3">
                  House 90, Road 104, Gulshan 2, Dhaka 1212
                </p>
                <ul className="text-sm text-white/80 space-y-2 pl-4">
                  <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                    Successfully completed an intensive 12-week immersive
                    bootcamp in full-stack development.
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                    Apply expertise in modern web technologies including
                    JavaScript, React, Node.js, Express, MongoDB, and Git.
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                    Implement responsive, user-friendly interfaces and robust
                    backend solutions.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-md p-6 shadow-xl"
              >
                <div className="mb-3 flex justify-between">
                  <h3 className="font-bold text-white">
                    Jr. Database and Data Analyst
                  </h3>
                  <span className="text-sm text-white/70">
                    February 2023 - April 2024
                  </span>
                </div>
                <p className="mb-2 text-sm text-white/90">Skybus BD Ltd</p>
                <p className="text-xs text-white/70 mb-3">
                  Sister concern of Universal Perfumes and Cosmetics, Uttara
                </p>
                <ul className="text-sm text-white/80 space-y-2 pl-4">
                  <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                    Performed database updates, ensuring data accuracy, and
                    developed tools to validate functionality.
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                    Identified and reported bugs, and conducted data entry and
                    analysis to support business decisions.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-md p-6 shadow-xl"
            >
              <div className="mb-3 flex justify-between">
                <h3 className="font-bold text-white">
                  Bachelor of Computer Science & Engineering
                </h3>
                <span className="text-sm text-white/70">2018 - 2022</span>
              </div>
              <p className="text-sm text-white/80 mb-2">
                United International University
              </p>
              <ul className="text-xs text-white/70 space-y-2 pl-4">
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Graduated with honors, achieving a CGPA of 3.75/4.0
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Specialized in Software Engineering and Web Technologies
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Capstone Project: Developed a full-stack e-commerce platform
                  with React and Node.js
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Participated in ACM programming competitions and hackathons
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-md p-6 shadow-xl"
            >
              <div className="mb-3 flex justify-between">
                <h3 className="font-bold text-white">
                  Full-Stack Development Bootcamp
                </h3>
                <span className="text-sm text-white/70">2024</span>
              </div>
              <p className="text-sm text-white/80 mb-2">
                Project Code (with Codeworks)
              </p>
              <ul className="text-xs text-white/70 space-y-2 pl-4">
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Completed intensive 600+ hour immersive program in 12 weeks
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Mastered modern web stack: JavaScript/TypeScript, React,
                  Redux, Node.js, Express, MongoDB
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Built 5+ production-grade applications including e-commerce,
                  social media, and data visualization projects
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Trained in agile methodologies, test-driven development, and
                  CI/CD practices
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
