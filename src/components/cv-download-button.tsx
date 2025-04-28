"use client";

import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

interface CVDownloadButtonProps {
  variant?: "gradient" | "outline";
}

export function CVDownloadButton({
  variant = "outline",
}: CVDownloadButtonProps) {
  return (
    <Link
      href="/files/Shifaeta_Kadari_Personal__CV.pdf"
      download
      className={`group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
        variant === "gradient"
          ? "gradient-bg-1 text-white hover:opacity-90"
          : "border border-border hover:border-primary hover:text-primary"
      }`}
    >
      <div className="relative h-5 w-5 overflow-hidden">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          fill
          className="object-contain"
          sizes="20px"
        />
      </div>
      Download CV
      <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
    </Link>
  );
}
