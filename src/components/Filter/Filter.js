import React, { Component } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: inline-table;
  justify-content: space-between;
  padding: 1rem;
  margin: 2rem;
  border-bottom: 0.1rem #c0c0c0 solid;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export default class Filter extends Component {
  render() {
    return (
      <FilterContainer>
        <div className="filter-sort">
          <p>Ordenar produtos por preço</p>
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Preço</option>
            <option value="lowerprice">Menor preço</option>
            <option value="higherprice">Maior preço</option>
          </select>
        </div>
        <div className="filter-size">
          <p>Mostrar produtos pelo tamanho</p>
          <select value={this.props.size} onChange={this.props.filterProductsSize}>
            <option value="">TODOS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="filter-size">
          <p>Mostrar produtos pelo tipo</p>
          <select value={this.props.type} onChange={this.props.filterProductsType}>
            <option value="">TODOS</option>
            <option value="Feminina">Feminina</option>
            <option value="Masculina">Masculina</option>
            <option value="Infantil">Infantil</option>
          </select>
        </div>
        <div>
          <p>Filtrar produtos</p>
          <InputContainer>
            <input
              type="number"
              value={this.props.minFilter}
              onChange={this.props.onChangeMinFilter}
              placeholder="Valor mínimo"
            />
          </InputContainer>
          <InputContainer>
            <input
              type="number"
              value={this.props.maxFilter}
              onChange={this.props.onChangeMaxFilter}
              placeholder="Valor máximo"
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              value={this.props.nameFilter}
              onChange={this.props.onChangeNameFilter}
              placeholder="Nome de produto..."
            />
          </InputContainer>
        </div>
      </FilterContainer>
    );
  }
}
