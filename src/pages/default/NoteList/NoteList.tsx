import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getTargetCard } from 'config/library/redux/store/Home/action';

import Search from 'resources/components/atoms/Search';
import NoteCard from 'resources/components/atoms/NoteCard';

interface Props {}

interface State {
    Home: { 
        note: Array<{
            id: number,
            title: string,
            time: string,
            tags: Array<{
                    id: number,
                    tagTitle: string
                }>,
            files: boolean
        }>,
        targetCardId: number
    }
}

const NoteList = (props: Props, state: State) => {
    const dispatch = useDispatch();

    const Note = useSelector((state: State) => state.Home.note);
    const TargetNodeId = useSelector((state: State) => state.Home.targetCardId);

    const targetCard = (id: number) => {
        dispatch(getTargetCard(id))
    }

    return(
        <NoteListRoot>
            <Search/>
            <Gutter/>
            <NoteCard Note={Note} NoteId={TargetNodeId} onClick={targetCard}/>
        </NoteListRoot>
    )
}

export default NoteList;

const NoteListRoot = styled.div`
    background-color: #F4F6F7;
    border-right: 1px solid #E1E1E1;
    padding: 50px 33px;
`;

const Gutter = styled.hr`
    width: calc(100% + 66px);
    margin: 20px 0 33px -33px;
    border: none;
    padding: 0;
    background-color: #D9D9D9;
    height: 1px;
`;