import React from "react";
import "./StockDetails.css";

const mockStockData = [
  { name: "AAPL", price: 150.12, change: "+0.52%" },
  { name: "GOOGL", price: 2805.67, change: "-1.23%" },
  { name: "AMZN", price: 3470.39, change: "+2.45%" },
];

const StockDetails = () => {
  return (
    <div className="stock-details">
      <h2>Stock Market Updates</h2>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price (USD)</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {mockStockData.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              <td>{stock.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockDetails;
