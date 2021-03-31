import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import rd_small from '../assets/rd-small.png'
import drogaraia from '../assets/drogaraia.png'
import farmasil from '../assets/farmasil.png'
import drogasil from '../assets/drogasil.png'
import bio from '../assets/bio.png'
import univers from '../assets/univers.png'

const SFooter = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%auto;
    max-width: 1200px;
    align-self: center;
    margin: 10px 0 10px 0;
    padding: 10px 0 10px 0;
    @media(max-width: 743px){
        flex-direction: column-reverse;
        text-align: center;
    }
`;
const SImg= styled.img`
    max-width: 100%;
    padding: 0 5px;
    margin-bottom: 10px;
`;
const SP = styled.p`
    font-size: 1.2 rem;
    font-weight: 400;
`;
const Logos = styled.div`

`;
const SA = styled.a`

`;

const Footer = () => (
    <SFooter>
        <SP></SP>
        <Logos>
            <SA href="https://www.drogaraia.com.br/" target="_blank">
                <SImg src= {drogaraia}/>
            </SA>
            <SA href="https://www.drogasil.com.br/" target="_blank">
                <SImg src= {drogasil}/>
            </SA>
            <SA href="http://www.farmasil.com.br/" target="_blank">
                <SImg src= {farmasil}/>
            </SA>
            <SA href="https://univers-pbm.com.br/beneficioMedicamentos/"target="_blank">
                <SImg src= {univers}/>
            </SA>
            <SA href="https://www.4bio.com.br/"target="_blank">
                <SImg src= {bio}/>
            </SA>
        </Logos>
        <Link to="/">
            <SImg src={rd_small} />
        </Link>
    </SFooter>
)

export default Footer;