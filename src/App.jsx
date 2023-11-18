import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyApi from "./assets/components/MyApi";

function App() {
  return (
    <>
      <h1>GIF's Explorer</h1>
      <MyApi />
    </>
  );
}

export default App;
