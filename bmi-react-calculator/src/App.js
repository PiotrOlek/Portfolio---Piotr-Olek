import React, { useState } from "react";
import "./index.css";

function App() {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Podaj prawidłową wagę i wzrost");
    } else {
      let bmiCalc = weight / (height * height);
      setBmi(bmiCalc.toFixed(1));

      // Logic for message
      if (bmiCalc < 18.5) {
        setMessage("Masz niedowagę");
      } else if (bmiCalc >= 18.5 && bmiCalc < 24.9) {
        setMessage("Masz odpowiednią wage");
      } else {
        setMessage("Masz nadwagę");
      }
    }
  };

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require("../src/assets/underweight.png");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      imgSrc = require("../src/assets/healthy.png");
    } else {
      imgSrc = require("../src/assets/overweight.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">Kalkulator BMI</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Waga (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Wzrost (m)</label>
            <input
              type="number"
              value={height}
              onChange={(event) => setHeight(parseFloat(event.target.value))}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Oblicz
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Odśwież
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Twoje BMI to: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
