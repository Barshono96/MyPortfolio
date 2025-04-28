"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="container py-24 md:py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center relative z-10"
      >
        <div className="relative mb-6 flex h-32 w-32 items-center justify-center">
          <div className="absolute inset-0 rounded-full animated-gradient opacity-80 blur-xl" />
          <div className="relative h-24 w-24 overflow-hidden rounded-full gradient-bg-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-16 w-16"
            >
              <Image
                src="/images/logo.svg"
                alt="Portfolio Logo"
                fill
                className="object-contain"
                sizes="64px"
              />
            </motion.div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-3xl font-bold leading-tight md:text-5xl"
        >
          <span className="gradient-text">Hi, I'm Shifaeta Kadari.</span>{" "}
          <br className="hidden md:block" />
          Innovative Software Engineer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 max-w-2xl text-muted-foreground md:text-lg backdrop-blur-sm bg-background/20 rounded-lg p-4"
        >
          Graduated in CSE from United International University. I build
          interactive and responsive web applications using modern frameworks
          and technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/#projects"
            className="group flex items-center gap-2 rounded-full gradient-bg-1 px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            View My Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex gap-4">
            <Link
              href="https://github.com/Barshono96"
              target="_blank"
              className="rounded-full gradient-bg-2 p-3 text-white hover:opacity-90 transition-opacity"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="rounded-full bg-primary p-3 text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/in/shifaeta-kadari-barshon"
              target="_blank"
              className="rounded-full bg-accent p-3 text-accent-foreground hover:opacity-90 transition-opacity"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
