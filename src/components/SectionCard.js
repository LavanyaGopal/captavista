import React from "react";
import "./SectionCard.css";

const SectionCard = ({ title, image, articles }) => {
  return (
    <div className="section-card">
      <div className="section-header">
        <h2>{title}</h2>
        <span>&#9654;</span> {/* Right arrow icon */}
      </div>
      <img src={image} alt={title} className="section-image" />
      <ul className="section-articles">
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionCard;
