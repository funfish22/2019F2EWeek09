import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { getNoteRequest } from 'config/library/redux/store/Home/action';

import NoteList from 'pages/default/NoteList';
import Editor from 'resources/components/atoms/Editor';

interface Props {}

interface State {}

const Home = (props: Props, state: State) => {
    const dispatch = useDispatch();

    dispatch(getNoteRequest())
    
    return(
        <>
            <NoteList/>
            <EditorRoot>
                <EditorTitle type="text" placeholder="無標題"/>
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