import React from "react";
import MenuItem from "./MenuItem";
import Location from "./Location";
import Header from "./Header";
import Orders from "./Orders";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        { id: 1, name: "Cheesburguer", price: 5 },
        { id: 2, name: "Chicken", price: 10 },
        { id: 3, name: "Beef", price: 15},
        { id: 4, name: "Turkey", price: 20 }
      ],
      drinksMenu: [
        { id: 1, name: "Budweiser", price: 3 },
        { id: 2, name: "Stella", price: 4 },
        { id: 3, name: "Guiness", price: 5 }
      ],

      location: [
        {
          id: 1,
          address: "Rivington St. 1-3",
          postcode: "N1 3AA",
          city: "London"
        },
        { id: 2, address: "Old Street", postcode: "W1 9BB", city: "Manchester" }
      ],

      order: [],
      totalOrder: 0,
      lastOrderItemId: 0,
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const orderItem = {
      id: this.state.lastOrderItemId + 1,
      name: event.target.name,
      value: event.target.value,
     }
    this.setState({
      lastOrderItemId: parseInt(this.state.lastOrderItemId +1),
      order: [...this.state.order , orderItem],
      totalOrder: parseInt(this.state.totalOrder)  + parseInt(orderItem.value)
    });
  }

  handleDelete(event){
    const newOrder = this.state.order;
    this.setState({
      order: newOrder.filter(orderItem => orderItem.id != event.target.id),
      totalOrder: parseInt(this.state.totalOrder) - parseInt(event.target.value)
    })
  }


 
  render() {
    return (
      <div className="appContent">
        <Header name="Rubber Duck´s and Co Brasserie" />
        <MenuItem 
          item={this.state.menu} 
          clickHandler={this.handleSubmit} 
          title="Menu list"
        />
        <MenuItem 
          item={this.state.drinksMenu} 
          clickHandler={this.handleSubmit} 
          title="Beer list"
        />
        <Location location={this.state.location} />
        <Orders 
          order={this.state.order} 
          totalOrder={this.state.totalOrder}
          deleteItem={this.handleDelete}
          title="Delete Item"
        />
        
      </div>
    );
  }
}

export default App;


