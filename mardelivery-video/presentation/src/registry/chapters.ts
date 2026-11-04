import type { ChapterDef } from "./types";
import ElProblema from "../chapters/01-el-problema/ElProblema";
import { narrations as elProblemaNarrations } from "../chapters/01-el-problema/narrations";
import LaSolucion from "../chapters/02-la-solucion/LaSolucion";
import { narrations as laSolucionNarrations } from "../chapters/02-la-solucion/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "el-problema",
    title: "1. El Problema",
    narrations: elProblemaNarrations,
    Component: ElProblema,
  },
  {
    id: "la-solucion",
    title: "2. La Solución",
    narrations: laSolucionNarrations,
    Component: LaSolucion,
  },
];
