import React from "react";

export const Filter = () => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="bg-[#DDDDDD] rounded-[5px] ">
        <select className="flex p-[1vw] bg-[#DDDDDD] text-[#737373] ">
          <option value="popularity">popularity</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>
      <button className="p-[1vw] bg-[#23A6F0] rounded-[5px] text-[#FFFFFF] font-bold  ">
        Filter
      </button>
    </div>
  );
};
