import { ProductListPageFooter } from "./ProductListPageFooter";

export const AboutPageBrand = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] md:text-center flex flex-col items-center gap-[6vw] mt-[10vw] p-[10vw]">
        <h2 className="text-5xl md:text-3xl font-bold">
          Big Companies Are Here
        </h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <ProductListPageFooter />
    </div>
  );
};
