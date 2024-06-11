import React from "react";
import { Navbar, CTA } from './components';
import { Blog, Features, Footer, Possibility, WhatGPT3, Header } from "./containers";
import './App.css';


const App = () => {
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar  />
                <Header/>
            </div>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App