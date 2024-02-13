import { ProductCard } from "./ProductCard";

export const BestSeller = () => {
  return (
    <div className="text-navText flex flex-col gap-[4em] ">
      <div className="flex flex-col items-center gap-[.625em] ">
        <div>
          <h2 className="text-xl text-[#737373] tracking-[.0125em] ">
            Featured Products
          </h2>
        </div>
        <div>
          <h3 className="text-2xl text-[#252B42] font-bold tracking-[.00625em] ">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div>
          <p className="text-sm text-[#737373] tracking-[.0125em] ">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
      </div>
      <div className=" md:flex md:flex-col md:items-center md:justify-center md:px-[2vw] grid grid-cols-4  px-[12vw] gap-[4em] mb-[20vh]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
