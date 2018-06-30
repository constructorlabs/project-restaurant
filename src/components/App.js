import React from "react";
import MenuItem from "./MenuItem";
import Location from "./Location";
import Header from "./Header";
import Drinks from "./Drinks";
import Orders from "./Orders";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        { id: 1, name: "Cheesburguer", price: 10 },
        { id: 2, name: "Chicken", price: 20 },
        { id: 3, name: "Beef", price: 30 }
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

      order: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("button was clicked", event.target.name, event.target.value);
    this.setState({
      order: [...this.state.order , event.target.name]
    });
  }
 
  render() {
    return (
      <div className="appContent">
        <Header name="Rubber Duck´s and Co Brasserie" />
        {/* <MenuItem item={{ id: 1, name: "cheesburguer", price: 10 }} /> */}
        <MenuItem item={this.state.menu} clickHandler={this.handleSubmit} />
        <Drinks drinks={this.state.drinksMenu} />
        <Location location={this.state.location} />
        <Orders order={this.state.order} />
      </div>
    );
  }
}

export default App;

{
  /* // location={{
          //   address: "Rivington St. 1-3",
          //   postcode: "N1 3AA",
          //   city: "London"
          // }} */
}
