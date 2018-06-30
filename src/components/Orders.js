import React from "react";

class Orders extends React.Component {
  render() {
  const { order, totalOrder } = this.props; 
    return (
      <div>
        <h3>Your order is : </h3>
        {order.map(function(orderItem, papa) {
          return (
            <div key={papa}>{`${orderItem.name}: ${orderItem.value} $`}</div>
          )
        })}
        <h3>Your total is : </h3>
        <div>{totalOrder}</div>
      </div>
    );
  }
}

export default Orders;
