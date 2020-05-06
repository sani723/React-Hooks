import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState(true);
  const [size, setSize] = useState(true);
  const [textd, setTextd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);

    return () => clearTimeout(timer);
  });

  return (
    <h1
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        color: color ? "black" : "white",
        textDecoration: textd ? "underline" : "none",
        fontSize: size ? 30 : 50,
      }}
      onClick={() => {
        setColor(!color);
        setTextd(!textd);
        setSize(!size);
      }}
    >
      {time.toLocaleTimeString()}
    </h1>
  );
};

export default Hooks;
