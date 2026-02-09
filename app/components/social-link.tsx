"use client";

import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
  size?: "md" | "lg";
}

export default function SocialLink({
  href,
  icon,
  label,
  external = false,
  size = "md",
}: SocialLinkProps) {
  const baseStyles =
    "flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 bg-gray-200 text-gray-700";

  const sizes = {
    md: "p-4 text-base",
    lg: "p-4 text-[1.35rem]",
  };

  const Component = external ? "a" : Link;
  const props = external ? { href, target: "_blank" } : { href };

  return (
    <Component
      className={clsx(baseStyles, sizes[size])}
      title={label}
      {...props}
    >
      {icon}
    </Component>
  );
}