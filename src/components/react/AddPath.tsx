import { selectType } from "@/config";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { route, updateRoute } from "src/utils/store";
import Dialog from "./Dialog";

const AddPath = ({ path, type }: { path: string; type: string }) => {
  const $route = useStore(route);
  const [itemSelected, setItemSelected] = useState(
    $route.includes(path.toLowerCase())
  );
  const [isSelected, setIsSelected] = useState<boolean>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const onPopupClose = () => {
    setShowDialog(false);
    console.log("why not closed")
    console.log(showDialog)
  };
  const onPopupAccept = () => {
    alert("closed")
   
    // make something to add the language and remove the past
  };

  const onButtonPress = () => {
    if (!isSelected) {
      setShowDialog(true);
      return;
    }
    updateRoute(path.toLowerCase());
    setItemSelected(!itemSelected);
  };

  useEffect(() => {
    // check if any of the selected items is a language
    // if some one is it then block all others to be selected
    const languageSelected = $route.filter(
      (route) => selectType(route) === type
    );
    setIsSelected(path === languageSelected[0]);
  }, []);

  return (
    <button
      onClick={onButtonPress}
      className="flex-1  flex items-center justify-center flex-row gap-3  md:flex-col bg border w-full md:w-fit h-fit py-5 rounded-md px-2 text-gray-700  text-[30px] font-bold  cursor-pointer"
    >
      {showDialog && <Dialog onAccept={onPopupAccept} onClose={onPopupClose} title={`Another programming ${type} was chosen previously, do you want to replace it?`} />}

      {itemSelected ? (
        <img src="/images/folder-check.svg" width={40} />
      ) : (
        <img src="/images/add.svg" width={40} />
      )}

      {itemSelected ? (
        <h1 className="text-orange-600">Selected</h1>
      ) : (
        <h1>
          Select
          <span className="font-black text-orange-600">{" " + path}</span>
        </h1>
      )}
    </button>
  );
};

export default AddPath;
