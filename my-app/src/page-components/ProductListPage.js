import { CategoryContainer } from "../components/CategoryContainer";
import { ContainerFilter } from "../components/ContainerFilter";
import { Pagination } from "../components/Pagination";
import { ProductList } from "../components/ProductList";
import { ProductListPageFooter } from "../components/ProductListPageFooter";
import { ProductListPageNav } from "../components/ProductListPageNav";

export const ProductListPage = () => {
  return (
    <div>
      <ProductListPageNav />
      <CategoryContainer />
      <ContainerFilter />
      <ProductList />
      <Pagination />
      <ProductListPageFooter />
    </div>
  );
};
