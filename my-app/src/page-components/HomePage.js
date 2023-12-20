import { BestSeller } from "../components/BestSeller";
import { Carousel2 } from "../components/Carousel2";
import { ContainerFluid } from "../components/ContainerFluid";
import { EditorsPick } from "../components/EditorsPick";
import { FeaturedPosts } from "../components/FeaturedPosts";
import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <EditorsPick />
      <BestSeller />
      <Carousel2 />
      <ContainerFluid />
      <FeaturedPosts />
    </div>
  );
};
