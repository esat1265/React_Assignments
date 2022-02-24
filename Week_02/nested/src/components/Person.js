
import Header from "./Header.js";

const Person = (props) =>{
    return (
        <>
        <Header name="PERSON"/>
        
        {props.data.map(item =>(
        <div class="card" style={{ width: "18rem" }}>
        <svg
          class="card-img-top"
          src="holder.js/100px180"
          alt="Card image cap"
        ></svg>
        <div class="card-body">
          <p class="card-text">Some quick example </p>
          <p class="card-text">Some quick example </p>
          <p class="card-text">Some quick example </p>
        </div>
      </div>))}
        
        </>
    )
};

export default Person;