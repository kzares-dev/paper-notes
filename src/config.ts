export const AppConfig = {
	site_name: 'PaperNotes',
	title: 'Paper Notes',
	description: 'Boilerplate built with Astro and Tailwind CSS',
	author: 'kzares',
	locale_region: 'de-en',
	locale: 'en'
};

export const languagesList = "python java javascript cpp c# go kotlin rust";

export const pathsList = "android backend frontend";

export const frameworksList = ""

export function selectType(param: string): "language" | "path" | "framework" {
	if(languagesList.includes(param.toLowerCase())) return "language"
	else if(pathsList.includes(param.toLowerCase())) return "path"
	else return "framework"
}

export const selectedLanguageParagraph = "You have chosen a programming language, the next steph is select a coding area where you would like to work"
export const selectedPathParagraph = "You have chosen a coding area that you like, the next steph is select a programming language to develop your ideas"

const routeIdx = {
    path: 0,
    language: 1,
    framework: 2,
}

export function getItemPlace(param: string): number {
	const newRouteType = selectType(param);
    const arrayPlace = routeIdx[newRouteType];
	return arrayPlace
}
