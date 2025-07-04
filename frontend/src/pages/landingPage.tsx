import Title from "../components/gameAssets/titleComponents/title";
import TitleBorder from "../components/gameAssets/titleComponents/title/titleBorder";
import "./landingPage.scss";

export default function LandingPage() {
  return (
    <div
      id="landing-page"
    >
      <div
        className="title-container"
      >
        <Title />
        <TitleBorder />
      </div>
    </div>
  )
};