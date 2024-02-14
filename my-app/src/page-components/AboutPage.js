import { AboutPageBrand } from "../components/AboutPageBrand";
import { AboutPageContent } from "../components/AboutPageContent";
import { AboutPageHeader } from "../components/AboutPageHeader";
import { AboutPageInfo } from "../components/AboutPageInfo";
import { AboutPageTeam } from "../components/AboutPageTeam";
import { AboutPageVideo } from "../components/AboutPageVideo";
import { AboutPageWork } from "../components/AboutPageWork";

export const AboutPage = () => {
  return (
    <div className="font-navText">
      <AboutPageHeader />
      <AboutPageContent />
      <AboutPageInfo />
      <AboutPageVideo />
      <AboutPageTeam />
      <AboutPageBrand />
    </div>
  );
};
