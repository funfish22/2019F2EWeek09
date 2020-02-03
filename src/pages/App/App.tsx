import React, { useState } from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from 'resources/themes/color';

import Router from './Router';
import Menu from './Menu';

interface Props { }

interface State { }

const App = (props: Props, state: State) => {

    const [theme, setTheme] = useState('light');
    
    const onDark = () => {
        setTheme('dark');
    }

    const onLight = () => {
        setTheme('light');
    }

    return(
        <HashRouter>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <Container>
                    <Menu onDark={onDark} onLight={onLight}/>
                    <Router/>
                </Container>
            </ThemeProvider>
        </HashRouter>
    )
}

export default App;

const Container = styled.div`
    display: flex;
`;