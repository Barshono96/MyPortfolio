"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          className="relative h-16 w-16 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-0 rounded-full border-t-2 border-primary"></div>
          <div className="h-12 w-12 rounded-full bg-background/50 flex items-center justify-center">
            <svg
              className="h-8 w-8 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/70 text-sm font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
