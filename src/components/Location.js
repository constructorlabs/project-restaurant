import React from "react";

function Location({ location }) {
  //const { location } = props;

  return (
    <div className="location">
      <h3>OUR LOCATIONS</h3>
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

{
  /* 
<select>
<option value="rivington">{element.address}</option>
<option value="manchester">{element.address}</option>
<select>


*/
}
