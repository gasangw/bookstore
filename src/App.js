import './App.css';
import React from "react";
import Navbar from './Components/navbar';
import Books from './Components/Book';
import Categories from './Components/categories'
import { Routes, Route } from 'react-router-dom';
// import {BrowserRouter as Router, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />}/>
          </Routes>
    </div>
  );
}

export default App;
