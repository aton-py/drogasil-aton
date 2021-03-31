
import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.h3`
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
`
const Ball = styled.span`
    width: 24px;
    border-radius: 100%;
    height: 24px;
    display: inline-block;
    background: ${props => {
        if (props.green) return '#007f56';
        if (props.gray) return '#868686';
        if (props.yellow) return '#FCDA92';
        if (props.orange) return '#FE9481';
        if (props.purple) return '#9C8CB9';
        return 'black'
    }};
    @media(max-widht:900px){
        height: 20px;
        width: 20px;
    }
    @media(max-widht:426px){
        height: 15px;
        width: 15px;
    }
    @media(max-widht:376px){
        height: 12px;
        width: 12px;
    }
    @media(max-widht:321px){
        height: 10px;
        width: 10px;
    }
`;

const SubTitle = () => (
    <StyledSubTitle>
        A fonte utilizada é a Opens Sans de 300 a 800.<br />
        exemplo: "Open Sans", Helvetiva, sans-serif, arial;<br />
        Já as cores são:<br />
        <Ball green />#007f56, <Ball gray />#868686, <Ball orange />#FE9481, <Ball yellow />#FCDA92 e <Ball purple />#9C8CB9
    </StyledSubTitle>
)

export default SubTitle;