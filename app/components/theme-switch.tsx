"use client";

import React from "react";
import { BsSun } from "react-icons/bs";
import {BsMoon} from "react-icons/bs"
import { useTheme } from "../context/theme-context";
import FloatingButton from "./floatingbutton";


export default function ThemeSwitch() {
const{theme,toggleTheme}=useTheme()
  return (
    <FloatingButton
      onClick={toggleTheme}
      ariaLabel={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      icon={theme === "light" ? <BsSun /> : <BsMoon />}
    />
  );
}




