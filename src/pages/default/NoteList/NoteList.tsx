import React from 'react';
import styled from 'styled-components';

import Search from 'resources/components/atoms/Search';

interface Props {}

interface State {}

const NoteList = (props: Props, state: State) => {
    return(
        <NoteListRoot>
            <Search/>
        </NoteListRoot>
    )
}

export default NoteList;

const NoteListRoot = styled.div`
    background-color: #F4F6F7;
    border-top: 1px solid #E1E1E1;
    border-right: 1px solid #E1E1E1;
    border-bottom: 1px solid #E1E1E1;
    padding: 50px 33px;
`;