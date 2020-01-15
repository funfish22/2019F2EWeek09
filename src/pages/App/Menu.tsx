import React from 'react';
import styled from 'styled-components';

import Logo from 'resources/components/atoms/Logo';
import AddNoteButton from 'resources/components/atoms/AddNoteButton';

interface Props { }

interface State { }

const Menu = (props: Props, state: State) => {
    return(
        <MenuRoot>
            <LogoRoot/>
            <AddNoteButtonRoot/>
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

const LogoRoot = styled(Logo)`
    margin-left: 24px;
`

const AddNoteButtonRoot = styled(AddNoteButton)`
    margin: 33px 0;
`