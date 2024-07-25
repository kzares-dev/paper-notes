import { atom } from "nanostores";

export const route = atom<string[]>(["backend", "javascript", "java"]);

export function updateRoute(newRoute: string) {
    route.set([...route.get(), newRoute])
    console.log(route.get())
}