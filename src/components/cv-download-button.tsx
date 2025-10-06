"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

interface CVDownloadButtonProps {
  variant?: "gradient" | "outline";
}

export function CVDownloadButton({
  variant = "outline",
}: CVDownloadButtonProps) {
  // Get the base path from the environment or use empty string for development
  const basePath = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";
  // Point to the actual file present in public/files. Encode to avoid URL issues with spaces/parentheses.
  // The public/files folder contains: Shifaeta_Kadari_CV(L).pdf
  const fileName = "Shifaeta_Kadari_CV(L).pdf";
  const href = encodeURI(`${basePath}/files/${fileName}`);

  return (
    <a
      href={href}
      // Explicitly set the downloaded filename so the saved file name matches expected
      download={fileName}
      aria-label="Download CV"
      className={`group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
        variant === "gradient"
          ? "gradient-bg-1 text-white shadow-sm hover:shadow-md hover:opacity-90 hover:scale-105"
          : "border border-border/50 hover:border-cyan-400/30 hover:bg-transparent hover:text-cyan-500 hover:scale-105 hover:shadow-sm"
      }`}
    >
      <div className="relative h-5 w-5 overflow-hidden group-hover:rotate-6 transition-transform duration-300">
        <Image
          src={`${basePath}/images/logo.svg`}
          alt="Logo"
          fill
          className="object-contain"
          sizes="20px"
        />
      </div>
      Download CV
      <Download className="h-4 w-4 transition-all duration-300 group-hover:translate-y-1 group-hover:text-cyan-400" />
    </a>
  );
}
