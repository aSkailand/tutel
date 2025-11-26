import { useEffect, useState } from "react";
import "./friday.css";

export const Firday = ({ not }) => {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    var changeInterval = not ? 2000 : 500; // Time has to be in miliseconds. So, 3000 is 3 seconds
    setInterval(moveImage, changeInterval);
  }, []);

  function moveImage() {
    // Account for element size (approximately 200px wide, 50px tall to be safe)
    const maxTop = window.innerHeight - 100;
    const maxRight = window.innerWidth - 250;
    
    var randNum_V = Math.round(Math.random() * Math.max(0, maxRight));
    var randNum_H = Math.round(Math.random() * Math.max(0, maxTop));
    setY(randNum_H);
    setX(randNum_V);
  }
  return (
    <div
      className="friday"
      style={{
        fontSize: 24,
        color: "yellowgreen",
        position: "absolute",
        top: `${y}px`,
        right: `${x}px`,
        rotate: `${x}deg`,
      }}
    >
      {not ? "ikje fredag 👎😠😤" : "FREDAG 😀👍"}
    </div>
  );
};
