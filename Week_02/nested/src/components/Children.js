
import Header from "./Header.js";

const Children = (props) =>{

    let childrenList = props.data.map(item =>(item.children));
    console.log(childrenList)
    return (
        <>
         <Header name="CHILDREN"/>
         <div class="row m-auto">
         {childrenList.map(item =>(
        <div class="card m-1" style={{ width: "18rem" }}>
        <svg
          class="card-img-top"
          src={item.avatar}
          alt="Card image cap"
        ></svg>
        <div class="card-body">
          <p class="card-text">First name:{item} </p>
          <p class="card-text">Some quick example </p>
          <p class="card-text">Some quick example </p>
        </div>
      </div>))}</div>
        </>
    )
};

export default Children;