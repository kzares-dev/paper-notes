import { useStore } from "@nanostores/react";
import { route } from "@/utils/store";
import { useEffect, useState } from "react";
import { selectType } from "@/config";

type ItemType = {
  name: string;
  image: string;
  redirect: string;
  active: boolean;
};

const placeholder = [
  {
    name: "Branch",
    image: "/images/branch.svg",
    redirect: "/paths",
    active: false,
  },
  {
    name: "Language",
    image: "/images/code.svg",
    redirect: "/languages",
    active: false,
  },
  {
    name: "Framework",
    image: "/images/framework.svg",
    redirect: "/languages",
    active: false,
  },
];

const SelectedPath = () => {
  const $route = useStore(route);
  
  return (
    <div className="flex flex-row items-center justify-between rounded-md ">
      <div className="flex flex-row gap-4 items-center w-fit relative">
        <div className="-z-10 absolute -left-4 -right-4 bottom-5 h-[4px] dark:bg-orange-700 bg-orange-500 rounded-full" />

        {$route.map((item, idx) => {
          console.log(item)
          let renderItem: ItemType;
          if (item === "") renderItem = placeholder[idx];
          else {
            renderItem = {
              name: item,
              image: `/images/${item}.svg`,
              redirect: `/${selectType(item)}s/${item}`,
              active: true,
            };
          }

          return (
            <a href={renderItem.redirect} key={renderItem.name} className={`flex flex-row items-center gap-2 text-sm font-extrabold font-mono p-3 pr-5 border rounded-md cursor-pointer relative ${renderItem.active ? "bg-white" : "bg-gray-100 text-gray-500"}`}>
              <div
                className={`flex items-center justify-center absolute -left-1 bottom-4   w-3 h-3 ${
                  renderItem.active ? "bg-orange-500 " : "bg-gray-100 border"
                }  rounded-full font-mono text-sm`}
              />

              <img width={15} alt="" src={renderItem.image} />
              <p>{renderItem.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedPath;
