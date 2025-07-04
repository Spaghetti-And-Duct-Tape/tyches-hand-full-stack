import InkArt from "../inkArt/inkArt";

const fourSuites = [
  "♠",
  "♥",
  "♦",
  "♣"
]

export default function TitleBorder() {
  return (
    <div
      className="title-border"
    >
      <InkArt />

      { fourSuites.map((suit) => (
        <span
          className="glitch-title"
        >
          { suit }
        </span>
      ))}

      <InkArt />
    </div>
  )
};