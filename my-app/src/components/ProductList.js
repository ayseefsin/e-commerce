import { ProductCard } from "./ProductCard";
export const ProductList = () => {
  return (
    <div className="grid grid-cols-4 md:flex md:flex-col md:items-center justify-between gap-[4vw] mx-[12vw] mb-10 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
