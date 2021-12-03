import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../assests/casa.png";
import Detail from "./detailCasa";


const CardComponent = (props) => {
  console.log("Props-card", props);
  
  function nueva(id){
      <Detail
      homeId = {id}/>
  }

  return (
    <div className="card">
      <Image
        className="card-img-top"
        src={logo}
        alt="Card image cap"
        fluid
      />
      <div className="card-body">
        <h4 className="card-title">{props.casa.name}</h4>
        <p className="card-text">{props.casa.address}</p>
        <button onClick={nueva(props.casa.homeId)} className="btn btn-primary">Ver detalle</button>
      </div>
    </div>
  );
};

export default CardComponent;