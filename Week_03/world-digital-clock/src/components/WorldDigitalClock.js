import React from 'react'
import Lausanne from './Lausanne';
import {useState} from 'react'
import Gaziantep from './Gaziantep';
import Canada from './Canada';


function WorldDigitalClock() {
   
     const [area, setArea] =useState(<Lausanne/>);
     const [zone, setZone] =useState("Lausanne");

    const LausanneTime = () => {
        setArea(<Lausanne/>);
        setZone("Lausanne");
    };

    const AntepTime = () => {
        setArea(<Gaziantep/>);
        setZone("Gaziantep");
    };

     const CanadaTime = () => {
        setArea(<Canada/>);
        setZone("Canada");
    }
    
  return (
    <>
    <button type="button" onClick={LausanneTime}>Lausanne</button>
    <button type="button" onClick={AntepTime}>Gaziantep</button>
    <button type="button" onClick={CanadaTime}>Canada</button>
    <h1>{zone}</h1>
    <h1>{area}</h1>

    </>
  )
}

export default WorldDigitalClock;