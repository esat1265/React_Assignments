/**
 * ANALYSIS
 * 1- I will create 3 components (Header/Card/Footer) in components folder.
 * 2- I will make import and export this components to the App.js
 * 3- I will use Bootstrap so, i will import bootstrap link in to the index.js
 * 4- After create the functional components i will render all of components and functions
 */
import './App.css';
import Header from './Components/Header.js'
import Card from './Components/Card.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <div>
      <Header/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
