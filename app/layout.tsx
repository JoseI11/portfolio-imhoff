import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../app/components/header";
import ActiveSectionContextProvider from "./context/active-section-context";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "./context/theme-context";
import FloatingButtons from "./components/FloatingButtons";
import LanguageContextProvider from "./context/language-context";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
type CustomMetadata = Metadata & {
  images: { url: string; width: number; height: number; alt: string }[];
};
export const metadata: CustomMetadata = {
  title: "Jose | Personal Portfolio",
  description:
    "I am a front-end developer with two year of experience working in the industry",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Portfolio",
    "Java",
    "Node.js",
    "Express",
    "MongoDB",
    "Bootstrap",
    "Tailwind",
    "MySQL",
    "Firebase",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jose | Personal Portfolio",
    description:
      "Explore my portfolio — React, Next.js, and modern web projects.",
    url: "https://portfolio-imhoff.vercel.app/",
    siteName: "Jose Personal Portfolio",
  },
  images: [
    {
      url: "/og-image.webp",
      width: 1200,
      height: 630,
      alt: "Jose's Portfolio Preview",
    },
  ],
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <meta charSet="UTF-8" />

      <meta name="robots" content="index, follow"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        <div className="fixed top-[-6rem] -right-[10rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:right-[11rem] sm:w-[68.75rem] dark:bg-[#946263] md:right-[5rem] lg:right-[10rem] xl:right-[15rem] -z-10"></div>
        <div className="fixed bg-[#dbd7fb] top-[-1rem] -z-10 left-[-20rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <div className="max-w-[50rem] mx-auto px-4 sm:px-6 w-full"></div>
        <ThemeContextProvider>
          <LanguageContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right"></Toaster>
          </ActiveSectionContextProvider>
          <FloatingButtons />
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
