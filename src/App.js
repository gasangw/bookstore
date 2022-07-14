import './App.css';
import React from "react";
import Navbar from './Components/navbar';
import Books from './Components/listBooks';
// import {BrowserRouter as Router, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Books/>
    </div>
  );
}

export default App;
