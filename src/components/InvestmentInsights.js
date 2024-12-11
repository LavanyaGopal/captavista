import React from "react";
import "./InvestmentInsights.css";

const insights = [
  { title: "5 Tips for Smart Investing", author: "John Doe" },
  { title: "Understanding Market Volatility", author: "Jane Smith" },
  { title: "Best Stocks to Buy in 2024", author: "Financial Guru" },
];

const InvestmentInsights = () => {
  return (
    <div className="investment-insights">
      <h2>Investment Insights</h2>
      <ul>
        {insights.map((insight, index) => (
          <li key={index}>
            <h3>{insight.title}</h3>
            <p>By {insight.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentInsights;
