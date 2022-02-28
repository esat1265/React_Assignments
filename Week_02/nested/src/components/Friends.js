
import Header from "./Header.js";

const Friends = (props) =>{

    return (
    <>
      <Header name="FRIENDS"/>
      {props.friendsList.map(friend =>
      <div className="col-4">
        
        <div className="card" style={{ width: "18rem" }}>
           <img
             className="card-img-top"
             src={friend.avatar}
             alt="Card image cap"
           ></img>
           <div className="card-body">
               <p className="card-text">First name:{friend.firstName} </p>
               <p className="card-text">Gender:{friend.lastName} </p>
               <p className="card-text">Birthday:{friend.birthday} </p>
               <p className="card-text">phone:{friend.phone} </p>
           </div>
        </div>
     </div>
       )}
    </> 
    )
}

export default Friends;
