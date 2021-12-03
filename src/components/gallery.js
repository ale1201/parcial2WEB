import React, { useEffect, useState } from "react";
import CardComponent from "./card";


function Gallery() {
    const [casas, setCasas] = useState([]);
    const [selectedCasa, setSelectedCasa] = useState(null);
    const url = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((jsonData) => {
            console.log("JSON Data", jsonData);
            setCasas(jsonData);
        })
        .catch((error) => console.error(error));
    
      }, []);

    return (
      <div className="App">
        <h1>My Spaces</h1>

        {console.log("casas", casas)}
        <div className = "row">
              {casas.map((e, i) => (
                <div className="col" id="cardCasa">
                    <CardComponent
                    key={e.id}
                    casa={e}
                    selectedCasa={setSelectedCasa}
                    />
                </div>
              ))}
        </div>
      </div>
    );
  }

export default Gallery;
