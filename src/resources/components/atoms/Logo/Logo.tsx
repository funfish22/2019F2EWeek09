import React from 'react';
import styled from 'styled-components';

interface Props {}

interface State {}

const Logo = (props: Props, state: State) => {
    return(
        <LogoTitle>FreeNote</LogoTitle>
    )
}

export default Logo;

const LogoTitle = styled.h1`
    display: inline-block;
    font-size: 22px;
    position: relative;
    color: #fff;

    &:after{
        position: absolute;
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        bottom: 8px;
        right: -10px;
    }
`;