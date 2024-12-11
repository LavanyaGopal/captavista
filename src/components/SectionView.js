import React from "react";
import "./SectionView.css";
import SectionCard from "./SectionCard";
import stock1 from '../assets/stock1.jpeg';
import stock2 from '../assets/stock2.jpeg';
import stock3 from '../assets/stock3.jpeg';
const SectionView = () => {
  const sections = [
    {
      title: "Sustainable Business",
      image: stock1, // Replace with actual images
      articles: [
        "Global Environmentalists Find Seeds of Hope in English Nature Credits",
        "Nestlé, Starbucks Coffee Supply Chains Scrutinized Over China Labor Practices",
        "Glass Chips Offer Hope of Cleaner Future for Quantum Computing",
      ],
    },
    {
      title: "Heard on the Street",
      image: stock2,
      articles: [
        "Beijing Shifts Stance on Economy, but Words Alone Won’t Be Enough",
        "Hershey Shareholders Shouldn’t Count on a Mondelez Jackpot",
        "Macy’s Bargain Shares Tempt Activists Again",
      ],
    },
    {
      title: "Barron’s",
      image: stock3,
      articles: [
        "GameStop Sales Drop 20% From Last Year. The Stock Is Still Rising.",
        "These Stocks Moved the Most Today: Nvidia, Oracle, Tesla, Walgreens",
        "U.S. Steel Stock Drops on Report Biden to Block Nippon Takeover",
      ],
    },
  ];

  return (
    <div className="section-view">
      {sections.map((section, index) => (
        <SectionCard
          key={index}
          title={section.title}
          image={section.image}
          articles={section.articles}
        />
      ))}
    </div>
  );
};

export default SectionView;
