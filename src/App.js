import './App.css';
import React from "react";
import Navbar from './Components/navbar';
import EachBook from './Components/Book';
import Form from './Components/form';
// import {BrowserRouter as Router, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <EachBook />
      <Form />
    </div>
  );
}

export default App;
