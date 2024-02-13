import { CategoryCard } from "./CategoryCard";

export const EditorsPick = () => {
  return (
    <div className="px-[12vw] py-[5vw] gap-[3vw] ">
      <div className="flex flex-col py-[5vw] gap-[1.5vw] items-center font-navText ">
        <div>
          <div className="text-[#252B42] font-bold text-2xl flex flex-col items-center">
            <h3>EDITOR’S PICK</h3>
          </div>
          <div className=" md:text-[3vw] text-center text-[1.2vw]  font-normal tracking-[.0125em] text-[#737373] ">
            <p>Problems trying to resolve the conflict between </p>
          </div>
        </div>
        <div className="md:hidden grid grid-cols-4 gap-[1vw] w[100%]">
          <div className="col-start-1 col-end-3 ">
            <CategoryCard />
          </div>
          <div className="col-start-3 col-end-5  ">
            <div className="grid grid-cols-2 grid-rows-1 gap-[1vw]">
              <div className="flex">
                <CategoryCard />
              </div>
              <div className="grid grid-cols-1 grid-rows-2 gap-[1vw]">
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
        <div className="hidden  md:flex flex-col w-[100%] ">
          <div>
            <CategoryCard />
          </div>
          <div>
            <CategoryCard />
          </div>
          <div className="grid grid-cols-1 ">
            <div className="">
              <CategoryCard />
            </div>
            <div className="">
              <CategoryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
