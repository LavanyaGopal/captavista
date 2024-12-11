import React, { useState } from "react";

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [targetTime, setTargetTime] = useState("");
  const [riskTolerance, setRiskTolerance] = useState("moderate");
  const [marketPrediction, setMarketPrediction] = useState("stable");
  const [result, setResult] = useState(null);

  const calculatePlan = () => {
    if (!investmentAmount || isNaN(investmentAmount) || investmentAmount <= 0) {
      setResult("Please enter a valid investment amount.");
      return;
    }

    if (!targetAmount || isNaN(targetAmount) || targetAmount <= 0) {
      setResult("Please enter a valid target amount.");
      return;
    }

    if (!targetTime || isNaN(targetTime) || targetTime <= 0) {
      setResult("Please enter a valid target time in years.");
      return;
    }

    let allocation = {};

    switch (riskTolerance) {
      case "high":
        allocation = {
          stocks: 80,
          bonds: 10,
          cash: 10,
        };
        break;
      case "moderate":
        allocation = {
          stocks: 60,
          bonds: 30,
          cash: 10,
        };
        break;
      case "low":
        allocation = {
          stocks: 40,
          bonds: 50,
          cash: 10,
        };
        break;
      default:
        allocation = {
          stocks: 60,
          bonds: 30,
          cash: 10,
        };
    }

    let adjustmentFactor = 1;

    if (marketPrediction === "bullish") {
      adjustmentFactor = 1.2;
    } else if (marketPrediction === "bearish") {
      adjustmentFactor = 0.8;
    }

    const plan = {
      stocks: ((investmentAmount * allocation.stocks) / 100) * adjustmentFactor,
      bonds: ((investmentAmount * allocation.bonds) / 100) * adjustmentFactor,
      cash: ((investmentAmount * allocation.cash) / 100) * adjustmentFactor,
    };

    const suggestedIndustries = riskTolerance === "high"
      ? [
          { name: "Technology", reason: "High growth potential due to innovation and global digital transformation." },
          { name: "Healthcare", reason: "Advancements in biotech and increasing demand for medical solutions." },
          { name: "Renewable Energy", reason: "Global push towards sustainability and clean energy adoption." }
        ]
      : riskTolerance === "moderate"
      ? [
          { name: "Consumer Goods", reason: "Steady demand and relatively stable returns." },
          { name: "Infrastructure", reason: "Potential growth due to government spending on development projects." },
          { name: "Financial Services", reason: "Strong returns in stable economic conditions." }
        ]
      : [
          { name: "Utilities", reason: "Low risk and stable returns, even during economic downturns." },
          { name: "Real Estate", reason: "Tangible assets with potential for steady appreciation." },
          { name: "Government Bonds", reason: "Safe investment with guaranteed returns." }
        ];

    setResult({ plan, suggestedIndustries });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Investment Plan Calculator</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "250px" }}>
          <label>Investment Amount ($):</label>
          <input
            type="number"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            placeholder="Enter amount"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ flex: 1, minWidth: "250px" }}>
          <label>Target Amount ($):</label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            placeholder="Enter target amount"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ flex: 1, minWidth: "250px" }}>
          <label>Target Time (Years):</label>
          <input
            type="number"
            value={targetTime}
            onChange={(e) => setTargetTime(e.target.value)}
            placeholder="Enter target time in years"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ flex: 1, minWidth: "250px" }}>
          <label>Risk Tolerance:</label>
          <select
            value={riskTolerance}
            onChange={(e) => setRiskTolerance(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div style={{ flex: 1, minWidth: "250px" }}>
          <label>Market Prediction:</label>
          <select
            value={marketPrediction}
            onChange={(e) => setMarketPrediction(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="stable">Stable</option>
            <option value="bullish">Bullish</option>
            <option value="bearish">Bearish</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculatePlan}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Calculate Plan
      </button>

      {result && (
        <div style={{ marginTop: "20px", padding: "10px", background: "#f9f9f9", border: "1px solid #ddd", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h3>Investment Allocation</h3>
            <ul>
              <li>Stocks: ${result.plan.stocks.toFixed(2)}</li>
              <li>Bonds: ${result.plan.bonds.toFixed(2)}</li>
              <li>Cash: ${result.plan.cash.toFixed(2)}</li>
            </ul>
          </div>

          <div style={{ flex: 1, minWidth: "250px" }}>
            <h3>Suggested Industries</h3>
            <ul>
              {result.suggestedIndustries.map((industry, index) => (
                <li key={index}>
                  <strong>{industry.name}:</strong> {industry.reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;