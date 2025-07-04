import { useEffect, useRef, useState } from "react";
import "@fontsource/cinzel/700.css";
import { wait } from "../../../utils/utils";
import "./title.scss";
import GlitchLetters from "./glitchLetters";

export type GrEnType = {
  greek: string;
  english: string;
}

 const greekToEnglishMap: GrEnType[] = [
  { greek: 'τ', english: 'T' },
  { greek: 'ύ', english: 'y' },
  { greek: 'χ', english: 'c' },
  { greek: 'η', english: 'h' },
  { greek: 'ς', english: "e's" },
  { greek: ' ', english: ' ' },
  { greek: 'χ', english: 'H' },
  { greek: 'ε', english: 'a' },
  { greek: 'ί', english: 'n' },
  { greek: 'ρ', english: 'd' },
];

const glitchable: number[] = greekToEnglishMap.map((_, i) => i);

export default function Title() {
  const [glitchedIndex, setGlitchedIndex] = useState<number>(-1);
  const glitchActive = useRef(false);
  const lastIndex = useRef(-1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current ?? undefined);
    };
  }, []);

  //Returns a new non-repeating glitch index
  function getNewGlitchIndex() {
    let newIndex = lastIndex.current;

    while (newIndex === lastIndex.current || newIndex === 5) {
      newIndex = glitchable[Math.floor(Math.random() * glitchable.length)];
    };

    lastIndex.current = newIndex;
    return newIndex;
  };

  async function startGlitchAnimation(index: number) {
    const glitchDelay = 400;
    const glitchCoolDown = 300;

    glitchActive.current = true;
    setGlitchedIndex(index);

    await wait(glitchDelay);
    setGlitchedIndex(-1);

    //Glitch cooldown
    await wait(glitchCoolDown);
    glitchActive.current = false;
  };

  //Randomly glitches the text
  function scheduleGlitch() {
    const randomInterval = Math.floor(5000 + Math.random() * 5001);

    timeoutRef.current = setTimeout(async () => {
      if (glitchActive.current) return scheduleGlitch();

      const index = getNewGlitchIndex();
      await startGlitchAnimation(index);

      scheduleGlitch();
    }, randomInterval);
  };

  function handleTitleLoads() {
    scheduleGlitch();
  }

  return(
    <h1 
      className="glitch-title"
      style={{
        margin: "0",
        display: "flex",
        alignItems: "center"
      }}
      onAnimationEnd={ handleTitleLoads }
    >
      <GlitchLetters
        letterArray={ greekToEnglishMap }
        currentIndex={ glitchedIndex } 
      />
    </h1>
  )
};