import { route } from "@/utils/store";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

const NextSteph = () => {
  const $route = useStore(route);
  const [next, setNext] = useState<"language" | "branch" | "framework">();

  const selectNext = () => {
    const path = $route[0];
    const language = $route[1];
    const framework = $route[2];

    if (path && !language) return "language";
    if (!path && language) return "branch";
    if (path && language) return "framework";
    else return "branch";
  };

  const selectImageName = () => {
    switch (next) {
      case "language":
        return "code.svg";
        break;
      case "branch":
        return "branch.svg";
        break;
      case "framework":
        return "framework.svg";
    }
  };

  const selectNextRoute = () => {
    if(next === "language") return `/paths/${$route[0]}/related-languages`;
    if(next === "branch") return `/languages/${$route[1]}/related-path`
    else return "/frameworks"

  } 

  useEffect(() => {
    setNext(selectNext());
  }, []);

  return (
    <section className="flex items-center justify-center bg-black/70 inset-0 fixed z-[100]">
      <div className="flex flex-col gap-3 max-w-[700px] w-full min-h-[300px] bg-white rounded-md">
        <div className="p-5 flex-1 flex items-center justify-center flex-col gap-3">
          <h1 className="dark:text-gray-600 text-gray-700 text-[40px] font-bold">
            What's Next?
          </h1>
          <p className="text-[20px]">
            Now you must select a{" "}
            <span className="text-orange-600">{next}</span>{" "}
          </p>

          <a href={selectNextRoute()} className="flex items-center gap-2 w-fit justify-center px-10 rounded-md py-2 my-2 border ">
            <h1 className="font-bold font-mono text-[40px]">GO</h1>
            <img alt="" width={40} src={`/images/${selectImageName()}`} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextSteph;
