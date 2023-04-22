import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./home";
import Contact from "./contact";
import Menu from "./menu";
import AboutUs from "./AboutUs";
import CustomizedChocolates from "./CustomizedChocolates";
import Chocolateitem1 from "./Chocolateitem1";
import Chocolateitem2 from "./Chocolateitem2";
import Chocolateitem3 from "./Chocolateitem3";
import Chocolateitem4 from "./Chocolateitem4";
import Chocolateitem5 from "./Chocolateitem5";
import Chocolateitem6 from "./Chocolateitem6";
import Chocolateitem7 from "./Chocolateitem7";
import Chocolateitem8 from "./Chocolateitem8";
import LocalStore from "./LocalStore";
import Details from "./details";
import Checkout from "./Checkout";


const Paths = () => {
    return (
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/CustomizedChocolates" element={<CustomizedChocolates />} /> 
                <Route path="/contact" element={<Contact />} />
                <Route path="/Chocolateitem1" element={<Chocolateitem1/>}/>
                <Route path="/Chocolateitem2" element={<Chocolateitem2/>}/>
                <Route path="/Chocolateitem3" element={<Chocolateitem3/>}/>
                <Route path="/Chocolateitem4" element={<Chocolateitem4/>}/>
                <Route path="/Chocolateitem5" element={<Chocolateitem5/>}/>
                <Route path="/Chocolateitem6" element={<Chocolateitem6/>}/>
                <Route path="/Chocolateitem7" element={<Chocolateitem7/>}/>
                <Route path="/Chocolateitem8" element={<Chocolateitem8/>}/>
                <Route path="/localstore" element={<LocalStore/>}/>
                <Route path="/details" element={<Details />} />
                <Route path="/Checkout" element={<Checkout />} />
                
                


            </Routes>
        </BrowserRouter>
    );
}

export default Paths;