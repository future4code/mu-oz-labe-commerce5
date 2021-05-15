import React, { Component } from "react";
import "./Filter.css";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">Filtrar Produtos</div>
        <div className="filter-sort">
          <p>Ordenar</p>
          <select>
            <option>Preço</option>
            <option value="lowest">Menor preço</option>
            <option value="highest">Maior preço</option>
          </select>
        </div>
        <div className="filter-size">
          <p>Mostrar</p>
          <select>
            <option value="">TODOS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="L">XL</option>
            <option value="L">XXL</option>
          </select>
        </div>
        <div>
          <p>Procurar</p>
          <input value={""} onChange={""} placeholder="Nome de produto..." />
        </div>
      </div>
    );
  }
}
