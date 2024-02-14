import { ShopCard } from "./ShopCard";

export const CategoryContainer = () => {
  return (
    <div className="md:flex-col flex gap-[2vw] px-[4vw] ">
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  );
};
