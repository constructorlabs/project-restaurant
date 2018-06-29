import React from "react";

function MenuItem({item}) {
  
  //const { item } = props; !!! {item} within fn avoids the need for const on this line
  return (
    <div className="menuItem">
    <h3>MENU LIST</h3>
      {item.map(function(element) {
        return <p key={element.name}>{element.name} {element.price} 
                  <button>Select</button>
                </p>
      })}


      {/* <p>Menu Id : {props.id}</p>
      <p> Meal : {props.name}</p>
      <p>Price :{props.price}</p> */}
    </div>
  );
}

export default MenuItem;
