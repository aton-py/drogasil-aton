import React from 'react';
import styled from 'styled-components';
import Main from '../components/Main';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const StyledHome = styled.div`
    background: url(${({ theme }) => theme.bgImg});
    height: 100vh;
    text-shadow: 1px 1px 0px ${({ theme }) => theme.txtShadowColor};
    color: ${({ theme }) => theme.txtColor};
    font-family: "Open Sans", Helvetica, sans-serif, arial;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width:748px){
        height: auto;
    }
    @media(max-height:863px){
        height: auto;
    }
`;

const TitleHtml = styled.h2`
    color: ${({ theme }) => theme.titleColor};
    font-size: 5.5rem;
    font-weight: 800;
    letter-spacing: -0.05rem;
    line-height: 5.6rem;
    margin-bottom: 35px;
    text-align: center;
    @media(max-width:945px){
    font-size: 4.5rem;
    line-height: 5rem;
    padding: 0 15px 0 15px;
    }
    @media(max-width:532px){
        font-size: 4.1rem;
        line-height: 4.2rem;
    }
    @media(max-width:426px){
        font-size: 3.1rem;
        line-height: 3.2rem;
    }
    @media(max-width: 375){
        font-size: 2.7rem;
        line-height: 2.9rem;
    }
    @media(max-width:321px){
        font-size: 2.4rem;
        line-height: 2.5rem;

    }
`;

const SpanHtml = styled.span`
    font-weight: 300;
`;

const SubTitleHtml = styled.h3`
    font-size: 3.2rem;
    font-weight: 300;
    letter-spacing: -0.2rem;
    line-height: 3.3.rem;
    text-align: center;
    @media(max-widht:945px){
        font-size: 2.7rem;
        line-height: 2.8rem;
        padding: 0 15px 0 15px;
    }
    @media(max-width:532px){
        font-size: 2.3rem;
        line-height: 2.4rem;
    }
    @media(max-width:426px){
        font-size: 1.9rem;
        line-height: 2rem;
        letter-spacing: -0.1rem;
    }
    @media(max-width:375){
        font-size: 1.5rem;
        line-height: 1.7re m;
        letter-spacing: -0.1rem;
    }
    @media(max-width:321){
        font-size: 1.4rem;
        line-height: 1.6remm;
        letter-spacing: -0.1rem;
    }
`;

const Html = () => {
    return(
        <StyledHome>
            <Header>
                <Nav items={['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'REDUX']} />
          </Header>
            <Main>
            <TitleHtml>
                <SpanHtml>Crie este site </SpanHtml>responsivo <SpanHtml>contando</SpanHtml> a história do Html com <SpanHtml>utilizando </SpanHtml>
                react e styled-components
                </TitleHtml>
                <SubTitleHtml>
                <br />O HTML foi criado em 1991, por Tim Berners-Lee, no CERN (European Council for Nuclear <br />Research) na suíça. Inicialmente o HTML foi projetado para interligar instituições de pesquisa <br />próximas, e compartilhar documentos com facilidade. Em 1992, foi liberada a biblioteca de <br />desenvolvimento WWW ( World Wide Web), uma rede de alcance mundial, que junto com o HTML <br />proporcionou o uso em escala mundial da WEB.
                <br />
                <br />O HTML é uma linguagem de marcação. Estas linguagens são constituídas de códigos que delimitam <br />conteúdos específicos, segundo uma sintaxe própria. O HTML tem códigos para criar paginas na <br />web. Estes códigos que definem o tipo de letra, qual o tamanho, cor, espaçamento, e vários <br />outros aspectos do site. No início era muito complicado aprender HTML, pois eram muitos comandos <br />para fazer algo simples. A cada nova versão, o HTML fica mais fácil de utilizar, e adquire <br />mais funções. Atualmente qualquer pessoa pode acessar a internet a aprender a construir um site <br />básico em questão de horas, seguindo os passos de tutoriais e aprendendo as funções de cada código.
                </SubTitleHtml>
            </Main>
          <Footer />
      </StyledHome>  
    );
}

export default Html;