import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </>
    )
}

export default App;
