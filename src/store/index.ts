import { writable } from "svelte/store"

export type PageValue = "info" | "jobs" | "projects"
export const page = writable<PageValue>("info");
