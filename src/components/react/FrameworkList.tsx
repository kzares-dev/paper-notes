import BaseLayout from "@/layouts/BaseLayout.astro";
import { route } from "@/utils/store"
import { useStore } from "@nanostores/react"

const FrameworkList = () => {
  const $route = useStore(route);

  return (
    <div>
       <div className="flex flex-col gap-1 py-3 pb-5 px-2">
        <h1 className="dark:text-gray-600 text-gray-700 text-[60px] font-bold">
          Select{" "}
          <span className="text-orange-600">Framework</span>
        </h1>
      </div>
    </div>
  )
}

export default FrameworkList