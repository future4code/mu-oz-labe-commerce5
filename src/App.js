import React from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import data from "./data.json";
import Header from "./components/Header/Header.js"
import styled from 'styled-components';

const ContainerGrid = styled.div`
display: grid;
grid-template-areas:
  "header"
  "main"
  "footer";
grid-template-rows: 8rem 1fr 5rem;
grid-template-columns: 1fr;
height: 100%;
`
const ContainerFiltro = styled.div`
display: flex;
flex-wrap: wrap;
background-color: #ffff;
top: 2rem;
position: sticky;
height: 41.5rem;
border-radius: 25px;
margin-right: 1rem;
`
const ContainerPrincipal = styled.div`
grid-area: main;
margin: 40px;
display: flex;
flex-direction: row;
`
const ContainerProdutos = styled.div`
flex: 3 60rem;
`

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
      valorPagina: 'inicial',
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

  renderizarPagina = (valorPagina) =>{
    switch(valorPagina){
      case 'inicial':
        return (
        <ContainerGrid>
          <Header aoClicar = {() => this.goCart()} />
          <ContainerPrincipal>
            <ContainerFiltro>
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
            </ContainerFiltro>
            <ContainerProdutos>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
                minFilter={this.state.minFilter}
                maxFilter={this.state.maxFilter}
                nameFilter={this.state.nameFilter}
              ></Products>
            </ContainerProdutos>
          </ContainerPrincipal>
          <footer>Todos os direitos reservados.</footer>
        </ContainerGrid>)
      case 'carrinho':
        return(
        <ContainerGrid>
          <Header aoClicarCabecalhoEsquerdo = {() => this.goHome()}/>
          <Cart />
        </ContainerGrid>)
      default:
        return 0
    }    
  }
  goCart = () =>{
    this.setState({valorPagina: 'carrinho'})
  }
  goHome = () =>{
    this.setState({valorPagina: 'inicial'})
  }
  render() {
    return (
      <div>
        {this.renderizarPagina(this.state.valorPagina)}
      </div>
    );
  }
}

export default App;
