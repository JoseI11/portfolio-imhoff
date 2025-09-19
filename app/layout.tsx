import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../app/components/header";
import ActiveSectionContextProvider from "./context/active-section-context";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "./context/theme-context";
import FloatingButtons from "./components/FloatingButtons";

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

export const metadata: Metadata = {
  title: "Jose | Personal Portfolio",
  description:
    "I am a front-end developer with one year of experience working in the industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right"></Toaster>
          </ActiveSectionContextProvider>
          <FloatingButtons />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
