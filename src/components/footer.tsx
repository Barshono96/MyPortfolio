"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Facebook,
  Heart,
  Code,
  Star,
  Sparkles,
  MousePointer,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
const { useState, useRef, useEffect } = React;

// Define types for our particles
interface ExplosionParticleProps {
  x: number;
  y: number;
  color: string;
}

interface ParticleData {
  id: string;
  x: number;
  y: number;
  color: string;
}

// Simple animated floating dot
const FloatingDot = ({ className = "" }) => {
  return (
    <motion.div
      className={`absolute w-1 h-1 rounded-full bg-cyan-400/30 ${className}`}
      animate={{
        y: [0, -15, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

// Speech bubble component to guide users to interactive elements
// const SpeechBubble = ({ visible, x, y, text }) => {
//   if (!visible) return null;
//
//   return (
//     <motion.div
//       className="absolute z-50 bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-lg"
//       style={{
//         left: x,
//         top: y - 40 // Position above the element
//       }}
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       {text}
//       <div className="absolute w-2 h-2 bg-black/70 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
//     </motion.div>
//   );
// };

// Explosion particle for the fun interaction
const ExplosionParticle = ({ x, y, color }: ExplosionParticleProps) => {
  const angle = Math.random() * Math.PI * 2;
  const size = Math.random() * 8 + 3;
  const distance = Math.random() * 100 + 50;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        x,
        y,
      }}
      animate={{
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        opacity: [1, 0],
        scale: [1, 0.5],
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    />
  );
};

// Floating cursor to guide first-time users
const AttentionCursor = ({ show }) => {
  if (!show) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 text-white flex items-center gap-2"
      initial={{ opacity: 0, x: "70%", y: "80%" }}
      animate={{
        opacity: 1,
        x: "75%",
        y: "80%",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: 2,
        repeatType: "reverse",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <MousePointer className="h-5 w-5 text-purple-400" />
      </motion.div>
      <motion.p
        className="bg-black/70 px-2 py-1 rounded text-sm"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Click to play!
      </motion.p>
    </motion.div>
  );
};

export function Footer() {
  // Current year for the copyright
  const year = new Date().getFullYear();
  const [explosions, setExplosions] = useState<ParticleData[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const sparklesRef = useRef(null);
  const footerRef = useRef<HTMLElement>(null);

  // Show attention cursor after a few seconds for new users
  useEffect(() => {
    // Check if user has played before
    const hasPlayedBefore = localStorage.getItem("hasPlayedSparkles");

    if (!hasPlayedBefore) {
      // Show the cursor guide after 3 seconds
      const timer = setTimeout(() => {
        setShowCursor(true);

        // Show tip after 4 seconds
        setTimeout(() => {
          setShowTip(true);
        }, 1000);

        // Hide cursor guide after 10 seconds
        setTimeout(() => {
          setShowCursor(false);
          setShowTip(false);
        }, 8000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Record mouse position for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fun messages that appear after certain click counts
  const messages = [
    "You found a hidden feature!",
    "Keep clicking for more fun!",
    "You're creating digital fireworks!",
    "Colorful, isn't it?",
    "You must really like clicking!",
    "Are you having fun yet?",
    "You've made the page sparkle!",
    "This is oddly satisfying, right?",
    "You're quite persistent!",
    "Achievement unlocked: Click Master!",
  ];

  // Function to create explosion particles
  const createExplosion = (e: React.MouseEvent) => {
    if (!footerRef.current) return;

    // Get position relative to the footer
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Generate random color
    const colors = [
      "#f472b6",
      "#60a5fa",
      "#4ade80",
      "#facc15",
      "#fb923c",
      "#a78bfa",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Create particles
    const particles: ParticleData[] = [];
    const particleCount = Math.floor(Math.random() * 10) + 15;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: `${Date.now()}-${i}`,
        x,
        y,
        color,
      });
    }

    // Update state
    setExplosions([...explosions, ...particles]);

    // Update click count and maybe show message
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount % 5 === 0) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }

    // Hide cursor once user interacts
    if (showCursor) {
      setShowCursor(false);
      setShowTip(false);
    }

    // Mark that user has played
    if (!hasPlayed) {
      setHasPlayed(true);
      localStorage.setItem("hasPlayedSparkles", "true");
    }

    // Clean up old particles after some time
    setTimeout(() => {
      setExplosions((prev) => prev.filter((p) => !particles.includes(p)));
    }, 1000);
  };

  // Magnetic effect calculation for the sparkles button
  const getMagneticStyle = () => {
    if (!sparklesRef.current || !mousePos) return {};

    const rect = sparklesRef.current.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    // Calculate distance from mouse to center
    const distance = Math.sqrt(
      Math.pow(mousePos.x - center.x, 2) + Math.pow(mousePos.y - center.y, 2)
    );

    // Only apply magnetic effect within 150px radius
    if (distance < 150) {
      const strength = 30; // Max pixel movement
      const power = 100; // Higher values make effect drop off faster with distance
      const magnetStrength = Math.min(strength, power / distance);

      const angle = Math.atan2(mousePos.y - center.y, mousePos.x - center.x);

      return {
        transform: `translate(${Math.cos(angle) * magnetStrength}px, ${
          Math.sin(angle) * magnetStrength
        }px)`,
      };
    }

    return {};
  };

  return (
    <footer
      ref={footerRef}
      className="border-t border-border bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)] dark:bg-grid-white/5"></div>

      {/* Attention cursor for first-time users */}
      <AttentionCursor show={showCursor} />

      {/* Speech bubble tip for first-time users */}
      {showTip && (
        <motion.div
          className="fixed z-50 bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-lg"
          style={{
            left: "75%",
            top: "calc(80% - 40px)", // Position above the element
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          Try clicking the sparkles!
          <div className="absolute w-2 h-2 bg-black/70 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
        </motion.div>
      )}

      {/* Fun message that appears after clicking */}
      {showMessage && (
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg z-50 text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {messages[Math.min(Math.floor(clickCount / 5), messages.length - 1)]}
        </motion.div>
      )}

      {/* Explosion particles */}
      {explosions.map((particle) => (
        <ExplosionParticle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          color={particle.color}
        />
      ))}

      {/* Static floating dots instead of dynamic particles */}
      <FloatingDot className="top-[20%] left-[10%]" />
      <FloatingDot className="top-[30%] left-[20%]" />
      <FloatingDot className="top-[70%] left-[30%]" />
      <FloatingDot className="top-[40%] left-[40%]" />
      <FloatingDot className="top-[60%] left-[50%]" />
      <FloatingDot className="top-[20%] left-[60%]" />
      <FloatingDot className="top-[80%] left-[70%]" />
      <FloatingDot className="top-[40%] left-[80%]" />
      <FloatingDot className="top-[50%] left-[90%]" />
      <FloatingDot className="top-[10%] left-[95%]" />

      {/* Animated gradient line at top */}
      <motion.div
        className="h-0.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container py-8 relative z-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              © {year} Shifaeta Kadari Barshon. All rights reserved.
            </p>
            <div className="mt-2 text-xs text-muted-foreground/70 flex items-center">
              <span>Made with</span>
              <motion.div
                whileHover={{ scale: 1.2 }}
                animate={{
                  scale: [1, 1.1, 1],
                  color: ["#f87171", "#ec4899", "#f87171"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "mirror",
                }}
                className="inline-flex mx-1 text-red-400"
              >
                <Heart className="h-3 w-3" />
              </motion.div>
              <span>using</span>
              <motion.div
                className="inline-flex mx-1 text-blue-400"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <Code className="h-3 w-3" />
              </motion.div>
              <span>Next.js, Tailwind CSS, and Framer Motion</span>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-4 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.1,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-full relative"
            >
              <Link
                href="https://github.com/Barshono96"
                target="_blank"
                className="rounded-full bg-background/80 p-2 text-muted-foreground hover:text-primary hover:bg-background/90 transition-colors flex items-center justify-center group"
              >
                <motion.span className="absolute -top-1 -right-1 flex h-3 w-3 z-10">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 group-hover:opacity-100"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 group-hover:bg-sky-400"></span>
                </motion.span>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.1,
                backgroundColor: "rgba(99, 102, 241, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-full flex items-center justify-center"
            >
              <Link
                href="https://www.linkedin.com/in/shifaeta-kadari-barshon-6088b5180/"
                target="_blank"
                className="rounded-full bg-background/80 p-2 text-muted-foreground hover:text-primary hover:bg-background/90 transition-colors flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.div>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.1,
                backgroundColor: "rgba(37, 99, 235, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-full flex items-center justify-center"
            >
              <Link
                href="https://www.facebook.com/shifat.barshon.9/"
                target="_blank"
                className="rounded-full bg-background/80 p-2 text-muted-foreground hover:text-primary hover:bg-background/90 transition-colors flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <Facebook className="h-5 w-5" />
                </motion.div>
                <span className="sr-only">Facebook</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.1,
                backgroundColor: "rgba(234, 179, 8, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-full flex items-center justify-center"
            >
              <Link
                href="/#contact"
                className="rounded-full bg-background/80 p-2 text-muted-foreground hover:text-yellow-500 hover:bg-background/90 transition-colors flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, 0, -15, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    repeatDelay: 1,
                  }}
                  className="flex items-center justify-center"
                >
                  <Star className="h-5 w-5" />
                </motion.div>
                <span className="sr-only">Contact</span>
              </Link>
            </motion.div>

            {/* Fun interactive sparkles button */}
            <motion.div
              ref={sparklesRef}
              style={getMagneticStyle()}
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-full flex items-center justify-center cursor-pointer relative"
              onClick={createExplosion}
            >
              {/* Pulsing attention ring */}
              <motion.div
                className="absolute -inset-1.5 rounded-full opacity-75 blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  backgroundColor: [
                    "rgba(139, 92, 246, 0.3)",
                    "rgba(192, 132, 252, 0.5)",
                    "rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="rounded-full bg-background/80 p-2 text-muted-foreground hover:text-purple-400 hover:bg-background/90 transition-colors flex items-center justify-center relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 180],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="flex items-center justify-center"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
                <span className="sr-only">Fun Sparkles</span>
              </div>

              {/* Pull-to-me text for new users */}
              {!hasPlayed && (
                <motion.div
                  className="absolute -bottom-7 whitespace-nowrap text-xs font-medium text-purple-400/80"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  ✨ Click me! ✨
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
