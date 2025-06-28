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

const glitchable = greekToEnglishMap.map((_, i) => i);

export default function Title() {
  const [text, setText] = useState(greekToEnglishMap.map(letter => letter.english));
  const [glitchedIndex, setGlitchedIndex] = useState<number | null>(null);

  useEffect(() => {
    scheduleGlitch();
  }, []);

  function scheduleGlitch() {
    const randomInterval = Math.floor(5000 + Math.random() * 10001);
    setTimeout(() => {
      const randomIndex = glitchable[Math.floor(Math.random() * glitchable.length)];
      startGlitchAnimation(randomIndex);

      scheduleGlitch();
    }, randomInterval)
  };

  async function startGlitchAnimation(number: number) {
    await wait(2200);
    setGlitchedIndex(number);
    setText(prev => {
      const updated = [...prev];
      updated[number] = greekToEnglishMap[number].greek;
      return updated;
    });

    await wait(400);
    setGlitchedIndex(null);
    setText(prev => {
      const updated = [...prev];
      updated[number] = greekToEnglishMap[number].english;
      return updated;
    });
  };



  return(
    <h1 className="glitch-title">
      { text.map((char, i) => (
        <span 
          className="letter-wrapper"
          key={ i }
        >
          <span
            className="letter-shadow"
          >
            { greekToEnglishMap[i].english }
          </span>

          <span
            className={ `letter-visible ${ glitchedIndex === i ? "glitch-letter" : "" }` }
            data-text={ char }
          >
            { char }
          </span>
        </span>
      ))}
    </h1>
  )
};