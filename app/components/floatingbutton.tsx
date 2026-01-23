"use client";

import React from "react";
import { clsx } from "clsx";

interface FloatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: "_blank" | "_self";
  rel?: string;
  children?: React.ReactNode;
  ariaLabel: string;
  icon?: React.ReactNode;
}

export default function FloatingButton({
  href,
  target,
  rel,
  children,
  ariaLabel,
  icon,
  className,
  ...props
}: FloatingButtonProps) {
  const baseStyles =
    "w-12 h-12 sm:w-[3rem] sm:h-[3rem] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 focus:scale-110 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:scale-105 bg-white dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-[0.5rem] border border-white dark:border-black dark:border-opacity-40 border-opacity-40 dark:bg-gray-950";

  const content = (
    <>
      {icon || children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={clsx(baseStyles, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={clsx(baseStyles, className)}
      {...props}
    >
      {content}
    </button>
  );
}