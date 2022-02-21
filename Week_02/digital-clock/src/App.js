/**
 * ANALYSIS
 * 1- I will create a new components folder and a digitalClock.js file inside.
 * 2- In digitalClock file i will export the functions
 * 3- To get real time i will use new Date().toLocalTimeString
 * 4- To use this 'time' every one second i will use the useState() and setInterval() 
 * 5- Then i will render all functions to the app.js
 */
import "./App.css";
import DigitalClock from "./components/DigitalClock.js";

function App() {
  return (
    <div className="App">
      <DigitalClock />
    </div>
  );
}

export default App;
