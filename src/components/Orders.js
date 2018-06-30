import React from "react";

class Orders extends React.Component {
  render() {
    return (
      <div>
        <h3>Your order is : {this.props.order}</h3>
        <h3>Your total is : </h3>
        
      </div>
    );
  }
}

export default Orders;
