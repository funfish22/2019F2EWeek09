import React, { useState } from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { createNoteRequest, createNoteSuccess, getTargetCard, handleLivinig } from 'config/library/redux/store/Home/action';

import Logo from 'resources/components/atoms/Logo';
import AddNoteButton from 'resources/components/atoms/AddNoteButton';

interface Props {
    onDark: any;
    onLight: any;
}

interface State { }

const Menu = (props: Props, state: State) => {
    const { onDark, onLight } = props;

    const dispatch = useDispatch();

    const create = () => {
        const Today = new Date();
        const title = '無標題';
        const time = `${Today.getFullYear()}/${Today.getMonth() + 1}/${Today.getDate()}`;
        const id = Today.getTime();

        dispatch(createNoteRequest({title, time, id}));
        dispatch(createNoteSuccess({title, time, id}));
        dispatch(getTargetCard(id))
        dispatch(handleLivinig(true))
    }
    
    return(
        <MenuRoot>
            <LogoRoot/>
            <AddNoteButtonRoot onClick={create}/>
            <SwitchButtonRoot>
                <SwitchButtonTitle>模式</SwitchButtonTitle>
                <SwitchButtonBlock>
                    <SwitchButton>
                        <SwitchButtonIcon className="icon-wb_sunny" onClick={onLight}/>
                    </SwitchButton>
                    <SwitchButton>
                        <SwitchButtonIcon className="icon-nights_stay" onClick={onDark}/>
                    </SwitchButton>
                </SwitchButtonBlock>
            </SwitchButtonRoot>
        </MenuRoot>
    )
}

export default Menu;

const MenuRoot = styled.div`
    width: 256px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor};
    padding: 50px 33px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
`;

const LogoRoot = styled(Logo)`
    margin-left: 24px;
`

const AddNoteButtonRoot = styled(AddNoteButton)`
    margin: 33px 0;
`

const SwitchButtonRoot = styled.div`
    margin-top: auto;
    display: flex;
    align-items: center;
`;

const SwitchButtonTitle = styled.p`
    color: #fff;
`;

const SwitchButtonBlock = styled.div`
    margin-left: 20px;
    display: flex;
`;

const SwitchButton = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-right: 5px;
    }
`;

const SwitchButtonIcon = styled.span`
    font-size: 22px;
    color: #fff;
`;