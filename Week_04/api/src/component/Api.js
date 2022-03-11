import { useState, useEffect } from 'react'

function Api() {

   const [api, setApi] = useState(); 

   const getApi = async () => {
    try {
        const response = await fetch('https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely');
        const data = await response.json();
        setApi(data)
    } catch (error) {
        console.log("Error")
    }
   };

   useEffect(()=>{getApi()},[]);

  return (
    
    console.log(api)
    
  )
}

export default Api