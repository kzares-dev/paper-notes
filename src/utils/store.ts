import { atom } from "nanostores";

export const route = atom({
    path: "",
    language: "",
    framework: "",
});

type newRouteType = {
    path: string,
    language: string,
    framework: string,
 }

export function updateRoute(newRoute: newRouteType) {
    route.set(newRoute)
    console.log(newRoute)
}