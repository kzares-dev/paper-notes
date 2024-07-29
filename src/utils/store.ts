import { getItemPlace, selectType } from "@/config";
import { atom } from "nanostores";

export const route = atom<string[]>(["", "", ""]);


export function updateRoute(newRoute: string) {
    let tempRoute = route.get()
    const arrayPlace = getItemPlace(newRoute);

    if(tempRoute[arrayPlace] === newRoute) {
        tempRoute[arrayPlace] = "";
    }else {
        tempRoute[arrayPlace] = newRoute;
    }
    route.set(tempRoute)
}
