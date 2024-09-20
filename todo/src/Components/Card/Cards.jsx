// Cards.js
import React from "react";

function Cards({ title, rating, year, description, image }) {
  return (
    <div className="Card-Container">
      <img src={image} alt={title} className="Card-Image"/>
      <h3 className="Card-Title">{title}</h3>
      <p className="Card-Rating">Rating: {rating}</p>
      <p className="Card-Year">Year: {year}</p>
      <p className="Card-Description">{description}</p>
    </div>
  );
}

export default Cards;
