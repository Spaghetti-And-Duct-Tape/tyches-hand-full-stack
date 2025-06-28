import type { GrEnType } from "./title";

type GlitchLetterProp = {
  letterArray: GrEnType[];
  currentIndex: number; 
};

export default function GlitchLetters({
  letterArray,
  currentIndex
}: GlitchLetterProp) {
  return (
    <>
      { letterArray.map((char, i) => {
        const isGlitched = currentIndex === i;

        return (
          <span
            className="letter-wrapper"
            key={ i }
          >
            <span
              className="letter-shadow"
            >
              { char.english }
            </span>

            <span
              className={ `letter-visible ${ isGlitched ? "glitch-letter" : "" }` }
              data-text={ char.greek }
            >
              { isGlitched ? char.greek : char.english }
            </span>
          </span>
        )
      })}
    </>
  )
};