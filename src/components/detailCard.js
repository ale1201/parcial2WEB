import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../assests/casa.png";


const CardComponent = (props) => {
  console.log("Props-card", props);

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{props.casa.name}</p>
      </div>
      <Image
        className="card-img-top"
        src={logo}
        alt="Card image cap"
        fluid
      />
      
    </div>
  );
};

export default CardComponent;