import { Component } from "react";
import "./App.css";
import Items from "./components/Items";
import productData from "./data/productData";

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
  handleItemClick = (item) => {
    this.setState({
      product: item,
    });
  };

  addItem = () => {
    const { cart, item } = this.state;
    this.setState({ cart: [...cart, item] });
  };

  /**
   * addItems
   * enterInfo
   * completeTransaction
   *
   * components to make:
   * items
   *
   *
   */

  render() {
    const { product, item } = this.state;
    const that = item.map((item) => {
      return (
        <Items
          key={item}
          product={product}
          handleItemClick={this.handleItemClick}
        />
      );
    });
    return (
      <div className="app" id="app-container">
        <h1>Garage Sale</h1>
        <Items />
        {/* <div id="product=list-container">{}</div> */}

        <button onClick={this.addItem}>Add To Cart</button>
      </div>
    );
  }
}

export default App;
