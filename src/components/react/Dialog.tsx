
const Dialog = ({
  title,
  onClose,
  onAccept,
} : {
    title: string
    onClose: () => void,
    onAccept: () => void
}) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center p-4 bg-black/80">
        <div className="flex flex-col gap-5 w-full max-w-[500px] bg-white rounded-md text-sm py-5 px-2">
          <h1 className="text-xl font-black text-gray-700"> {title} </h1>

          <div className="flex flex-row gap-3 justify-between px-5">
            <button onClick={() => onClose()} className="p-3 rounded-md flex-1 border bg-black/90 text-white font-black"> Close </button>
            <button onClick={() => onAccept()} className="p-3 rounded-md flex-1 border">Accept</button>
          </div>
        </div>
      
    </div>
  )
}

export default Dialog