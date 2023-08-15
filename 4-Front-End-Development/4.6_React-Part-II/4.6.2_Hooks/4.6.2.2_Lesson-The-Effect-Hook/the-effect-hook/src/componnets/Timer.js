import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect((prev) => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (time > 10) {
      setTime(0);
    }
  }, [time]);

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input onChange={handleChange} value={name} type="text" />
    </>
  );
}
