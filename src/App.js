import React from "react";
import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter, Router, Routes, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails/>}/>
          <Route >404 Page Not Found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
