import React, { useState } from "react";
import "./App.css";
import tpaita from "./images/tpaita.webp";
import toppi from "./images/toppi.webp";
import paita from "./images/paita.jpg";
import farkut from "./images/farkut.jpg";
import legginssit from "./images/legginssit.webp";
import hame from "./images/hame.jpg";
import lenkkarit from "./images/lenkkarit.webp";
import mustatlenkkarit from "./images/mustatlenkkarit.webp";
import kenkä from "./images/kenkä.webp";
import getImageConditions from "./imageConditions";


function App() {
  const [tpaitaCount, SetTpaitaCount] = useState(0);
  const [toppiCount, SetToppiCount] = useState(0);
  const [paitaCount, SetPaitaCount] = useState(0);
  const [farkutCount, SetFarkutCount] = useState(0);
  const [legginssitCount, SetLegginssitCount] = useState(0);
  const [hameCount, SetHameCount] = useState(0);
  const [lenkkaritCount, SetLenkkaritCount] = useState(0);
  const [mustatlenkkaritCount, SetMustatlenkkaritCount] = useState(0);
  const [kenkäCount, SetKenkäCount] = useState(0);


  const imageConditions = getImageConditions(
    tpaitaCount,
    toppiCount,
    paitaCount,
    farkutCount,
    legginssitCount,
    hameCount,
    lenkkaritCount,
    mustatlenkkaritCount,
    kenkäCount
  );

  return (
    <div>
      <div className="header">
        <h1>Yksinkertainen asun sunnittelu sivu</h1>
      </div>

      <div className="main">
        <div className="leftcolumn">
          <div className="container">
            <div className="side side-content-center">
              <img className="img.s1" src={tpaita} alt="tpaita" />
              <label htmlFor="tpaita">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetTpaitaCount(tpaitaCount - 1)}
                >
                  -
                </button>
                <input
                  id="tpaita"
                  type="number"
                  value={tpaitaCount}
                  onChange={(e) => SetTpaitaCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetTpaitaCount(tpaitaCount + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="side side-content-center">
              <img src={toppi} alt="toppi" />
              <label htmlFor="toppi">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetToppiCount(toppiCount - 1)}
                >
                  -
                </button>
                <input
                  id="toppi"
                  type="number"
                  value={toppiCount}
                  onChange={(e) => SetToppiCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetToppiCount(toppiCount + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="side side-content-center">
              <img src={paita} alt="paita" />
              <label htmlFor="paita">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetPaitaCount(paitaCount - 1)}
                >
                  -
                </button>
                <input
                  id="paita"
                  type="number"
                  value={paitaCount}
                  onChange={(e) => SetPaitaCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetPaitaCount(paitaCount + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="side side-content-center">
              <img src={farkut} alt="farkut" />
              <label htmlFor="farkut">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetFarkutCount(farkutCount - 1)}
                >
                  -
                </button>
                <input
                  id="farkut"
                  type="number"
                  value={farkutCount}
                  onChange={(e) => SetFarkutCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetFarkutCount(farkutCount + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="side side-content-center">
              <img src={legginssit} alt="legginssit" />
              <label htmlFor="legginssit">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetLegginssitCount(legginssitCount - 1)}
                >
                  -
                </button>
                <input
                  id="legginssit"
                  type="number"
                  value={legginssitCount}
                  onChange={(e) => SetLegginssitCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetLegginssitCount(legginssitCount + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="side side-content-center">
              <img src={hame} alt="hame" />
              <label htmlFor="hame">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetHameCount(hameCount - 1)}
                >
                  -
                </button>
                <input
                  id="hame"
                  type="number"
                  value={hameCount}
                  onChange={(e) => SetHameCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetHameCount(hameCount + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="side side-content-center">
              <img className="img.s1" src={lenkkarit} alt="lenkkarit" />
              <label htmlFor="lenkkarit">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetLenkkaritCount(lenkkaritCount - 1)}
                >
                  -
                </button>
                <input
                  id="lenkkarit"
                  type="number"
                  value={lenkkaritCount}
                  onChange={(e) => SetLenkkaritCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetLenkkaritCount(lenkkaritCount + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="side side-content-center">
              <img src={mustatlenkkarit} alt="mustatlenkkarit" />
              <label htmlFor="mustatlenkkarit">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetMustatlenkkaritCount(mustatlenkkaritCount - 1)}
                >
                  -
                </button>
                <input
                  id="mustatlenkkarit"
                  type="number"
                  value={mustatlenkkaritCount}
                  onChange={(e) => SetMustatlenkkaritCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetMustatlenkkaritCount(mustatlenkkaritCount + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="side side-content-center">
              <img src={kenkä} alt="kenkä" />
              <label htmlFor="kenkä">Valitse määrä: </label>
              <div className="counter-container">
                <button
                  onClick={() => SetKenkäCount(kenkäCount - 1)}
                >
                  -
                </button>
                <input
                  id="kenkä"
                  type="number"
                  value={kenkäCount}
                  onChange={(e) => SetKenkäCount(Number(e.target.value))}
                  className="counter"
                />
                <button
                  onClick={() => SetKenkäCount(kenkäCount + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

        </div>

        <body>
          <div className="container2">
            {imageConditions.map((item, index) => {
              if (item.condition()) {
                return (
                  <div key={index}>
                    <div className="image">
                      <img src={item.image} alt={`outfit${index + 1}`} />
                      <div className="text-box">
                        <p className="text1">{item.info}</p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </body>
    

      </div>
    </div>
  );
}

export default App;
