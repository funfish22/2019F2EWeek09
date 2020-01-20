import React, { useState } from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import Router from './Router';
import Menu from './Menu';

interface Props { 
    getNoteRequest: Function
}

interface State { }

const App = (props: Props, state: State) => {

    props.getNoteRequest()

    return(
        <HashRouter>
            <Container>
                <Menu/>
                <Router/>
            </Container>
        </HashRouter>
    )
}

export default App;

const Container = styled.div`
    display: flex;
`;