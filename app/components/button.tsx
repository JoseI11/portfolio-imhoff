"use client";

import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

type ButtonVariant = "dark" | "light" | "icon";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
}

// Props cuando es un <button>
interface ButtonElementProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never;
  target?: never;
  download?: never;
}

// Props cuando es un <Link>
interface LinkButtonProps extends BaseButtonProps {
  href: string;
  target?: "_blank" | "_self";
  download?: never;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Props cuando es un <a> (descarga)
interface AnchorButtonProps extends BaseButtonProps {
  href: string;
  download: true | string;
  target?: "_blank" | "_self";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Look for your ButtonProps definition (likely near the top of the file)
// and add the disabled property:


type ButtonProps = ButtonElementProps | LinkButtonProps | AnchorButtonProps;

const baseStyles =
  "group flex items-center justify-center rounded-full outline-none transition-all focus:scale-110 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500";

const variants = {
  dark: "bg-gray-900 text-white hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10",
  light: "bg-gray-200 text-gray-700 hover:scale-110 hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60",
  icon: "p-4 text-gray-700 hover:scale-[1.15] hover:text-gray-950 active:scale-105 bg-gray-200 rounded-full dark:bg-white/10 dark:text-white/60 borderBlack",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-3 text-base gap-2",
  lg: "h-[3rem] w-[8rem] text-xl",
};

export default function Button({
  variant = "dark",
  size = "md",
  className,
  children,
  isLoading = false,
  disabled,
  href,
  download,
  target,
  ...props
}: ButtonProps) {
  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  // ✅ Si tiene href y NO es descarga → usar <Link>
  if (href && !download) {
    return (
      <Link
        href={href}
        target={target}
        className={buttonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {isLoading ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          children
        )}
      </Link>
    );
  }

  // ✅ Si tiene href y SÍ es descarga → usar <a>
  if (href && download) {
    return (
      <a
        href={href}
        download={download === true ? undefined : download}
        target={target}
        className={buttonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {isLoading ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          children
        )}
      </a>
    );
  }

  // ✅ Si NO tiene href → usar <button>
  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {isLoading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        children
      )}
    </button>
  );
}