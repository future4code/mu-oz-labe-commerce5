import React from "react";
// import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import data from "./data.json";
import icon from "./icon.png";
import iconCart from "./components/Cart/icone_carrinho.png"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      type: "",
      sort: "",
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
        sort === "lowerprice"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "higherprice"
          ? a.price < b.price
            ? 1
            : -1
          : a._id < b._id
          ? 1
          : -1
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
          <div className="cabecalho-principal">
            <a href="/">
            <div className="cabecalho-esquerdo">
              <img src={icon} alt="icone-cabecalho" id="icone-cabecalho"/>
              <div className="texto-cabecalho">
                <span id="titulo-cabecalho">BURACO DE MINHOCA</span>
                <span id="subtitulo-cabecalho">O E-COMMERCE QUE É DE OUTRA GALÁXIA!</span>
              </div>
            </div>
            </a>
            <div className="cabecalho-nav">
              <span>CRIE SUA CONTA</span>
              <span>ENTRE</span>
              <span>COMPRAS</span>
              <a href="./components/Cart/Cart.js"><img src={iconCart} alt="icone-carrinho" id="icone-carrinho"></img></a>
            </div>
          </div>
        </header>
        <main>
          <div className="container-filtro">
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
          </div>
          <div className="main">
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
                minFilter={this.state.minFilter}
                maxFilter={this.state.maxFilter}
                nameFilter={this.state.nameFilter}
              ></Products>
          </div>
        </main>
        <footer>Todos os direitos reservados.</footer>
      </div>
    );
  }
}

export default App;
