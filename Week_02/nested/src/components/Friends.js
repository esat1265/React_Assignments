
import Header from "./Header.js";

const Friends = (props) =>{
    return (
        <>
         <Header name="FRIENDS"/>
         <div class="row m-auto">
         {props.data.map(item =>(
        <div class="card m-1" style={{ width: "18rem" }}>
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
      </div>))}</div>
        </>
    )
};

export default Friends;
