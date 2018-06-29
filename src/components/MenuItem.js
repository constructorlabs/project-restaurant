import React from "react";

function MenuItem(props) {
  
  const { item } = props;
  return (
    <div className="menuItem">
      {item.map(function(element) {
        return <p key={element.name}>{element.name} {element.price} 
                  <button>Select</button>
                </p>;
      })}


      {/* <p>Menu Id : {props.id}</p>
      <p> Meal : {props.name}</p>
      <p>Price :{props.price}</p> */}
    </div>
  );
}

export default MenuItem;
