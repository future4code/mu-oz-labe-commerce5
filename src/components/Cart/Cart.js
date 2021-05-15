import React, { Component } from "react";
import "./Cart.css";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <div className="cart cart-header">O carrinho está vazio</div>
        {/* <div className="cart cart-header">Você tem X produtos no carrinho</div> */}
        <div>
        <button>Vaziar Carrinho</button>
          <div className="cart">
            <ul className="cart-items">
              <li></li>
              <div>
                <p>Imagem</p>
              </div>
              <div>
                <div>Camiseta de verão midi com detalhe espaço</div>
                <div className="right">
                  Preço
                  <button>Remover</button>
                </div>
              </div>
            </ul>
          </div>
          <div className="cart">
            <div className="total">
              <div>Total: R$ 29,9</div>
            </div>
            <button className="button primary">Continuar</button>
          </div>
        </div>
      </div>
    );
  }
}
