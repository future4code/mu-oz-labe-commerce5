import React from "react";
import icon from "../../img/icon.png";
import iconCart from "../../img/icone_carrinho.png";
import styled from "styled-components";

const HeaderMain = styled.header`
  grid-area: header;
  background-color: #203040;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem;
`;

const HeadTitle = styled.span`
  font-size: 2.7rem;
  color: #ffff;
`;

const MainHair = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HeaderSubtitle = styled.span`
  display: flex;
  font-size: 1.5rem;
  color: #ffff;
`;

const NavbarHeader = styled.div`
  color: #ffff;
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HeaderIcon = styled.img`
  height: 6rem;
  width: auto;
`;

const CartIcon = styled.img`
  height: 4rem;
  width: auto;
  background-color: #ffff;
  border-radius: 50%;
  &:hover {cursor: pointer;};
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  &:hover {cursor: pointer;};
`;

const HeaderLinks = styled.span`
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  };
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderMain>
        <MainHair>
          <LeftHeader onClick={this.props.leftHeaderClick}>
            <HeaderIcon src={icon} alt="icone-cabecalho" />
            <div>
              <HeadTitle>BURACO DE MINHOCA</HeadTitle>
              <HeaderSubtitle>
                O E-COMMERCE QUE É DE OUTRA GALÁXIA!
                </HeaderSubtitle>
            </div>
          </LeftHeader>
          <NavbarHeader>
            <HeaderLinks>CRIE SUA CONTA</HeaderLinks>
            <HeaderLinks>ENTRE</HeaderLinks>
            <HeaderLinks>COMPRAS</HeaderLinks>
            <CartIcon src={iconCart} alt="icone-carrinho" onClick={this.props.cartItemClick}></CartIcon>
          </NavbarHeader>
        </MainHair>
      </HeaderMain>
    );
  }
}