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

const TitleJs = styled.h2`
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

const SpanJs = styled.span`
    font-weight: 300;
`;

const SubTitleJs = styled.h3`
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

const Javascript = () => {
    return(
        <StyledHome>
            <Header>
                <Nav items={['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'REDUX']} />
          </Header>
            <Main>
            <TitleJs>
                <SpanJs>Crie este site </SpanJs>responsivo <SpanJs>contando a hist??ria do</SpanJs> Javascript <SpanJs>com </SpanJs>
                react e styled-components
                </TitleJs>
                <SubTitleJs>
                <br />Em 1993, o Centro Nacional de Aplica????es de Supercomputa????o (NCSA), uma unidade da <br />Universidade de Illinois em Urbana-Champaign, lan??ou o NCSA Mosaic, o primeiro navegador gr??fico <br />
                popular da Web, que desempenhou um papel importante na expans??o do crescimento da nascente World Wide Web al??m do nicho NeXTSTEP onde a World Wide Web havia se formado tr??s anos antes. 
                <br />
                <br />Em 1994, uma empresa chamada Mosaic Communications foi fundada em Mountain View, na Calif??rnia, e empregou muitos dos autores originais do NCSA Mosaic para criar o Mosaic Netscape. No entanto, n??o compartilhou intencionalmente nenhum c??digo com o NCSA Mosaic.
                <br />
                <br />O codinome interno do navegador da empresa era Mozilla, uma jun????o de "Mosaic and Godzilla". A primeira vers??o do navegador da Web, Mosaic Netscape 0.9, foi lan??ada no final de 1994. Em quatro meses, j?? havia conquistado tr??s quartos do mercado de navegadores e se tornado o principal navegador da Web nos anos 90. Para evitar problemas de propriedade de marca registrada com o NCSA, o navegador foi posteriormente renomeado para Netscape Navigator no mesmo ano, e a empresa assumiu o nome de Netscape Communications.<br /> 
                 <br />
                 A Netscape Communications percebeu que a Web precisava se tornar mais<br /> din??mica. Marc Andreessen, o fundador da empresa, acreditava que o HTML precisava de uma<br /> "linguagem de cola" que fosse f??cil de usar por Web designers e programadores de meio per??odo <br />para montar componentes como imagens e plugins, onde o c??digo poderia ser escrito diretamente na Web.
                <br />
                <br />Em 1995, a Netscape Communications recrutou Brendan Eich com o objetivo de incorporar a linguagem<br /> de programa????o Scheme em seu Netscape Navigator. Antes que ele pudesse come??ar, a Netscape <br />Communications colaborou com a Sun Microsystems para incluir na linguagem de programa????o mais<br /> est??tica do Netscape Navigator Sun, Java, a fim de competir com a Microsoft pela ado????o de <br />tecnologias e plataformas da Web.[ A Netscape Communications decidiu ent??o que a linguagem de <br />script que eles queriam criar complementaria o Java e deveria ter uma sintaxe semelhante, o <br />que exclu??a a ado????o de outras linguagens como Perl, Python, TCL ou Scheme. Para defender a <br />ideia do JavaScript contra propostas concorrentes, a empresa precisava de um prot??tipo. Eich escreveu <br />um em 10 dias, em maio de 1995.
                <br />
                </SubTitleJs>
            </Main>
          <Footer />
      </StyledHome>  
    );
}

export default Javascript;