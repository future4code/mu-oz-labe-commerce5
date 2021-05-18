import React, { Component } from "react";
import formatCurrency from "../../util";
import "./Products.css";

export default class Products extends Component {
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
    return (
      <div>
        <ul className="products">
          {filterProducts.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={product._id}>
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
      </div>
    );
  }
}
