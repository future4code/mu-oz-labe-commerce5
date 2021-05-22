<h2 align="center">LabEcommerce - Buraco de Minhoca</h2>


<h3 align="center">
  <img alt="LabEcommerce"
    src="https://github.com/future4code/mu-oz-labe-commerce5/blob/master/public/images/principal.png" width="380px"/>
</h3>
<hr/>


## ⚙️ Tecnologias Usadas:
- CSS3
- JavaScript 
- React Js 
- React Components
- Styled Components
- React Modal

## ⚙️ Estrutura do Projeto

- Arquivo `.gitignore`
- Arquivo `package.json`
- Arquivo `package-lock.json`
- Pasta `node_modules`: Armazena os pacotes das dependências que definimos no arquivo package.json. Também deve ser observado que este diretório é definido dentro de .gitignore para que todas as dependências infinitas não sejam carregadas para o repositório Git. Portanto, quem baixar o projeto instalará as dependências [diretamente da web](https://www.npmjs.com/)
- Pasta `public`: Ele contém os arquivos estáticos que nos permitirão montar o aplicativo. Dentro dele está a pasta que contém as imagens dos produtos da loja.
- Pasta `src` (source): A pasta src é a pasta onde nosso código React está localizado.

## ⚙️ Explicação da Aplicação

O aplicativo possui 4 componentes:
Cabeçalho
Carrinho
Filtro
Produtos

É uma landing page de comércio eletrônico com o nome Buraco de Minhoca encarregado de vender camisetas juvenis com motivos divertidos espaciais. São 26 produtos divididos em camisetas infantis, masculinas ou femininas para o gosto de qualquer pessoa.

Cada produto está dentro de um cartão que mostra a imagem de referência da camiseta, o nome, o preço e um botão disponível para adicioná-la ao carrinho.

Quando o usuário clica no nome do produto, imediatamente será exibida uma janela modal que mostrará os demais detalhes como uma descrição, os tamanhos e modelos disponíveis da camiseta selecionada. O usuário também pode adicionar ao carrinho a camiseta respetiva diretamente da janela modal.

Do lado esquerdo temos o filtro e as preferências para mostrar os produtos.

O usuário poderá ordenar os produtos por preço.

O usuário pode decidir ver os produtos pelo tamanho disponível.

O usuário pode decidir se deseja ver os produtos por tipo.

Finalmente poderá fazer uma busca filtrando por um preço mínimo ou máximo que ele define, relacionado ao nome da camisa, inclusive pode fazer a busca pelo nome ou pelo preço individualmente.

Outra das principais funcionalidades da aplicação é a do carrinho de compras, onde se refletirão os produtos que o usuário escolherá para sua posterior compra. Para ir ao carrinho, o usuário deve clicar no ícone do carrinho localizado no canto superior direito.

Nesta seção, o usuário pode ver a quantidade de produtos que adicionou, são exibidos ademais, a imagem, o nome da camiseta e o preço unitário, preço total por item e preço total da compra.

O usuário também tem a possibilidade de apagar produtos um a um, apagar todo o item ou retornar à página principal para adicionar mais unidades ou um produto diferente. Pode vaziar o carrinho.

## ⚙️ Pasta src ou Source:

- Arquivo Index.js:
O conteúdo do arquivo index.js tem as seguintes funcionalidades:

*Linha 1:* importa o módulo React que, como vimos, está  dentro do arquivo package.json e nos permitirá criar interfaces.

*Linha 2:* importa o módulo React-dom, o qual também encontra-se dentro do arquivo package.json, que nos permitirá criar interfaces para o navegador / web.

*Linha 3:* consiste da importação do arquivo index.css.

*Linha 4:* temos a importação de App que está chamando o arquivo App.js no diretório src.

*Linha 6:* linha usada pelo React, que adiciona o código que falta ao documento HTML (a imagem, o parágrafo e o link). O que ReactDOM.render realmente faz (que eu quero pintar, onde eu quero pintá-lo) é adicionar um componente dentro do elemento do elemento com id "root" de index.html usando a instrução JavaScript document.getElementById ("root") .

- Arquivo App.js: é o componente pai da nossa aplicação. Nele estarão a maioria das funções que permitem a funcionalidade de nossa aplicação, ele passará propriedades aos componentes filhos.

- Arquivo data.json: ele contém as informações dos 26 produtos, organizados em um objeto dentro de um array, dentro das informações, temos: id, descrição, tamanho, tipo, imagem, preço, e será chamado em nosso arquivo App.js para posteriormente ser percorrido e renderizado, dando como resultado a visibilidade das informações de cada camiseta.

- Arquivo util.js: contém o formato da moeda local, neste caso é a real.

- Pasta components / Pasta Cart / Arquivo Cart: ele vai ser renderizado condicionalmente no caso o usuário clicar no icone do carrinho. O produto vai ser adicionado ao usuário clicar no botão "Adicionar ao carrinho" que está no componente Products. E vai se mostrar o produto adicionado, a quantidade, o preço, o usuário vai ter a posibilidade de adicionar mais produtos, remover um produto por vez. No carrinho finaliza o fluxo da aplicação.

- Pasta components / Pasta Filter / Arquivo Filter: este componente corresponde ao cartão ubicado na parte esquerda da tela, ao lado dos produtos, quando o usuário faça a busca, vai ver renderizar os produtos em tempo real ao lado.

- Pasta components / Pasta Header / Arquivo Header: a funcionalidade deste componente é de chamar a atenção dos usuários, assim com também conter o que possivelmente vai ser a evolução da loja, pois tem o projeto de criar uma conta, entrar na conta, ver históricos de compras e também é por onde o usuário vai acessar ao carrinho de compras.

- Pasta components / Pasta Products / Arquivo Products: é onde se encontra o estado inicial dos produtos, que são chamados do data.json. Ele contém uma das funções principais do filtro. Dentro dele encontramos a funcionalidade da janela modal, que vai ser renderizada quando o usuário clicar dentro do nome do produto.

- Pasta img: contém o icone do carrinho, o icone da loja e o plano de fundo do landing page.


##  Instalação


## 🏁 Para rodar o projeto:

Clone este repositório em sua máquina:

```bash
$ git clone https://github.com/future4code/mu-oz-labe-commerce5.git
```

cd `mu-oz-labe-commerce5` e rode:

```bash
npm install
```


```bash
npm install styled-components
```


```bash
npm install react-modal
```

para iniciar:

```bash
npm run start
```


<br/>

##  Conclusão

Este projeto LabEcommerce corresponde ao módulo 5 do curso Labenu, onde iniciamos a exploração da biblioteca React.
No final do projeto tentamos usar e praticar todo o conteúdo visto em cada sessão de aula:

- Ciclo de vida dos componentes
- Coerção de tipos não Javascript
- Ternário
- Curto circuito
- Renderização condicional
- Armazenamento local
- Técnicas de depuração e hardware

É importante mencionar que também procuramos colocar em prática técnicas, códigos e conselhos encontrados na documentação e na web. Ainda há muito por andar, mas no geral ficamos felizes com o resultado, sem mais delongas,

Atenciosamente,

Ernesto Mognol, Gremis Tovar, Jeane Melo.


P.D. Um protótipo deste aplicativo (MVP - Produto Mínimo Viável) pode ser visto no seguinte endereço:

http://.surge.sh/
