import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { createNoteRequest, createNoteSuccess } from 'config/library/redux/store/Home/action';

import Logo from 'resources/components/atoms/Logo';
import AddNoteButton from 'resources/components/atoms/AddNoteButton';

interface Props { }

interface State { }

const Menu = (props: Props, state: State) => {
    const dispatch = useDispatch();

    const create = () => {
        const Today = new Date();
        const title = '無標題';
        const time = `${Today.getFullYear()}/${Today.getMonth() + 1}/${Today.getDate()}`;
        const id = Today.getTime();

        dispatch(createNoteRequest({title, time, id}));
        dispatch(createNoteSuccess({title, time, id}));
    }
    
    return(
        <MenuRoot>
            <LogoRoot/>
            <AddNoteButtonRoot onClick={create}/>
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