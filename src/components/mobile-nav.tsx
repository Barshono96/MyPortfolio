"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", sectionId: "hero" },
  { name: "Skills", href: "/#skills", sectionId: "skills" },
  { name: "Experience", href: "/#experience", sectionId: "experience" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState("");
  // Get the base path from the environment or use empty string for development
  const basePath = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";

  // Listen for section change events from the ScrollSpy component
  React.useEffect(() => {
    if (pathname !== "/") return;

    // Function to handle section change events
    const handleSectionChange = (e: CustomEvent<{ section: string }>) => {
      setActiveSection(e.detail.section);
    };

    // Also check localStorage on initial load
    const storedSection = localStorage.getItem("activeSection");
    if (storedSection) {
      setActiveSection(storedSection);
    }

    // Add event listener with type assertion
    window.addEventListener(
      "sectionchange",
      handleSectionChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "sectionchange",
        handleSectionChange as EventListener
      );
    };
  }, [pathname]);

  // Add scroll event listener to close menu on scroll
  React.useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      closeMenu();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  // Function to handle smooth scrolling for section links
  const handleNavClick = (e: any, href: string) => {
    // Only handle links with hash for section scrolling
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      closeMenu();

      const sectionId = href.split("#")[1];
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 rounded-full bg-transparent border border-cyan-400/40 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.15)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-cyan-900/20 hover:border-cyan-400/60 hover:scale-110 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 animate-in zoom-in-50 duration-300" />
        ) : (
          <Menu className="h-6 w-6 animate-in zoom-in-50 duration-300" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-16 z-50 bg-gradient-to-b from-gray-900 to-gray-950 shadow-lg border-b border-border/60"
          >
            <nav className="container py-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive =
                    pathname !== "/"
                      ? pathname === item.href
                      : (item.sectionId && activeSection === item.sectionId) ||
                        (item.name === "Home" && activeSection === "");

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href);
                          if (!item.href.startsWith("/#")) {
                            closeMenu();
                          }
                        }}
                        className={`group relative block px-4 py-2.5 text-base font-medium rounded-full transition-all duration-300 overflow-hidden ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/70 to-indigo-500/70 border border-cyan-400/40 text-white shadow-md shadow-cyan-500/20 backdrop-blur-sm animate-pulse-slow"
                            : "text-foreground hover:text-cyan-300 hover:border hover:border-cyan-400/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:bg-cyan-900/20 hover:translate-x-1"
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {!isActive && (
                          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        )}
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 z-0"></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <a
                    href={`${basePath}/files/Shifaeta_Kadari_Personal__CV.pdf`}
                    download="Shifaeta_Kadari_CV.pdf"
                    onClick={closeMenu}
                    className="group block px-4 py-2.5 text-base font-medium bg-transparent border-2 border-cyan-400/40 text-cyan-300/90 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:bg-cyan-900/30 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative h-5 w-5 overflow-hidden group-hover:rotate-6 transition-transform duration-300">
                        <Image
                          src={`${basePath}/images/logo.svg`}
                          alt="Logo"
                          fill
                          className="object-contain"
                          sizes="20px"
                        />
                      </div>
                      <span className="relative">
                        Download CV
                        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-500 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                    </div>
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="group block px-4 py-2.5 text-base font-medium bg-transparent border-2 border-indigo-400/40 text-indigo-300/90 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:bg-indigo-900/30 hover:text-indigo-300 hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative">
                      Let's Talk About Me
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-indigo-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
