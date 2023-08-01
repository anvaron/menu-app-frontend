import React from "react";
import "./MenuCard.css";

export default function MenuCard({ menu }) {
  const { id, name, price, image, toppings, shortDescription } = menu;
  return (
    <div className="card" key={id}>
      <h1 className="name">{name}</h1>
      
      <div >
        <img src={image} alt={name} />  
      </div>
      <div className="brief">{shortDescription}</div>
      <div className="price">Price: <span>${price.toFixed(2)}</span></div>
      <div className="toppings">
        Toppings:
        {toppings.map((topping, index) => (
          <span key={index}>
            {`${(index ? " - " : " ") + topping}`}
          </span>
        ))}
      </div>
    </div>
  );
}
