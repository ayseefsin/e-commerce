import { BestSeller } from "../components/BestSeller";
import { EditorsPick } from "../components/EditorsPick";
import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <EditorsPick />
      <BestSeller />
    </div>
  );
};
