import type { CollectionEntry } from "astro:content";

const BranchCard = ({ path }: { path: CollectionEntry<"paths"> }) => {
  

  return (
    <a
      href={`/paths/${path.slug}`}
      className="w-full md:max-w-[300px] min-h-[400px] py-5 pt-10 gap-4 px-2 bg-gray-50 border dark:border-none dark:bg-stone-800 z-2 relative rounded-md flex items-center flex-col font-mono hover:shadow-md transition-all"
    >
      <div className="p-5 rounded-full bg-white dark:bg-gray-400 border dark:border-none">
        <img width={40} height={40} src={path.data.image} alt="" />
      </div>

      <h1 className="text-xl font-semibold underline">{path.data.name}</h1>

      <p className="text-center text-sm dark:text-gray-400 line-clamp-3">
        {" "}
        {path.data.description}{" "}
      </p>

      <ul className="flex justify-center flex-wrap gap-2 py-4 border-t dark:border-t-gray-600">
        {path.data.relatedLanguages.split(" ").map((tag: string) => (
          <li className="text-xs px-3 py-1 border rounded-md bg-gray-100 dark:bg-stone-600 dark:border-none ">
            {" "}
            {tag}{" "}
          </li>
        ))}
      </ul>
    </a>
  );
};

export default BranchCard;

/**
 * 
 * ---

const { path } = Astro.props
const tags = path.data.relatedLanguages.split(" ")
---



 */
