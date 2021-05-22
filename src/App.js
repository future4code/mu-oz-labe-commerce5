import React from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import data from "./data.json";
import Header from "./components/Header/Header.js";
import styled from "styled-components";

const ProductContainer = styled.div`
  flex: 3 60rem;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: 8rem 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
`;

const Main = styled.main`
  grid-area: main;
  margin: 40px;
  display: flex;
  flex-direction: row;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #ffff;
  top: 2rem;
  position: sticky;
  height: 44.5rem;
  border-radius: 25px;
  margin-right: 1rem;
`;

const FooterMain = styled.footer`
  grid-area: footer;
  background-color: #203040;
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      size: "",
      type: "",
      sort: "",
      minFilter: "",
      maxFilter: "",
      nameFilter: "",
      pageValue: "home",
    };
  }
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
        products: data.products,
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
      this.setState({ type: event.target.value, products: data.products });
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
    this.setState({ type: "" });
    this.setState({ sort: "" });
    this.setState({ size: "" });
  };

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value });
    this.setState({ type: "" });
    this.setState({ sort: "" });
    this.setState({ size: "" });
  };

  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value });
    this.setState({ type: "" });
    this.setState({ sort: "" });
    this.setState({ size: "" });
  };
  renderizarPagina = (pageValue) => {
    switch (pageValue) {
      case "home":
        return (
          <GridContainer>
            <Header
              cartItemClick={() => this.goCart()}
              leftHeaderClick={() => this.goHome()}
            />
            <Main>
              <FilterContainer>
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
              </FilterContainer>
              <ProductContainer>
                <Products
                  products={this.state.products}
                  addToCart={this.addToCart}
                  minFilter={this.state.minFilter}
                  maxFilter={this.state.maxFilter}
                  nameFilter={this.state.nameFilter}
                ></Products>
              </ProductContainer>
            </Main>
            <FooterMain>Todos os direitos reservados.</FooterMain>
          </GridContainer>
        );
      case "cart":
        return (
          <GridContainer>
            <Header
              cartItemClick={() => this.goCart()}
              leftHeaderClick={() => this.goHome()}
            />
            <Cart
              cart={this.state.cartItems}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              clearCart={() => this.clearCart()}
              end={() => this.end()}
              backHomeButton={() => this.goHome()}
              removeItem={this.removeItem}
            />
          </GridContainer>
        );
      default:
        return 0;
    }
  };
  goCart = () => {
    this.setState({ pageValue: "cart" });
  };
  goHome = () => {
    this.setState({ pageValue: "home" });
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count = item.count - 1;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({
      cartItems: cartItems.filter((x) => x.count > 0),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (alreadyInCart === false) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  clearCart = () => {
    const cartItems = this.state.cartItems
    this.setState({ cartItems: [] });
    localStorage.removeItem("cartItems", JSON.stringify(cartItems));
  };

  end = () => {
    alert("Compra finalizada!! Obrigada pela preferência!!");
  };
  removeItem = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  render() {
    return <div>{this.renderizarPagina(this.state.pageValue)}</div>;
  }
}

export default App;
