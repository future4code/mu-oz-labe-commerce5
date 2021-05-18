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
      type: "",
      sort: "lowerprice",
      minFilter: 1,
      maxFilter: 1000,
      nameFilter: "",
    };
  }

  removeFromCart = (product) => {};

  addToCart = (product) => {};

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState(() => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          this.state.sort === "higherprice"
            ? a.price - b.price
            : b.price - a.price
        ),
    }));
    this.setState({ type: "" });
    this.setState({ size: "" });
  };

  filterProductsSize = (event) => {
    if (event.target.value === "") {
      this.setState({
        size: event.target.value,
        type: event.target.value,
        product: data.products,
      });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
      this.setState({ type: "" });
      this.setState({ sort: "" });
    }
  };

  filterProductsType = (event) => {
    if (event.target.value === "") {
      this.setState({ type: event.target.value, product: data.products });
    } else {
      this.setState({
        type: event.target.value,
        products: data.products.filter(
          (product) => product.availableType.indexOf(event.target.value) >= 0
        ),
      });
      this.setState({ size: "" });
      this.setState({ sort: "" });
    }
  };

  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value });
  };

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value });
  };

  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value });
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Ecommerce</a>
        </header>
        <main>
          <div className="content">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              type={this.state.type}
              sort={this.state.sort}
              filterProductsSize={this.filterProductsSize}
              filterProductsType={this.filterProductsType}
              sortProducts={this.sortProducts}
              minFilter={this.state.minFilter}
              maxFilter={this.state.maxFilter}
              nameFilter={this.state.nameFilter}
              onChangeMinFilter={this.onChangeMinFilter}
              onChangeMaxFilter={this.onChangeMaxFilter}
              onChangeNameFilter={this.onChangeNameFilter}
            ></Filter>
            <div className="main">
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
                minFilter={this.state.minFilter}
                maxFilter={this.state.maxFilter}
                nameFilter={this.state.nameFilter}
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
