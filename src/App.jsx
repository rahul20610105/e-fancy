import React from "react";
import { Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LatestCollection from "./components/LatestCollection";
import ProductItem from "./components/ProductItem";
import Footer from "./components/Footer";
import ShopProvider from "./context/ShopContext";
import SignUp from "./pages/SignUp";
import TeamPage from "./pages/Team";

const App = () => {
  return (
    <ShopProvider>
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default Route */}
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:Id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />

            {/* Home route showing the latest collection */}
            <Route path="/latestCollection" element={<LatestCollection />} />

            {/* Dynamic route for showing the product details */}
            <Route path="/product/:id" element={<ProductItem />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ShopProvider>
  );
};

export default App;
