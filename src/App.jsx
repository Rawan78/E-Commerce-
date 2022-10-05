import logo from './logo.svg';
import './App.css';
import { MyNav } from "./MyNav"
import { MySlider } from "./MySlider"
import { MyCard } from "./MyCard"
import { Products } from './Products';
import Counter from './counter';
import { useState } from "react";
import { BrowserRouter, Navigate , Route, Routes } from 'react-router-dom' ;
import Home from './Home';
import About from './About';
import ErrorPage from './ErrPage';
import Footer from './footer';
import Contact from './Contact';
import { Shopping } from './Shopping';


function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <MyNav />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About"  element={<About />}/>
            <Route path="/Contact"  element={<Contact />}/>
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      
        </div>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
