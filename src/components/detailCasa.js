import React, { useEffect, useState } from "react";
import CardComponent from "./detailCard";
import Table from "./table";
import Graph from "./graph";
import { FormattedMessage } from "react-intl";

function Detail(props){

    const [casa, setCasa] = useState([]);
    const [selectedCasa, setSelectedCasa] = useState(null);
    const [select, setSelect] = useState(false);

    console.log("props", props.casa)
    const url = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
    
    useEffect(() => {
      if(!navigator.onLine){
        if (localStorage.getItem("casa") === null) {
          setCasa([]);
        } else {
          setCasa(JSON.parse(localStorage.getItem("casa")).filter((el) => el.homeId === props.casa.id));
        }
      }else{
        fetch(url)
        .then((resp) => resp.json())
        .then((jsonData) => {
            console.log("JSON Data", jsonData);
            setCasa(jsonData.filter((el) => el.homeId === props.casa.id));
            localStorage.setItem("casa", JSON.stringify(jsonData));
        })
        .catch((error) => console.error(error));
      }
        
      }, [props, props.casa]);

      console.log("actual", casa)
      return(
        <div className="Detail">
          <br></br>
          <br></br>
          <br></br>
          <h2 style={{ textAlign: "left"}}><FormattedMessage id="Rooms" /></h2>
            <div className = "row">
              <div className="col-sm-6">
                <div className = "row">
                  {casa.map((e, i) => (
                    <div className="col" id="cardCasa"  onClick={function() {
                      setSelectedCasa(e);
                      setSelect(true);
                      console.log("selectedRoom", selectedCasa);
                    }}>
                        <CardComponent
                        key={i}
                        casa={e}
                        />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-sm-6">
                {select && <Table room={selectedCasa} />}
              </div>
              
            </div>
            <br></br>
            <br></br>
            <Graph rooms = {casa}/>
        </div>
      )
}

export default Detail