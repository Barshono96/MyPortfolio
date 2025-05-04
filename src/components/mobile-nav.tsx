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
        className="flex items-center justify-center p-2 rounded-full text-foreground hover:bg-transparent hover:border hover:border-cyan-400/30 hover:scale-110 transition-all duration-300"
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
            className="absolute left-0 right-0 top-16 z-50 bg-background/95 backdrop-blur-sm shadow-lg border-b border-border"
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
                        className={`block px-4 py-2.5 text-base font-medium rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-transparent border border-cyan-400/40 text-cyan-500 scale-105 shadow-sm backdrop-blur-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-transparent hover:border hover:border-cyan-400/30 hover:scale-105 hover:shadow-sm"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <a
                    href="/files/Shifaeta_Kadari_Personal__CV.pdf"
                    download="Shifaeta_Kadari_CV.pdf"
                    onClick={closeMenu}
                    className="block px-4 py-2.5 text-base font-medium text-muted-foreground hover:text-cyan-500 hover:bg-transparent hover:border hover:border-cyan-400/30 hover:scale-105 hover:shadow-sm rounded-full transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative h-5 w-5 overflow-hidden group-hover:rotate-6 transition-transform duration-300">
                        <Image
                          src="/images/logo.svg"
                          alt="Logo"
                          fill
                          className="object-contain"
                          sizes="20px"
                        />
                      </div>
                      Download CV
                    </div>
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="block px-4 py-2.5 text-base font-medium text-white bg-gradient-to-r from-sky-400 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 rounded-full transition-all duration-300"
                  >
                    Let's Talk
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
