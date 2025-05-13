"use client";

import { motion } from "framer-motion";
import { GearBackground } from "@/components/gear-background";
import Image from "next/image";
import { User, Briefcase, GraduationCap, BookOpen, Award } from "lucide-react";

export default function AboutPage() {
  // Get the base path from the environment or use empty string for development
  const basePath = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";

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

        {/* My Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 justify-center text-center mb-8">
            <User className="h-6 w-6 text-cyan-400" />
            My Story
          </h2>
          <div className="text-white/80 backdrop-blur-md bg-background/30 rounded-lg p-6 border border-white/10 shadow-xl space-y-4">
            <p>
              Hi there! I'm Shifaeta Kadari, an innovative full-stack software
              developer with a degree in Computer Science and Engineering from
              United International University.
            </p>
            <p>
              My journey into web development began during my university days
              when I built my very first website. What started as simple
              curiosity soon blossomed into a true passion — and I've been
              crafting digital solutions ever since. Over the years, I've
              continuously honed my skills and expanded my knowledge to stay at
              the cutting edge of web technologies.
            </p>
            <p>
              I specialize in building robust, user-centric applications using
              technologies like JavaScript, TypeScript, React, Next.js, Node.js,
              and more. Whether it's front-end design or back-end logic, I
              believe in writing clean, maintainable code that delivers
              intuitive user experiences.
            </p>
            <p>
              But for me, software development is more than just code — it's
              about problem-solving and turning challenges into opportunities.
              I'm an energetic, solution-driven professional committed to
              creating meaningful and innovative software that makes a positive
              impact.
            </p>
            <p>
              My passion doesn't stop at work. I'm always exploring new
              technologies, tackling coding challenges, contributing to
              open-source projects, and keeping up with the latest in AI and web
              development through tech blogs and community forums.
            </p>
            <p>
              With a mindset rooted in continuous learning and collaboration, I
              strive to build solutions that are not only functional but also
              impactful.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 justify-center text-center mb-8">
            <Briefcase className="h-6 w-6 text-cyan-400" />
            Experience
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
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
                  Successfully completed an intensive 12-week immersive bootcamp
                  in full-stack development.
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

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 justify-center text-center mb-8">
            <GraduationCap className="h-6 w-6 text-cyan-400" />
            Education
          </h2>

          {/* University Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-md p-6 shadow-xl mb-6"
          >
            <div className="md:flex md:gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="relative w-full aspect-square md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src={`${basePath}/images/graduation.jpg`}
                    alt="Graduation Photo"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <p className="text-xs text-white/70 text-center italic mt-2">
                  My graduation ceremony at United International University
                </p>
              </div>

              <div className="md:w-2/3">
                <div className="mb-3 flex justify-between">
                  <h3 className="font-bold text-white">
                    Bachelor of Computer Science & Engineering
                  </h3>
                  <span className="text-sm text-white/70">2017 - 2022</span>
                </div>
                <div className="mb-4 relative">
                  <div className="inline-flex items-center justify-center">
                    <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text px-2">
                      United International University
                    </span>
                  </div>
                  <div className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                </div>

                <blockquote className="mb-4 pl-6 border-l-4 border-cyan-400 text-white bg-white/5 p-4 rounded-r-md shadow-[0_0_10px_rgba(34,211,238,0.2)] relative">
                  <span className="text-cyan-400 absolute top-1 left-2 text-3xl">
                    "
                  </span>
                  <p className="italic text-lg font-medium leading-relaxed">
                    These four years were some of the best of my life. I learned
                    so much, faced my share of challenges, but above all, I
                    cherished every moment and enjoyed the journey.
                  </p>
                  <span className="text-cyan-400 absolute bottom-1 right-2 text-3xl">
                    "
                  </span>
                </blockquote>

                <ul className="text-sm text-white/80 space-y-2 pl-4">
                  <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                    Coursework: Data Structure, Algorithms, AI, Database
                    Management, Simulation and Modeling, System Analysis and
                    Design, Project Management
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
              </div>
            </div>
          </motion.div>

          {/* Secondary Education */}
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-md p-6 shadow-xl"
            >
              <div className="mb-3 flex justify-between">
                <h3 className="font-bold text-white">
                  Higher Secondary Certificate (HSC)
                </h3>
                <span className="text-sm text-white/70">2016</span>
              </div>

              <div className="mb-4 relative">
                <div className="inline-flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text px-2">
                    Cantonment Public School And College, BUSMS, Parbatipur
                  </span>
                </div>
                <div className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>

              <ul className="text-xs text-white/70 space-y-2 pl-4">
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  I have completed my HSC from here in science group.
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Batch-16
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
                  Secondary School Certificate (SSC)
                </h3>
                <span className="text-sm text-white/70">2014</span>
              </div>
              <div className="mb-4 relative">
                <div className="inline-flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text px-2">
                    Cantonment Public School And College, BUSMS, Parbatipur
                  </span>
                </div>
                <div className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>
              <ul className="text-xs text-white/70 space-y-2 pl-4">
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  I have completed my SSC from here in science group.
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  Batch-14
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bootcamp Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 justify-center text-center mb-8">
            <BookOpen className="h-6 w-6 text-cyan-400" />
            Professional Training
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
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
            <ul className="text-sm text-white/80 space-y-2 pl-4">
              <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                Completed intensive 600+ hour immersive program in 12 weeks
              </li>
              <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                Mastered modern web stack: JavaScript/TypeScript, React,
                Next.js, Redux, Node.js, Express, MongoDB, Postgresql
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
        </motion.div>

        {/* Honors & Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 justify-center text-center mb-8">
            <Award className="h-6 w-6 text-cyan-400" />
            Honors & Awards
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-md p-6 shadow-xl"
            >
              <h3 className="font-bold text-white mb-4">
                Academic & Competition Achievements
              </h3>
              <ul className="text-sm text-white/80 space-y-4 pl-4">
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  <span className="font-medium text-white/90 block">
                    University Scholarship
                  </span>
                  Received 25% scholarship multiple times for academic
                  excellence
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  <span className="font-medium text-white/90 block">
                    Champion Team
                  </span>
                  3rd place in Microprocessor Lab project at UIU CSE Project
                  Show, 2019
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  <span className="font-medium text-white/90 block">
                    2nd Runner Up
                  </span>
                  3rd place at UIU Coders Combat (Intra University Programming
                  Contest), 2018
                </li>
              </ul>
            </motion.div>

            {/* Leadership & Volunteering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="rounded-lg border border-white/10 bg-background/30 backdrop-blur-md p-6 shadow-xl"
            >
              <h3 className="font-bold text-white mb-4">
                Leadership & Volunteering
              </h3>
              <ul className="text-sm text-white/80 space-y-4 pl-4">
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  <span className="font-medium text-white/90 block">
                    Booth Representative
                  </span>
                  Represented Ergo Ventures at UIU IT JOB FAIR, 2019, providing
                  information about the company and their recruitment system
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  <span className="font-medium text-white/90 block">
                    ICCIT Volunteer
                  </span>
                  Volunteered at International Conference on Computer and
                  Information Technology (ICCIT), 2018
                </li>
                <li className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-primary">
                  <span className="font-medium text-white/90 block">
                    Robocon Volunteer
                  </span>
                  Volunteered at Robocon (Robot Contest for Colleges) held at
                  United International University, 2018
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
