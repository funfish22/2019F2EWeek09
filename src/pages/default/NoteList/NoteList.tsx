import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Search from 'resources/components/atoms/Search';
import NoteCard from 'resources/components/atoms/NoteCard';

interface Props {
    onClick: any
}

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
            files: boolean,
            text: string
        }>,
        targetCardId: number
    }
}

const NoteList = (props: Props, state: State) => {
    const { onClick } = props;

    const Note = useSelector((state: State) => state.Home.note);
    const TargetNodeId = useSelector((state: State) => state.Home.targetCardId);

    return(
        <NoteListRoot>
            <Search/>
            <Gutter/>
            <NoteListBlock>
                <NoteCard Note={Note} NoteId={TargetNodeId} onClick={onClick}/>
            </NoteListBlock>
        </NoteListRoot>
    )
}

export default NoteList;

const NoteListRoot = styled.div`
    background-color: ${({ theme }) => theme.listRootBG};
    border-right: 1px solid ${({ theme }) => theme.listGutterColor};
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 256px;
    top: 0;
    bottom: 0;
`;

const Gutter = styled.hr`
    width: 100%;
    margin: 0;
    margin-top: 20px;
    border: none;
    padding: 0;
    background-color: ${({ theme }) => theme.listGutterColor};
    height: 1px;
`;

const NoteListBlock = styled.div`
    padding: 20px 33px;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 4px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.mainColor};
    }
`;