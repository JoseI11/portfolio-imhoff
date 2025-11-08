import { links } from "./data";

export type Language = "en" | "es";
export type SectionNameEN = (typeof links)[number]["name"]["en"];
export type SectionNameES = (typeof links)[number]["name"]["es"];
export type SectionName = SectionNameEN | SectionNameES;