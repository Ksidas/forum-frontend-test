import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
const API_URL = process.env.REACT_APP_API_URL;

// fetch(`${API_URL}/api/questions`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching questions:", error);
//   });
