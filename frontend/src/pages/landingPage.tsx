import { useEffect, useState } from "react";
import Title from "../gameAssets/title";
import "./landingPage.scss";

export default function LandingPage() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 3000)
  }, [])

  return (
    <div
      id="landing-page"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Title />

      <main
        style={{
          textAlign: "center",
          marginTop: "2rem"
        }}
        className={ `main-menu-container ${ isMenuVisible ? "visible" : "" }` }
      >
        <p>Sign up</p>
        <p>Login in</p>
        <p>Guest</p>
      </main>
    </div>
  )
};