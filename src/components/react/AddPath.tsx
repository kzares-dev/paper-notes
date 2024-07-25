import { updateRoute } from "utils/store"

const AddPath = ({ path } : { path: string}) => {
  return (
    <div onClick={() => updateRoute(path)} className="flex-1 flex items-center flex-col bg-gray-50 border h-fit py-5 rounded-md px-2 text-gray-700  text-[30px] font-bold hover:shadow-md cursor-pointer">
         <img src="/images/add.svg" width={40} />

         <h1>
         Select 
         <span className="font-black text-orange-600">{" " + path}</span>
         </h1>
    </div>
  )
}

export default AddPath