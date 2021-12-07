import React from "react";
import Image from "react-bootstrap/Image";
import lr from "../assests/living.png";
import k from "../assests/kitchen.png";
import dr from "../assests/comedor.png";
import { FormattedMessage } from "react-intl";


const CardComponent = (props) => {

  let imagen = lr
  let name = <FormattedMessage id="LR" />
  if (props.casa.name === 'Dinner room'){
    imagen = dr
    name = <FormattedMessage id="DR" />
  }
  else if (props.casa.name === 'Kitchen'){
    imagen = k
    name = <FormattedMessage id="K" />
  }

  

  return (
    <div className="card" style={{cursor:'pointer'}}>
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
      <Image
        className="card-img-top"
        src={imagen}
        alt="Card image cap"
        fluid
      />
      
    </div>
  );
};

export default CardComponent;