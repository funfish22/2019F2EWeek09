import React from 'react';
import styled from 'styled-components';

interface Props {
    children: string,
    className?: string
}

interface State {}

const Title = (props: Props, state: State) => {
    const {className, children} = props

    return(
        <div className={className}>{children}</div>
    )
}

export default Title;