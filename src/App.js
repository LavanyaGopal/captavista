import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StockDetails from "./components/StockDetails";
import InvestmentInsights from "./components/InvestmentInsights";
import "./App.css";
import CardView from "./components/CardView";
import SectionView from "./components/SectionView";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import InvestmentCalculator from "./components/InvestmentCalculator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <InvestmentCalculator />
      <InvestmentInsights />
      {/* <StockDetails /> */}
      {/* <CardView /> */}
      <SectionView />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
