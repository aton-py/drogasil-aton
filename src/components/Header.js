import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import rd from '../assets/rd.png'

const SHeader = styled.header`
    border-top: 1px solid ${({ theme}) => theme.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    align-self:center;
    max-width: 1200px;
    margin: 10px 0 10px 0;
    padding: 10 px 0 10px 0;
`;

const Image = styled.img`
    max-width: 100%;
`

const Header = ({ children }) => (
    <SHeader>
        <Link to='/'>
            <Image src={rd}/>
        </Link>
        {children}
    </SHeader>
)

export default Header;