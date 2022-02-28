
import  dataList  from "./components/data.json";
import PersonList from "./components/PersonList.js";




function App() {  

  return (
   
    dataList.map(person =>
     <div className="App container">
        <PersonList  dataList={person}/> 
     </div> )
  )}

export default App;
