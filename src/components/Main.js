import styled from 'styled-components';
import React from 'react';

const StyledMain = styled.main`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Main = ({ children }) => (
    <StyledMain>{children}</StyledMain>
)

export default Main;