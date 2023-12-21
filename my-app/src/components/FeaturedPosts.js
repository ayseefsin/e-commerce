import { FeaturedHead } from "./FeaturedHead";
import { FeaturedPost } from "./FeaturedPost";

export const FeaturedPosts = () => {
  return (
    <div className=" flex flex-col gap-[6vw] font-navText ">
      <FeaturedHead />
      <div className="grid grid-cols-3 px-[10vw] py-[6vw] gap-[4vw] ">
        <FeaturedPost />
        <FeaturedPost />
        <FeaturedPost />
      </div>
    </div>
  );
};
