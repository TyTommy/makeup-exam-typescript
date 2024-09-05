import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"; // Add if using Footer
import "./App.css";
import ProductPage from "./pages/ProductPage";
import ProductTypePage from "./pages/ProductTypePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container flex flex-col">
        <Header />
        <div className="py-5 flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/product-type/:productType"
              element={<ProductTypePage />}
            />
            <Route
              path="/products/:productId"
              element={<ProductPage />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
