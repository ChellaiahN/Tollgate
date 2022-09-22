import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Listpage from "./Listpage";
import  ViewTolls  from "./ViewTolls";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <h1>TOLL GATE MANAGEMENT APPLICATION </h1>
    <div>
      <Routes>
      <Route path="/" element = {<Listpage/>}/>
      <Route path="/viewtolls" element = {<ViewTolls/>}/>
      </Routes>
      
    </div>
  </div>
</BrowserRouter>
  )
}

export default App;
