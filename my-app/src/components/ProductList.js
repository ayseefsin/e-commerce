import axios from "axios";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
export const ProductList = () => {
  const [productList, setProductList] = useState([]);

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
