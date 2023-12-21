import { FooterCard } from "./FooterCard";
import { FooterEnd } from "./FooterEnd";
import { FooterInput } from "./FooterInput";

export const Footer = () => {
  return (
    <div className="flex font-navText items-start justify-between p-[5vw] text-[#737373] ">
      <FooterCard />
      <FooterCard />
      <FooterCard />
      <FooterCard />
      <FooterInput />
    </div>
  );
};
