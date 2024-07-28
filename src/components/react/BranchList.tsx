import { getCollection, type CollectionEntry } from "astro:content";
import BranchCard from "./BranchCard";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { route } from "utils/store";
import { selectType } from "@config";

const BranchList = () => {
  const $route = useStore(route)
  const [paths, setPaths] = useState<CollectionEntry<"paths">[]>([]);

  function filterByRelatedLanguage(objects: any[], searchLanguage: string): any[] {
    return objects.filter(obj => {
      const relatedLanguages = obj.data.relatedLanguages.split(/[\s,]+/);
      return relatedLanguages.includes(searchLanguage);
    });
  }

  useEffect(() => {
    let filterParam = "";
    $route.map((item: string) => {
      if(selectType(item) === "language") filterParam = item
    })
    getCollection("paths").then((data: CollectionEntry<"paths">[]) =>{
      const filteredObjects = filterByRelatedLanguage(data, filterParam)
      setPaths(filteredObjects)
    });
  }, []);

  return (
    <section className="mx-auto w-full max-w-screen-lg px-4 py-6">
      <div className="flex flex-col gap-1 py-3 pb-5 px-2">
        <h1 className="dark:text-gray-600 text-gray-700  text-[60px] font-bold">
          Coding <span className="text-orange-600">Branches</span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-3 mx-auto ">
        {paths.map((path: CollectionEntry<"paths">) => (
          <BranchCard key={path.id} path={path} />
        ))}
      </div>
    </section>
  );
};

export default BranchList;
