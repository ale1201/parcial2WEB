import React, { useEffect, useState } from "react";
import CardComponent from "./detailCard";
function Detail(props){
    const [casa, setCasa] = useState({});

    const url = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((jsonData) => {
            console.log("JSON Data", jsonData);
            setCasa(jsonData.filter((el) => el.homeId === props.homeId));
        })
        .catch((error) => console.error(error));
      }, []);

      return(
        <div className="Detail">
            <div className = "row">
              {casa.map((e, i) => (
                <div className="col" id="cardCasa">
                    <CardComponent
                    key={i}
                    casa={e}
                    />
                </div>
              ))}
        </div>
            {console.log(casa)}
        </div>
      )
}

export default Detail