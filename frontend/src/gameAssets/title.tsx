import { useEffect, useState } from "react";
import "@fontsource/cinzel/700.css";
import { wait } from "../utils/utils";
import "./title.scss";

 const greekToEnglishMap = [
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

export default function Title() {
  const [text, setText] = useState(greekToEnglishMap.map(letter => letter.english));
  const [glitchedIndex, setGlitchedIndex] = useState<number | null>(null);

  useEffect(() => {
    const glitchable = greekToEnglishMap.map((_, i) => i);
    const randomInterval = Math.floor(3000 + Math.random() * 7001);
    const glitchInterval = setInterval(() => {
      const randomIndex = glitchable[Math.floor(Math.random() * glitchable.length)];
      startGlitchAnimation(randomIndex);
    }, randomInterval);

    return () => clearInterval(glitchInterval);
  }, []);

  async function startGlitchAnimation(number: number) {
    await wait(2200);
    setGlitchedIndex(4);
    setText(prev => {
      const updated = [...prev];
      updated[4] = greekToEnglishMap[4].greek;
      return updated;
    });

    await wait(400);
    setGlitchedIndex(null);
    setText(prev => {
      const updated = [...prev];
      updated[4] = greekToEnglishMap[4].english;
      return updated;
    });
  };



  return(
    <h1 className="glitch-title">
      { text.map((char, i) => (
        <span
          key={ i }
          className={ glitchedIndex === i ? 'glitch-letter' : '' }
          data-text={ char }
          style={{
            fontFamily: 'Cinzel, serif',
            marginLeft: char === " " ? "20px" : "0"
          }}
        >
          { char }
        </span>
      ))}
    </h1>
  )
};