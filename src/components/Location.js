import React from "react";

function Location(props) {
  const { location } = props;
  return (
  <div className="location">
    {location.map(function(element) {
      return (
        <p key={element.id}>
          {element.address} {element.postcode} {element.city}
        </p>
      );
    })}
  </div>
  );
}

export default Location;

{
  /* <p>Street :{props.location.address}</p>
      <p>Postcode : {props.location.postcode}</p>
      <p>City : {props.location.city}</p> */
}
