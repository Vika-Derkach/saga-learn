import React from "react";
import { useSelector } from "react-redux";

function App() {
  const store = useSelector((store) => store);
  console.log(store);
  return <div className="App">Redux Saga tutorial</div>;
}

export default App;
