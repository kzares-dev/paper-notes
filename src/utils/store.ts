import { atom } from "nanostores";

export const route = atom<string[]>(["backend", "python", "flask"]);

export function updateRoute(newRoute: string) {
    route.set([...route.get(), newRoute])
    console.log(route.get())
}