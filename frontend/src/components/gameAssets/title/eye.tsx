import "./eye.scss";

export default function Eye() {
  return (
    <div 
      className="eye-container"
    >
      <Arc
        position="top"
      />
      <Arc
        position="bottom" 
      />
    </div>
  )
};

function Arc({
  position
}: {
  position: "top" | "bottom"
}) {
  return (
    <div
      className={ `arc arc-${ position }` }
    >
      <svg 
        width="100%" 
        height="100%"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        <path 
          d="M 0,0 L 1,0 Q 100,140 199,0 L 200,0" 
          stroke="white" 
          strokeWidth="5"
          fill="transparent"
        />
      </svg>
    </div>
  )
};