import React from "react";
import ReactDOM from "react-dom/client";

function Hello() {
  return <p>Hey my name is KUNAL!</p>;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Hello /> 
  </React.StrictMode>
);
