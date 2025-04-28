"use client";

import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { TechBackground } from "@/components/tech-background";
import React from "react";
import { useSearchParams } from "next/navigation";

// This is a client component that handles scroll highlighting
function ScrollSpy() {
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const navItems = [
      { name: "Home", href: "/", sectionId: "hero" },
      { name: "Skills", href: "/#skills", sectionId: "skills" },
      { name: "Experience", href: "/#experience", sectionId: "experience" },
      { name: "Projects", href: "/#projects", sectionId: "projects" },
      { name: "Contact", href: "/#contact", sectionId: "contact" },
    ];

    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash.substring(1);
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }

    const handleScroll = () => {
      const sections = navItems
        .map((item) => item.sectionId)
        .filter(Boolean)
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 200; // Offset for better highlighting

      let activeSection = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;

        if (section.offsetTop <= scrollPosition) {
          activeSection = section.id;
          break;
        }
      }

      // Store the active section in localStorage so navbar can access it
      localStorage.setItem("activeSection", activeSection);

      // Dispatch a custom event that the navbar can listen to
      window.dispatchEvent(
        new CustomEvent("sectionchange", {
          detail: { section: activeSection },
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}

export default function Home() {
  return (
    <main>
      <ScrollSpy />
      <TechBackground />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
