"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import React from "react";

const navItems = [
  { name: "Home", href: "/", sectionId: "hero" },
  { name: "Skills", href: "/#skills", sectionId: "skills" },
  { name: "Experience", href: "/#experience", sectionId: "experience" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navbar() {
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

  // Function to handle smooth scrolling for skills section when on home page
  const handleNavClick = (e: any, href: string) => {
    // Only handle links with hash for section scrolling
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.split("#")[1];
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden">
            <Image
              src="/images/logo.svg"
              alt="Portfolio Logo"
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>
          <span className="text-xl font-bold gradient-text hidden sm:inline-block">
            Portfolio
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-1">
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
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative block px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 z-[-1] rounded-md animated-gradient opacity-90"
                        layoutId="navbar-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/files/Shifaeta_Kadari_Personal__CV.pdf"
            download="Shifaeta_Kadari_CV.pdf"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FileText className="h-4 w-4" />
            Download CV
          </a>

          <Link
            href="/about"
            className="hidden rounded-full gradient-bg-1 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity md:block"
          >
            Let's Talk
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
