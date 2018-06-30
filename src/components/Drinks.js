import React from "react";

function Drinks({ drinks }) {
  return (
    <div className="drinks">
      <h3>BEER LIST</h3>
      {drinks.map(function(drink) {
        return <p key={drink.id}>{drink.name} - Price : {drink.price}
        <button>Select</button></p>;
      })}
    </div>
  );
}

export default Drinks;

{
  /* <p {drinksMenu.name}>{drinksMenu.name}</p> */
}
