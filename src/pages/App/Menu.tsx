import React from 'react';
import styled from 'styled-components';

import Logo from 'resources/components/atoms/Logo'

interface Props { }

interface State { }

const Menu = (props: Props, state: State) => {
    return(
        <MenuRoot>
            <Logo/>
        </MenuRoot>
    )
}

export default Menu;

const MenuRoot = styled.div`
    width: 256px;
    min-height: 100vh;
    background-color: #2F419B;
    padding: 50px 33px;
`;