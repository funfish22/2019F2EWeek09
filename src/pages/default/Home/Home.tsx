import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getNoteRequest, createNoteInfo, createNoteText, getTargetCard, handleLivinig } from 'config/library/redux/store/Home/action';

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

    const TargetNoteId = useSelector((state: State) => state.Home.targetCardId);
    const TargetNoteTitle = useSelector((state: State) => state.Home.targetCard.title);
    const TargetNoteContent = useSelector((state: State) => state.Home.targetCard.content);
    const TargetNote = useSelector((state: State) => state.Home.targetCard);

    const handleCardTitle = (e: any) => {
        dispatch(createNoteInfo(TargetNoteId, e.target.value))
    }

    const handleCardText = (text: string, html: string) => {
        dispatch(createNoteText(TargetNoteId, text, html))
    }

    const targetCard = (id: number) => {
        dispatch(getTargetCard(id, TargetNote))
        dispatch(handleLivinig(true))
    }

    useEffect(() => {
        dispatch(getNoteRequest())
    }, [dispatch]);

    return(
        <>
            <NoteList onClick={targetCard}/>
            <EditorRoot>
                <EditorTitle type="text" placeholder="無標題" onChange={handleCardTitle} value={TargetNoteTitle}/>
                <Editor onChange={handleCardText} Content={TargetNoteContent}/>
            </EditorRoot>
        </>
    )
}

export default Home;

const EditorRoot = styled.div`
    padding: 52px 46px;
    max-height: 100vh;
    max-width: calc(100% - 613px);
    margin-left: auto;
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