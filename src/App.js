import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import RateCard from "./lib/component/ratecard/rate/RateCard";

function App() {
  return (
    <div className="app">
      <RateCard
        //card styling props -> you can play around with them
        cardBackgroundColor={"lightgray"}
        cardSpacing={10}
        cardFontStyle={"Ubuntu"}
        cardGradient={true}
        gradientType={'linear-gradient'}
        gradientDirection={'right'}
        gradientColorOne={'lightgray'}
        gradientColorTwo={'bisque'}
      />
    </div>
  );
}

export default App;
