import Person from "./Person.js";
import Friends from "./Friends.js";
import Children from "./Children.js";


function PersonList(props) {  

    return (
      
         <div className="row">
           <div className="col-4"><Person personList={props.dataList}/></div>
           <div className="col-8 row"><Children childrenList={props.dataList.children}/><Friends friendsList={props.dataList.friends}/></div>
        </div>
    
    );
  }
  
  export default PersonList;