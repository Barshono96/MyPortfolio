import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-r from-background via-background/95 to-background relative">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)] dark:bg-grid-white/5"></div>
      <div className="container py-8 relative z-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-muted-foreground/70">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/Barshono96"
              target="_blank"
              className="rounded-full bg-background/80 p-2 text-muted-foreground hover:text-primary hover:bg-background/90 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/shifaeta-kadari-barshon"
              target="_blank"
              className="rounded-full bg-background/80 p-2 text-muted-foreground hover:text-primary hover:bg-background/90 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
