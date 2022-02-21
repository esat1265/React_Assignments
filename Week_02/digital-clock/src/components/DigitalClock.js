import React, { useState } from "react";

const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();//To get real time

  const [newtime, setNewtime] = useState(time); // To get current time we will use useState

  const UpdateTime = () => {
    setNewtime(time);
  }; // This function will update the time

  setInterval(UpdateTime, 1000); // Every second it runs the function

  return <h1>{newtime}</h1>;
};

export default DigitalClock;
