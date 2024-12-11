
import React from "react";
import "./Card.css";

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">View Project</a>
      </div>
    </div>
  );
};

export default Card;
