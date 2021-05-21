import React from "react";
import icon from "./icon.png";
import iconCart from "./icone_carrinho.png";
import styled from 'styled-components';

const Cabecalho = styled.div`
background-color: #203040;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.5rem;
`
const CabecalhoPrincipal = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const CabecalhoEsquerdo = styled.div`
display: flex;
align-items: center;
&:hover {cursor: pointer;};
`
const TituloCabecalho = styled.span`
font-size: 2.7rem;
color: #ffff;
`
const SubtituloCabecalho = styled.span`
display: flex;
font-size: 1.5rem;
color: #ffff;
`
const IconeCabecalho = styled.img`
height: 6rem;
width: auto;
`
const IconeCarrinho = styled.img`
height: 4rem;
width: auto;
background-color: #ffff;
border-radius: 50%;
&:hover {
  cursor: pointer;
  transform: scale(1.2);
};
`
const CabecalhoNav = styled.div`
color:#ffff;
width: 28%;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const TextoCabecalho = styled.div`
display: flex;
flex-direction: column;
`
const MenusCabecalho = styled.span`
&:hover {
  cursor: pointer;
  transform: scale(1.2);
};
`

class Header extends React.Component {
  render() {
    return (
      <Cabecalho>
        <CabecalhoPrincipal>
            <CabecalhoEsquerdo onClick = {this.props.aoClicarCabecalhoEsquerdo}>
              <IconeCabecalho src={icon} alt="icone-cabecalho" />
              <TextoCabecalho>
                <TituloCabecalho>BURACO DE MINHOCA</TituloCabecalho>
                <SubtituloCabecalho>O E-COMMERCE QUE É DE OUTRA GALÁXIA!</SubtituloCabecalho>
              </TextoCabecalho>
            </CabecalhoEsquerdo>
          <CabecalhoNav>
            <MenusCabecalho>CRIE SUA CONTA</MenusCabecalho>
            <MenusCabecalho>ENTRE</MenusCabecalho>
            <MenusCabecalho>COMPRAS</MenusCabecalho>
            <IconeCarrinho src={iconCart} alt="icone-carrinho" onClick={this.props.aoClicar} />
          </CabecalhoNav>
        </CabecalhoPrincipal>
      </Cabecalho>
    )
  }
}

export default Header
