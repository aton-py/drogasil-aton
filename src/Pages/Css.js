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

const TitleCss = styled.h2`
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

const SpanCss = styled.span`
    font-weight: 300;
`;

const SubTitleCss = styled.h3`
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

const Css = () => {
    return(
        <StyledHome>
            <Header>
                <Nav items={['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'REDUX']} />
          </Header>
            <Main>
            <TitleCss>
                <SpanCss>Crie este site </SpanCss>responsivo <SpanCss>contando </SpanCss>a história do Css <SpanCss>utilizando </SpanCss>
                react e styled-components
                </TitleCss>
                <SubTitleCss>
                
                <br />O Cascading Style Sheets (CSS) foi proposto pela primeira vez em Outubro de 1994, por Hakon <br />Lie, que queria facilitar a programação de sites, que na época era muito mais complexa. As <br />pessoas tinham que utilizar mais códigos para chegar a um resultado simples, como criar uma tabela.
                
                <br />Em 1995 o CSS1 foi desenvolvido pela W3C, um grupo de empresas do ramo da informática. A <br />linguagem de estilos ganhou muito destaque entre 1997 e 1999, neste período ficou conhecido por <br />grande parte dos programadores.<br />
                <br />No inicio, o HTML era a única linguagem utilizada para criar sites. Quando começou a ganhar <br />popularidade, algumas tags (comandos) foram criadas pelos navegadores para facilitar o uso da <br />linguagem; Para facilitar ainda mais a criação destes layouts, a W3C (World Wide Web <br />Consortium) criou o CSS, colocando a disposição dos Webdesigners.

                <br />CSS é uma linguagem que determina a aparência (layout) de paginas para a Web. Este programa <br />permite ao usuário criar paginas da Web com códigos mais fáceis de elaborar que os códigos HTML. <br />Estes códigos permitem fazer as aplicações com facilidade. <br />

                </SubTitleCss>
            </Main>
          <Footer />
      </StyledHome>  
    );
}

export default Css;