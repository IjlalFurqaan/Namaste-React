import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeaderComponent  = () =>{
    return  <h1>Functional Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
