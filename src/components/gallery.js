import React, { useEffect, useState } from "react";
import CardComponent from "./card";
import Detail from "./detailCasa";
import { FormattedMessage } from "react-intl";


function Gallery() {
    const [casas, setCasas] = useState([]);
    const [selectedCasa, setSelectedCasa] = useState(null);
    const [isSelect, setSelect] = useState(false);

    const url = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
    

    useEffect(() => {
      if(!navigator.onLine){
        if (localStorage.getItem("casas") === null) {
          setCasas([]);
        } else {
          setCasas(JSON.parse(localStorage.getItem("casas")));
        }
      } else{
        fetch(url)
        .then((resp) => resp.json())
        .then((jsonData) => {
            console.log("JSON Data", jsonData);
            setCasas(jsonData);
            localStorage.setItem("casas", JSON.stringify(jsonData));
        })
        .catch((error) =>{ 
          console.error(error)
          if (localStorage.getItem("casas") === null) {
            setCasas([]);
          } else {
            setCasas(JSON.parse(localStorage.getItem("casas")));
          }
        });
      }
      }, []);

    return (
      <div className="App">
        <br></br>
        <div className="container">
          <h1 style={{ textAlign: "left"}}><FormattedMessage id="Spaces" /></h1>

          {console.log("casas", casas)}
          <div className = "row">
                {casas.map((e, i) => (
                  <div className="col-sm-3" id="cardCasa" onClick={function() {
                    setSelectedCasa(e);
                    setSelect(true);
                    console.log("selectedSpace", selectedCasa);
                  }}>
                      <CardComponent
                        key={i}
                        casa={e}
                      />
                  </div>
                ))}
          </div>
          <div>
            {isSelect && <Detail casa={selectedCasa} />}
          </div>
        </div>
      </div>
    );
  }

export default Gallery;
