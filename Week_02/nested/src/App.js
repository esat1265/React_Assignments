import Person from "./components/Person.js";
import Friends from "./components/Friends.js";
import Children from "./components/Children.js";
import { dataList } from "./data.js";


function App() {
  return (
    <div class="App container">
      <div class="row">
        <div class="col-4"><Person data = {dataList}/></div>
        <div class="col-8"><Children data = {dataList}/><Friends data = {dataList}/></div>
      </div>
    </div>
  );
}

export default App;
