import React from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import Router from './Router';
import Menu from './Menu';
import NoteList from 'pages/default/NoteList';

interface Props { }

interface State { }

const App = (props: Props, state: State) => {
    return(
        <HashRouter>
            <Container>
                <Menu/>
                <NoteList/>
                <Router/>
            </Container>
        </HashRouter>
    )
}

export default App;

const Container = styled.div`
    display: flex;
`;