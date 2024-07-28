export const AppConfig = {
	site_name: 'PaperNotes',
	title: 'Paper Notes',
	description: 'Boilerplate built with Astro and Tailwind CSS',
	author: 'kzares',
	locale_region: 'de-en',
	locale: 'en'
};

export const languagesList = "python java javascript cpp c# go kotlin rust";

export const pathsList = "android backend";

export const frameworksList = ""

export function selectType(param: string): string {
	if(languagesList.includes(param)) return "language"
	else if(pathsList.includes(param)) return "path"
	else return "framework"
}