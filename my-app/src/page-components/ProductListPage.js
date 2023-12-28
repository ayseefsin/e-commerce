import { CategoryContainer } from "../components/CategoryContainer";
import { ContainerFilter } from "../components/ContainerFilter";
import { ProductListPageNav } from "../components/ProductListPageNav";

export const ProductListPage = () => {
  return (
    <div>
      <ProductListPageNav />
      <CategoryContainer />
      <ContainerFilter />
    </div>
  );
};
