import React from 'react';
import styled from "styled-components";
import formatCurrency from "../../util";

const MainContainer = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
grid-area: main;
`
const PageTitle = styled.span`
color: #ffffff;
font-size: 32pt;
`
const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
padding: 1.2rem;
border-radius: 25px;
`
const CartContainer = styled.div`
background-color: #f0f0f0;
width: 60%;
border-radius: 25px;
display: flex;
justify-content: center;
flex-direction: column;
`
const CartLine = styled.li`
display: flex;
justify-content: space-evenly;
align-items: center;
`
const ProductIcon = styled.img`
width: 70px;
height: auto;
`
const SubTitle = styled.span`
font-weight: bold;
margin-bottom: 16px;
`
const Item = styled.span`
`
const CartTitle = styled.div`
display: flex;
flex-direction: column;
width: 35%;
align-items: center;
`
const CartImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 0 5px 0;
`
const CartSession = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const QuantButtons = styled.button`
border: none;
margin: 0 5px 0 5px;`

export default class Cart extends React.Component {

  renderCart = () => {
    return(
      this.props.cart.map((product, index) => (
      <CartLine key={index}>
        <CartImage>
          <ProductIcon src={product.image} alt={product.title} />
        </CartImage>
        <CartTitle>
          <SubTitle>PRODUTO</SubTitle>
          <Item>{product.title}</Item>
        </CartTitle>
        <CartSession>
          <SubTitle>QUANT</SubTitle>
          <Item>
            <QuantButtons onClick={this.props.cartItemQuantPlus(product)}>-</QuantButtons>
            {product.quant}
            <QuantButtons onClick={this.props.cartItemQuantPlus(product)}>+</QuantButtons>
          </Item>
        </CartSession>
        <CartSession>
          <SubTitle>PREÇO UN.</SubTitle>
          <Item>{formatCurrency(product.price)}</Item>
        </CartSession>
        <CartSession>
          <SubTitle>PREÇO TOTAL</SubTitle>
          <Item>Total</Item>
        </CartSession>
        <CartSession>
          <button>Remover Item</button>
        </CartSession>
      </CartLine>)))
  };

  render() {
    return (
      <MainContainer>
        <TitleContainer>
          <PageTitle>CARRINHO DE COMPRAS</PageTitle>
        </TitleContainer>
        <CartContainer>
          {this.renderCart()}
        </CartContainer>
      </MainContainer>
    );
  }
}
