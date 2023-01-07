import { writable, type Writable } from "svelte/store";

type DarkMode = "light" | "dark";

export const darkMode: Writable<DarkMode> = writable("light");
