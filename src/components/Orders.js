import React from "react";

class Orders extends React.Component {
  render() {
  const { order, totalOrder, deleteItem, title } = this.props; 
    return (
      <div>
        <h3>Your order is : </h3>
        {order.map(function(orderItem) {
          return (
            <div key={orderItem.id}>
              {`${orderItem.name}: ${orderItem.value} $`}
              <button 
                id={orderItem.id} 
                onClick={deleteItem}
                value={orderItem.value}
              >
                {title}
              </button>
            </div>
          )
        })}
        <h3>Your total is : </h3>
        <div>{totalOrder}</div>
      </div>
    );
  }
}

export default Orders;
