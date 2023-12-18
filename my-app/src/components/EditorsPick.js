import { CategoryCard } from "./CategoryCard";

export const EditorsPick = () => {
  return (
    <div className="px-[12,1875rem] py-[5rem] gap-[3rem] ">
      <div className="flex flex-col py-[5rem] gap-5 items-center font-navText ">
        <div>
          <div className="text-[#252B42] font-bold text-2xl flex flex-col items-center">
            <h3>EDITOR’S PICK</h3>
          </div>
          <div className="text-sm font-normal tracking-[.0125em] text-[#737373] ">
            <p>Problems trying to resolve the conflict between </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 w-3/4">
          <div className="col-start-1 col-end-3 ">
            <CategoryCard />
          </div>
          <div className="col-start-3 col-end-5  ">
            <div className="grid grid-cols-2 grid-rows-1 gap-8">
              <div className="flex">
                <CategoryCard />
              </div>
              <div className="grid grid-cols-1 grid-rows-2 gap-8">
                <div className="row-start-1 row-end-1 ">
                  <CategoryCard />
                </div>
                <div className="row-start-2 row-end-2 ">
                  <CategoryCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
