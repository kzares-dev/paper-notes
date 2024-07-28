import type { CollectionEntry } from "astro:content";

function LanguageCard({
  language,
  isSelected,
}: {
  language: CollectionEntry<"languages">;
  isSelected: boolean;
}) {
  console.log(isSelected)
  return (
    <a
      href={`/languages/${language.slug}`}
      className={`${!isSelected && "opacity-80" } w-full md:max-w-[300px] h-fit py-10 pt-10 gap-4 px-2 bg-gray-50 border dark:border-none dark:bg-stone-800 z-2 relative rounded-md flex items-center flex-col  hover:shadow-md transition-all `}
    >
      {isSelected && <div className="absolute top-2 right-2 border font-mono text-sm px-3 py-1 text-orange-600 bg-gray-50 font-black flex items-center justify-center rounded-md">selected</div>}

      <div className="p-5 rounded-full dark:bg-gray-400 border dark:border-none">
        <img width={30} height={30} src={language.data.image} alt="" />
      </div>

      <h1 className="text-xl font-semibold underline font-mono ">
        {language.data.name}
      </h1>

      <p className="text-center text-sm font-bold text-gray-500 dark:text-gray-400 line-clamp-3">
        {" "}
        {language.data.description}{" "}
      </p>
    </a>
  );
}

export default LanguageCard;
