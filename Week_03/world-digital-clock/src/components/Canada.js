import React from 'react';
import { useState} from 'react';


function Canada() {
    const [hours , setHours] = useState(0);
    const [minutes , setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    setInterval(()=>{
        const time = new Date();
        setHours(time.getHours() - 6) ;
        setMinutes(time.getMinutes()) ;
        setSeconds(time.getSeconds()) ;
    },1000)

  return (
    <h1>{hours}:{minutes}:{seconds}</h1>
  )
}

export default Canada