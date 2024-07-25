import { route, updateRoute }  from "utils/store";

const SelectedPath = () => {

    

  return (
    <div className="flex flex-row items-center justify-between rounded-md ">
        <div className="flex flex-row gap-4 items-center w-fit relative">

            {route.get().length !== 0 && <div className="-z-10 absolute -left-4 -right-4 bottom-5 h-[4px] dark:bg-orange-700 bg-orange-500 rounded-full" />}
           
            {route.get().map((item: string) => <div className="flex flex-row items-center gap-2 text-lg font-extrabold font-mono p-3 pr-5 border rounded-md bg-white relative"> 
                <div className="flex items-center justify-center absolute -left-1 bottom-4   w-3 h-3 dark:bg-orange-700 bg-orange-500  rounded-full font-mono text-sm" /> 

                <img width={25} alt="" src={`/images/${item.toLowerCase()}.svg`} />    
                <p>{item}</p>
             </div> )}
 
        </div>
    </div>
  )
}

export default SelectedPath