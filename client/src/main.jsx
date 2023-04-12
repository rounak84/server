import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import About from "./Components/aboutus";
import Contact from "./Components/contactus";
import Menu from "./Components/Menu/buypg";
import Navbar from "./Components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Components/auth";
import AdminProduct from "./Components/sellerform";
import Cart from "./Components/cart";
import './Components/Css/index.css'
import Auction from "./Components/auction"
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<AdminProduct />} />                
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/auction" element={<Auction/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);