import React from "react";

function MenuItem(props) {
  const { item, title } = props; //!!! {item, etc...} within fn avoids the need for "props" on this line
  return (
    <div className="menuItem">
      <h3>{title}</h3>
      {item.map(function(element) {
        return (
          <p key={element.name}>
            {element.name} {element.price}
            <button
              onClick={props.clickHandler} 
              name={element.name}
              value={element.price}
            >
              Select
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default MenuItem;
