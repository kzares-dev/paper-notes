import { selectedLanguageParagraph, selectedPathParagraph } from "@/config";

function SelectedHeader({
  selectedTitle,
  filter,
  collection,
}: {
  selectedTitle: string;
  filter?: string;
  collection: "languages" | "paths";
}) {
  const unselectedCollection = collection === "languages" ? "path" : "language";

  const RenderSimpleTitle = ({ text }: { text: string }) => {
    const splitedText = text.split(" ");
    return (
      <div className="flex flex-col gap-1 py-3 pb-5 px-2">
        <h1 className="dark:text-gray-600 text-gray-700 text-[60px] font-bold">
          {splitedText[0]}
          <span className="text-orange-600"> {splitedText[1]} </span>
        </h1>
      </div>
    );
  };
  if (!filter) return <RenderSimpleTitle text={selectedTitle} />;

  return (
    <div className="">
      <RenderSimpleTitle text={`Related ${collection}`} />

      <div className="flex flex-col gap-1 py-5 pb-5 px-4 w-full max-w-[700px] min-h-[100px] border rounded-md my-5">
        <h1 className="dark:text-gray-600 text-gray-700 text-[40px] font-bold">
          You have chosen as {unselectedCollection}:{" "}
          <span className="text-orange-600">{filter}</span>
        </h1>
        <p className="text-gray-400 font-semibold">
          {" "}
          {collection === "paths"
            ? selectedLanguageParagraph
            : selectedPathParagraph}{" "}
        </p>
      </div>
    </div>
  );
}

export default SelectedHeader;
