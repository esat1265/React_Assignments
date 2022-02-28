import Header from "./Header.js";

const Children = (props) => {

  return ( 
  <>
    <Header name="CHILDREN" />
     {props.childrenList.map(child => 
   
    <div className="col-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={child.avatar}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <p className="card-text">First name:{child.firstName} </p>
          <p className="card-text">Gender:{child.gender} </p>
          <p className="card-text">Birthday:{child.birthday}  </p>
        </div>
      </div>
    </div>
  )}
  </>
  )}
       
  

export default Children;
