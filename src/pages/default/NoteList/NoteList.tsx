import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Search from 'resources/components/atoms/Search';
import NoteCard from 'resources/components/atoms/NoteCard';

interface Props {}

interface State {
    Home: { note: Array<{
        id: number,
        title: string,
        time: string,
        tags: Array<{
            id: number,
            tagTitle: string
        }>,
        files: boolean
    }>}
}

const NoteList = (props: Props, state: State) => {
    const Note = useSelector((state: State) => state.Home.note);

    return(
        <NoteListRoot>
            <Search/>
            <Gutter/>
            <NoteCard Note={Note}/>
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