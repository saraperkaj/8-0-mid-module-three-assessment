import { Component } from "react";
import "./App.css";
import Items from "./components/Items";
import productData from "./data/productData";
import Cart from "./components/Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: {
        img: "",
        name: "",
        price: "",
        description: "",
      },
      item: productData,
      cart: "",
    };
  }
  // handleItemClick = (item) => {
  //   this.setState({
  //     product: item,
  //   });
  // };

  addItem = () => {
    const { cart, item } = this.state;
    this.setState({ cart: [...cart, item] });
  };

  /**
   * methods
   *
   * addItems
   * enterInfo
   * completeTransaction
   *
   * components to make:
   * items
   * cart
   * Check(out)
   */

  render() {
    const { item } = this.state;
    const product = this.state.item.map((item) => {
      return (
        <Items
          key={item.id}
          item={item}
          // handleItemClick={this.handleItemClick}
        />
      );
    });
    return (
      <div className="app" id="app-container">
        <h1>Garage Sale</h1>
        <div id="product-list-container">{product}</div>
      </div>
    );
  }
}

export default App;
