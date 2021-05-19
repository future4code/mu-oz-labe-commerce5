import React from "react";
import icon from "./icon.png";
import iconCart from "./icone_carrinho.png";

class Header extends React.Component {
    render() {
        return (
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
    )}
}

export default Header
