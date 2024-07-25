import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import {route, updateRoute } from "utils/store"

const AddPath = ({ path } : { path: string}) => {
  const $route = useStore(route)
  const [itemSelected, setItemSelected] = useState($route.includes(path));

  const onButtonPress = () => {
    updateRoute(path.toLowerCase())
    setItemSelected(!itemSelected)
  }

  
  return (
    <button onClick={onButtonPress} className="flex-1  flex items-center justify-center flex-row gap-3  md:flex-col bg border w-full md:w-fit h-fit py-5 rounded-md px-2 text-gray-700  text-[30px] font-bold  cursor-pointer">
        {itemSelected? <img src="/images/folder-check.svg" width={40} /> :  <img src="/images/add.svg" width={40} />}

         {itemSelected ? <h1 className="text-orange-600">Selected</h1> : <h1>
         Select 
         <span className="font-black text-orange-600">{" " + path}</span>
         </h1>}
    </button>
  )
}

export default AddPath