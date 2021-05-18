import React, { Component } from "react";
import formatCurrency from "../../util";
import Modal from "react-modal";
import "./Products.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };
  
  productsFiltered = () => {
    return this.props.products
      .filter((product) =>
        this.props.minFilter ? product.price > this.props.minFilter : true
      )
      .filter((product) =>
        this.props.maxFilter ? product.price < this.props.maxFilter : true
      )
      .filter((product) =>
        this.props.nameFilter
          ? product.title.includes(this.props.nameFilter)
          : true
      );
  };

  render() {
    const filterProducts = this.productsFiltered();
    const { product } = this.state;
    return (
      <div>
        <ul className="products">
          {filterProducts.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a
                  href={"#" + product._id}
                  onClick={() => this.openModal(product)}
                >
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    onClick={() => this.props.addToCart(product)}
                    className="button primary"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {product && (
          <Modal isOpen={true}>
            <button className="close-modal" onClick={this.closeModal}>
              X
            </button>
            <div className="product-details">
              <img src={product.image} alt={product.title}></img>
              <div className="product-details-description">
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>{product.description}</p>
                <p>
                  Tamanhos Disponíveis: {""}
                  {product.availableSizes.map((x) => (
                    <span>
                      {""}
                      <button className="button">{x}</button>
                    </span>
                  ))}
                </p>
                <p>
                  Modelos Disponíveis: {""}
                  {product.availableType.map((x) => (
                    <span>
                      {""}
                      <button className="button">{x}</button>
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      this.props.addToCart(product);
                      this.closeModal();
                    }}
                  >Adicionar ao Carrinho</button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}