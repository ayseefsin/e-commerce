import { BestSellerProducts } from "../components/BestSellerProducts";
import { ProductDetail } from "../components/ProductDetail";
import { ProductInfo } from "../components/ProductInfo";

export const ProductPage = () => {
  return (
    <div>
      <ProductDetail />
      <ProductInfo />
      <BestSellerProducts/>
    </div>
  );
};
