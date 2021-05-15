import React from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
    };
  }

  removeFromCart = (product) => {};

  addToCart = (product) => {};

  sortProducts = (event) => {};

  filterProducts = (event) => {};

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Ecommerce</a>
        </header>
        <main>
          <div className="content">
            <Filter />
            <div className="main">
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar">
              <Cart />
            </div>
          </div>
        </main>
        <footer>Todos os direitos reservados.</footer>
      </div>
    );
  }
}

export default App;
