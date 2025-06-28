import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [height, setHeight] = useState(showItems ? "auto" : "0");

  const handleClick = () => {
    setShowIndex();
    setHeight(showItems ? "0" : "auto");
  };

  return (
    <div>
      {/* Accordion Container */}
      <div className="w-full max-w-2xl mx-auto my-6 bg-white shadow-xl rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
        {/* Accordion Header */}
        <div
          className="flex justify-between items-center px-6 py-4 cursor-pointer"
          onClick={handleClick}
        >
          <h2 className="text-xl font-semibold text-gray-800">
            {data.title } ({data.itemCards.length})
          </h2>
          <span
            className={`transform transition-transform duration-300 ${
              showItems ? "rotate-180" : "rotate-0"
            } text-lg`}
          >
            ⬇️
          </span>
        </div>

        {/* Smooth Accordion Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showItems ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-4 pt-0">
            <ItemList items={data.itemCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
