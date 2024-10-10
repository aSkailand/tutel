import { useEffect, useState } from "react";
import "./friday.css";

export const Firday = ({ not }) => {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  const [availSpace_H] = useState(window.innerHeight - 20);
  const [availSpace_V] = useState(window.innerWidth - 20);

  useEffect(() => {
    var changeInterval = not ? 2000 : 500; // Time has to be in miliseconds. So, 3000 is 3 seconds
    setInterval(moveImage, changeInterval);
  }, []);

  function moveImage() {
    var randNum_V = Math.round(Math.random() * availSpace_V);
    var randNum_H = Math.round(Math.random() * availSpace_H);
    setY(randNum_V);
    setX(randNum_H);
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
