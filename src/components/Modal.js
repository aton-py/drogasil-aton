import React from 'react';
import styled from 'styled-components';
import SH3 from'./H3'
import SP from './P'

const StyledModal = styled.div`
    background: ${({ theme }) => theme.bgModalColor};
    display: flex;
    position: fixed;
    top: 0px;
    bottom: 0px;
    justify-content: center;
    align-items: center;
    width: 100vw;
    z-index: 999;    
`;

const StyledBox = styled.div`
    background: ${({ theme }) => theme.cardsBgTxtColor};
    display: flex;
    border: 2px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    width: 75vw;
    min-width: 400px;
    max-width: 900px;
    height: 60vh;
    @media(max-width:438px){
        min-width: 80%;
    }
`;

const StyledBoxImg = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.color};
`;

const StyledBoxTxt = styled.div`
    width: 50%;
    padding: 30px;
    text-shadow: 0 0 0;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.txtColor};
    font-size: 1.5rem;
`

const StyledImg = styled.img`
    width: 100%;
    padding: 5px;
`

const StyledBtn = styled.button`
    color: ${({ theme }) => theme.btnCardsTxtColor};
    background-color: ${({ color }) => color};
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    padding: 5px 10px 5px 10px;
    text-align: center;
    text-shadow: none;
    width: 40%;
    min-width: 130px;
    margin-top: 30px;
    border: 0;
    align-self: flex-end;

    &:hover{
        cursor: pointer;
        text-decoration-line: underline;
    }
    @media(max-width:945px){
        align-self: center;
    }
`;

const Modal = ({ onClick, name, img, description, title, color, value }) => (
    <StyledModal
        onClick={onClick}
        id={name}>
        <StyledBox>
            <StyledBoxImg color={color}>
                <StyledImg src={img} />
                <SH3>{title}</SH3>
            </StyledBoxImg>
            <StyledBoxTxt>
                <SP value={value}>{description}</SP>
                <StyledBtn
                    onClick={onClick}
                    color={color}
                    id={name}
                    value={value}>voltar</StyledBtn>
            </StyledBoxTxt>
        </StyledBox>
    </StyledModal>
)

export default Modal;