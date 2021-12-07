import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../assests/casa.png";
import logo2 from "../assests/loft.jpg";


const CardComponent = (props) => {
  
  let imagen = logo
  if (props.casa.type === 'loft'){
    imagen = logo2
  }

  return (
    <div className="card" style={{cursor:'pointer'}} >
      <Image
        className="card-img-top"
        src={imagen}
        alt="Card image cap"
        fluid
      />
      <div className="card-body">
        <h5 className="card-title">{props.casa.name}</h5>
        <p className="card-text">{props.casa.address}</p>
      </div>
    </div>
  );
};

export default CardComponent;