import { categorySource } from "./CategorySource";
export const CategoryCard = (category, url) => {
  return (
    <div className="aspect-[1/1] drop-shadow-md hover:shadow-xl flex items-end pl-[2vw] pb-[2vh] overflow-hidden bg-cover bg-[url(https://wallpapercave.com/wp/wp1866317.jpg)] ">
      <button className="bg-[#FFFFFF] py-3 w-[12vw] text-base font-bold text-[#252B42]">
        {categorySource[0].category}
      </button>
    </div>
  );
};
