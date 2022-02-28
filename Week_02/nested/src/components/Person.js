
import Header from "./Header.js";

const Person = (props) =>{

    return (
     
         <> 
         <Header name="PERSON"/>
        
          <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={props.personList.avatar}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <p className="card-text">Firstname:{props.personList.first_name} </p>
            <p className="card-text">Lastname:{props.personList.last_name} </p>
            <p className="card-text">Adress:{props.personList.adress} </p>
            <p className="card-text">Salary: {props.personList.salary}</p>
            <p className="card-text">Gender:{props.personList.gender} </p>
            <p className="card-text">Email:{props.personList.email} </p>
          </div>
        </div> 
        </> 
    )
};

export default Person;