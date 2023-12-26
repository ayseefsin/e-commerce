import { BestSeller } from "../components/BestSeller";
import { Brand } from "../components/Brand";
import { Carousel } from "../components/Carousel";
import { Carousel2 } from "../components/Carousel2";
import { ContainerFluid } from "../components/ContainerFluid";
import { EditorsPick } from "../components/EditorsPick";
import { FeaturedPosts } from "../components/FeaturedPosts";
import { Footer } from "../components/Footer";
import { FooterEnd } from "../components/FooterEnd";
import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <div>
      <Carousel />
      <EditorsPick />
      <BestSeller />
      <Carousel2 />
      <ContainerFluid />
      <FeaturedPosts />
      <Brand />
      <Footer />
      <FooterEnd />
    </div>
  );
};
