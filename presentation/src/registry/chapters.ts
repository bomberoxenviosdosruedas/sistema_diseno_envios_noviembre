import type { ChapterDef } from "./types";
import Chapter1 from "../chapters/01-intro/Chapter1";
import { narrations as narrations1 } from "../chapters/01-intro/narrations";
import Chapter2 from "../chapters/02-design/Chapter2";
import { narrations as narrations2 } from "../chapters/02-design/narrations";
import Chapter3 from "../chapters/03-services/Chapter3";
import { narrations as narrations3 } from "../chapters/03-services/narrations";
import Chapter4 from "../chapters/04-architecture/Chapter4";
import { narrations as narrations4 } from "../chapters/04-architecture/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "intro",
    title: "01 · Introducción",
    narrations: narrations1,
    Component: Chapter1,
  },
  {
    id: "design",
    title: "02 · Identidad Visual",
    narrations: narrations2,
    Component: Chapter2,
  },
  {
    id: "services",
    title: "03 · Servicios Logísticos",
    narrations: narrations3,
    Component: Chapter3,
  },
  {
    id: "architecture",
    title: "04 · Arquitectura",
    narrations: narrations4,
    Component: Chapter4,
  },
];
