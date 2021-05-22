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
flex-direction: column;
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
margin: 0 5px 0 5px;
&:hover {cursor: pointer;};
`
const EmptyCart = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 400px;
`
const EmptyCartLine = styled.div`
font-size: 32pt;
`
const ButtonContainer = styled.div`
margin-top: 16px;
display:flex;
`
const PageButtons = styled.button`
border-radius: 25px;
padding: 8px 24px;
background-color: #203040;
color: #f0f0f0;
&:hover {
  cursor: pointer;
  background-color: white;
  color: black;
};
`
const ButtonPrimary = styled.button`
  background-color: #203040;
  margin: 15px;
  border-radius: 25px;
  color: #f0f0f0;
  cursor: pointer;
  display: grid;
  padding: 8px 24px;
  &:hover {
    background-color: #f0f0f0;
    color: black;
  }
`;
const ButtonDiv = styled.div`
  margin: 0 auto;
`;

export default class Cart extends React.Component {
  renderPage = () => {
    if (this.props.cart.length > 0) {
      return this.renderCart()
    }
    else {
      return this.renderEmptyCart()
    }
  }
  renderCart = () => {
    return (
      this.props.cart.map((product) => (
        <CartLine key={product._id}>
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
              <QuantButtons onClick={() => this.props.removeFromCart(product)}>-</QuantButtons>
              {product.count}
              <QuantButtons onClick={() => this.props.addToCart(product)}>+</QuantButtons>
            </Item>
          </CartSession>
          <CartSession>
            <SubTitle>PREÇO UN.</SubTitle>
            <Item>{formatCurrency(product.price)}</Item>
          </CartSession>
          <CartSession>
            <SubTitle>PREÇO TOTAL</SubTitle>
            <Item>{formatCurrency(product.price * product.count)}</Item>
          </CartSession>
          <CartSession>
            <button onClick={() => this.props.removeItem(product)}>Remover Item</button>
          </CartSession>
        </CartLine>)))
  };
  renderEmptyCart = () => {
    return <EmptyCart>
      <div>
        <EmptyCartLine>SEU CARRINHO ESTÁ VAZIO :(</EmptyCartLine>
      </div>
    </EmptyCart>
  }

  render() {
    return (
      <MainContainer>
        <TitleContainer>
          <PageTitle>CARRINHO DE COMPRAS</PageTitle>
        </TitleContainer>
        <CartContainer>
          {this.renderPage()}
        </CartContainer>
        <MainContainer>
          <PageTitle>
            {this.props.cart.length !== 0 && (
              <TitleContainer>
                Total:{" "}
                {formatCurrency(
                  this.props.cart.reduce((a, c) => a + c.price * c.count, 0)
                )}
                <ButtonPrimary>
                  <ButtonDiv  onClick={this.props.end}>FINALIZAR COMPRA</ButtonDiv>
                </ButtonPrimary>
              </TitleContainer>
            )}
          </PageTitle>
        </MainContainer>
        <ButtonContainer>
          <PageButtons onClick={this.props.clearCart}>REMOVER TUDO</PageButtons>
          <PageButtons onClick={this.props.backHomeButton}>VOLTAR A HOME</PageButtons>
        </ButtonContainer>
      </MainContainer>
    );
  }
}
