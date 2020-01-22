import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getNoteRequest, createNoteInfo } from 'config/library/redux/store/Home/action';

import NoteList from 'pages/default/NoteList';
import Editor from 'resources/components/atoms/Editor';

interface Props {}

interface State {
    Home: {
        targetCardId: number,
        targetCard: any,
    }
}

const Home = (props: Props, state: State) => {
    const dispatch = useDispatch();

    const TargetNodeId = useSelector((state: State) => state.Home.targetCardId);
    const TargetNodeTitle = useSelector((state: State) => state.Home.targetCard.title);

    const handleCardTitle = (e: any) => {
        dispatch(createNoteInfo(TargetNodeId, e.target.value))
    }

    useEffect(() => {
        dispatch(getNoteRequest())
    }, [dispatch]);

    return(
        <>
            <NoteList/>
            <EditorRoot>
                <EditorTitle type="text" placeholder="無標題" onChange={handleCardTitle} value={TargetNodeTitle}/>
                <Editor/>
            </EditorRoot>
        </>
    )
}

export default Home;

const EditorRoot = styled.div`
    padding: 52px 46px;
`;

const EditorTitle = styled.input`
    font-weight: bold;
    font-size: 21px;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 5px;
    margin-bottom: 5px;

    &::-webkit-input-placeholder{
        color: #A3A3A3;
    }

    &:-moz-placeholder{
        color: #A3A3A3;
    }

    &::-moz-placeholder{
        color: #A3A3A3;
    }

    &input:-ms-input-placeholder{
        color: #A3A3A3;
    }
`;