import React from "react";

import './App.css'
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Logo from '../components/template/Logo';
import { BrowserRouter } from 'react-router-dom'
import Routes from "./Routes";

const App = () => {
    return (

        <BrowserRouter>

            <div className='app'>
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App