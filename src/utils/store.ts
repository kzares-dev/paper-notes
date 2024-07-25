import { atom } from "nanostores";

export const route = atom<string[]>(["backend", "javascript"]);

export function updateRoute(newRoute: string) {
    
    if(route.get().includes(newRoute)) {
        const filtered =  route.get().filter((item) => item !== newRoute);
        route.set(filtered);
        return
    };

    route.set([...route.get(), newRoute])
    console.log(route.get())
}

