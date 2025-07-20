import React from "react";
import ReactDom from "react-dom/client";

function Tick(){
    const element = (
      <div>
        <h1>Hello worlfd</h1>
        <h2>it is {new Date(). toLocaleTimeString()}</h2>
      </div>
    );
    ReactDom.render(element, document.getElementById('root'));
  }
  setInterval(tick,1000);