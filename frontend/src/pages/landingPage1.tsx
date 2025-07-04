import { useEffect, useState } from "react";
import "./landingPage.scss";
import Title from "../components/gameAssets/title/title";
import InkArt from "../components/gameAssets/title/inkArt";

export default function LandingPage() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 3000)
  }, []);

  return (
    <div
      id="landing-page"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >  
        <Title />
        <div
          className="title-border"
          style={{
            display: "flex"
          }}
        >
          <InkArt />
          <span className="glitch-title">
            &#9829;
          </span>
          <span className="glitch-title">
            &#9830;
          </span>
          <span className="glitch-title">
            &#9827;
          </span>
          <span className="glitch-title">
            &#9824;
          </span>
          <InkArt />
        </div>
      </div>

      <main
        style={{
          padding: "1rem 0.5rem",
          gap: "0.5rem",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "1rem",
          display: "flex",
          width: "100%",
        }}
        className={ `main-menu-container ${ isMenuVisible ? "visible" : "" }` }
      >
        <TitleButton
          text="Sign up" 
        />
        <TitleButton
          text="Log in"
        />
        <TitleButton
          text="Guest"
        />
        <TitleButton
          text="Settings"
        />
      </main>
    </div>
  )
};

function TitleButton({ text } : { text: string }) {
  return (
    <button
      className="title-button"
    >
      { text }
    </button>
  )
}