import { getCollection, type CollectionEntry } from "astro:content";
import LanguageCard from "./LanguageCard";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { route } from "@/utils/store";
import { selectType } from "@/config";

export default function LanguageList() {
  const $route = useStore(route);
  const [languages, setLanguages] = useState<CollectionEntry<"languages">[]>(
    []
  );
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    getCollection("languages").then((response) => {
      setLanguages(response);
    });
    // check if any of the selected items is a language
    // if some one is it then block all others to be selected
    const languageSelected = $route.filter(
      (route) => selectType(route) === "language"
    );

    if (languageSelected[0]) setSelectedLanguage(languageSelected[0]);
  }, []);

  return (
    <section className="mx-auto w-full max-w-screen-lg px-4 py-6">
      <div className="flex flex-col gap-1 py-3 pb-5 px-2">
        <h1 className="dark:text-gray-600 text-gray-700  text-[50px] font-bold">
          Programming <span className="text-orange-600">Languages</span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-3 mx-auto ">
        {languages.map((language: CollectionEntry<"languages">) => (
          <LanguageCard
            isSelected={selectedLanguage.toLowerCase() === language.data.name.toLowerCase()}
            key={language.id}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}
