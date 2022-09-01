 import React, {useState, useEffect} from 'react';
 import './App.css';
 import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import { Navbar } from "../src/components/navbar/Navbar";
 import Login from "./paginas/Login";
 import Home from "./paginas/Home";
 import Mercado from "./paginas/Mercado";
 import Register from "./paginas/Register";
 import Contrasenia from "./paginas/Recuperarcontrasenia";
 import Cuenta from "./paginas/Recuperarcuenta";


function App() {

  
  return (
      <Router>
         <div className="Navbar">
            <Navbar/>
          </div>  
        <Routes>
          <Route path="/home" element= {<Home />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/market" element = {<Mercado />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/reccuenta" element = {<Cuenta />} />
          <Route path="/reccontra" element = {<Contrasenia />} />
        </Routes>
      </Router>
    );
  

  
  /*return (
    <div className="App">
      <Navbar isScrolling = {scrollHeight}/>
      <COVER />
      <Slider/>
    </div>
  );*/
  
  }

export default App;
