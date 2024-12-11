import React from "react";
import "./Navbar.css";
import capitavista_logo from '../assets/capitavista_logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"><img
          src={capitavista_logo}
          alt="Logo"
          className="navbar-logo"
          style={{
            height: "50px",
            maxHeight: "50px",
            width: "auto",
            maxWidth: "150px",
            objectFit: "contain"
          }}
        /></div>
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#home" style={{color: "black"}}>Home</a>
            <div className="dropdown-content">
              <a href="#section1" style={{color: "black"}}>Section 1</a>
              <a href="#section2">Section 2</a>
              <a href="#section3">Section 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#stocks" style={{color: "black"}}>Stocks</a>
            <div className="dropdown-content">
              <a href="#tech-stocks">Equity Market</a>
              <a href="#finance-stocks">Finance Stocks</a>
              <a href="#healthcare-stocks">Healthcare Stocks</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#stocks" style={{color: "black"}}>Futures</a>
            <div className="dropdown-content">
              <a href="#tech-stocks">Equity Market</a>
              <a href="#finance-stocks">Finance Stocks</a>
              <a href="#healthcare-stocks">Healthcare Stocks</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#stocks" style={{color: "black"}}>Options</a>
            <div className="dropdown-content">
              <a href="#tech-stocks">Equity Market</a>
              <a href="#finance-stocks">Finance Stocks</a>
              <a href="#healthcare-stocks">Healthcare Stocks</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#insights" style={{color: "black"}}>Bonds</a>
            <div className="dropdown-content">
              <a href="#analysis">Market Analysis</a>
              <a href="#articles">Articles</a>
              <a href="#opinions">Opinions</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#insights" style={{color: "black"}}>Mutual Funds</a>
            <div className="dropdown-content">
              <a href="#analysis">Market Analysis</a>
              <a href="#articles">Articles</a>
              <a href="#opinions">Opinions</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#insights" style={{color: "black"}}>Fixed Deposit</a>
            <div className="dropdown-content">
              <a href="#analysis">Market Analysis</a>
              <a href="#articles">Articles</a>
              <a href="#opinions">Opinions</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#insights" style={{color: "black"}}>ETF</a>
            <div className="dropdown-content">
              <a href="#analysis">Market Analysis</a>
              <a href="#articles">Articles</a>
              <a href="#opinions">Opinions</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#insights" style={{color: "black"}}>Cash & Cash Equivalents</a>
            <div className="dropdown-content">
              <a href="#analysis">Market Analysis</a>
              <a href="#articles">Articles</a>
              <a href="#opinions">Opinions</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#insights" style={{color: "black"}}>Commodities</a>
            <div className="dropdown-content">
              <a href="#analysis">Market Analysis</a>
              <a href="#articles">Articles</a>
              <a href="#opinions">Opinions</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#insights" style={{color: "black"}}>Real Estates</a>
            <div className="dropdown-content">
              <a href="#analysis">Market Analysis</a>
              <a href="#articles">Articles</a>
              <a href="#opinions">Opinions</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
