import React, { Component } from "react";
import formatCurrency from "../../util";
import Modal from "react-modal";
import styled from "styled-components";

const ProductMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 360px;
  background-color: #f0f0f0;
  border-radius: 50px;
  border: 1px solid black;
`;

const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const ProductLi = styled.li`
  height: 47rem;
  padding: 0 1rem 2rem 1rem;
`;

const ProductLink = styled.a`
  text-decoration: none;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 27rem;
  max-height: 37rem;
  width: 68%;
  border: 0.1rem #c0c0c0 solid;
  margin-top: 2rem;
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const ProductPriceFormat = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const ProductPriceButton = styled.button`
  text-align: center;
  padding: 1rem;
  border: 0.1rem #c0c0c0 solid;
  background-color: #f0f0f0;
  cursor: pointer;
  &:hover {
    border: 0.1rem #808080 solid;
  }
`;

const ButtonPrimary = styled.button`
  background-color: #203040;
  margin: 15px;
  border-radius: 10px;
  border: 0.1rem solid black;
  color: #f0f0f0;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  &:hover {
    background-color: #f0f0f0;
    color: black;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 96vh;
`;

const ProductDetailsImg = styled.img`
  max-height: 100vh;
  max-width: 46rem;
  margin: 0 auto;
`;

const ProductDetailsDescription = styled.div`
  flex: 1 1;
  margin: 5rem;
`;

const CloseModal = styled.div`
  position: absolute;
  right: 3rem;
  top: 2.5rem;
  z-index: 1000;
  cursor: pointer;
`;

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
        <ProductsList>
          {filterProducts.map((product) => (
            <ProductLi key={product._id}>
              <ProductMain>
                <ProductLink
                  href={"#" + product._id}
                  onClick={() => this.openModal(product)}
                >
                  <ProductImage
                    src={product.image}
                    alt={product.title}
                  ></ProductImage>
                  <p>{product.title}</p>
                </ProductLink>
                <ProductPrice>
                  <ProductPriceFormat>
                    {formatCurrency(product.price)}
                  </ProductPriceFormat>
                  <ButtonPrimary onClick={() => this.props.addToCart(product)}>
                    Adicionar ao Carrinho
                  </ButtonPrimary>
                </ProductPrice>
              </ProductMain>
            </ProductLi>
          ))}
        </ProductsList>

        {product && (
          <Modal isOpen={true}>
            <CloseModal onClick={this.closeModal}>X</CloseModal>
            <ProductDetails>
              <ProductDetailsImg
                src={product.image}
                alt={product.title}
              ></ProductDetailsImg>
              <ProductDetailsDescription>
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>{product.description}</p>
                <p>
                  Tamanhos Disponíveis: {""}
                  {product.availableSizes.map((x) => (
                    <span>
                      {""}
                      <ProductPriceButton>{x}</ProductPriceButton>
                    </span>
                  ))}
                </p>
                <p>
                  Modelos Disponíveis: {""}
                  {product.availableType.map((x) => (
                    <span>
                      {""}
                      <ProductPriceButton>{x}</ProductPriceButton>
                    </span>
                  ))}
                </p>
                <ProductPrice>
                  <div>{formatCurrency(product.price)}</div>
                  <ButtonPrimary
                    onClick={() => {
                      this.props.addToCart(product);
                      this.closeModal();
                    }}
                  >
                    Adicionar ao Carrinho
                  </ButtonPrimary>
                </ProductPrice>
              </ProductDetailsDescription>
            </ProductDetails>
          </Modal>
        )}
      </div>
    );
  }
}
