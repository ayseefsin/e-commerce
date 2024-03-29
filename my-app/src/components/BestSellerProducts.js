import { BestSellerProductCard } from "./BestSellerProductCard";

export const BestSellerProducts = () => {
  return (
    <div className="my-[6vw]">
      <div>
        <h3 className="font-bold text-center my-[5vw] text-2xl md:text-[6vw] md:mt-[15vw] ">
          BESTSELLER PRODUCTS
        </h3>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-1  justify-between gap-[4vw] mx-[10vw] mb-10 ">
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
      </div>
    </div>
  );
};
