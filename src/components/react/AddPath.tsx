import { getItemPlace } from "@/config";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { route, updateRoute } from "src/utils/store";
import Dialog from "./Dialog";
import NextSteph from "./NextSteph";

const AddPath = ({ path, type }: { path: string; type: string }) => {
  const $route = useStore(route);
  const [selected, setSelected] = useState("");
  const [isSelected, setIsSelected] = useState<boolean>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [showNextStephModal, setShowNextStephModal] = useState(false);
  const onPopupClose = () => {
    setShowDialog(!showDialog);
  };
  const onPopupAccept = () => {
    updateRoute(path.toLowerCase());
  };

  const onButtonPress = () => {
    // display the popup asking if you whant to switch items
    if (selected !== path.toLowerCase() && selected !== "") {
      setShowDialog(!showDialog);
      return;
    }

    updateRoute(path.toLowerCase());
    if (!isSelected) setShowNextStephModal(true);
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    const itemPlace = getItemPlace(path.toLowerCase());
    setSelected($route[itemPlace]);
    setIsSelected($route[itemPlace] === path.toLowerCase());
  }, []);

  return (
    <>
      {showNextStephModal && <NextSteph />}
      <button
        onClick={onButtonPress}
        className="flex-1  flex items-center justify-center flex-row gap-3  md:flex-col bg border w-full md:w-fit h-fit py-5 rounded-md px-2 text-gray-700  text-[30px] font-bold  cursor-pointer"
      >
        {showDialog && (
          <Dialog
            onAccept={onPopupAccept}
            onClose={onPopupClose}
            title={`Another programming ${type} was chosen previously, do you want to replace it?`}
          />
        )}

        {isSelected ? (
          <img src="/images/folder-check.svg" width={40} />
        ) : (
          <img src="/images/add.svg" width={40} />
        )}

        {isSelected ? (
          <h1 className="text-orange-600">Selected</h1>
        ) : (
          <h1>
            Select
            <span className="font-black text-orange-600">{" " + path}</span>
          </h1>
        )}
      </button>
    </>
  );
};

export default AddPath;
