import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string
}

interface State {}

const Search = (props: Props, state: State) => {
    const { className } = props;

    return(
        <SearchRoot className={className}>
            <Icon className="icon-search_24px"></Icon>
            <Input type="text" placeholder="搜尋您的筆記"/>
        </SearchRoot>
    )
}

export default Search;

const SearchRoot = styled.div`
    display: inline-flex;
    max-width: 290px;
    width: 100%;
    align-items: center;
    border-radius: 8px;
    background-color: #E6E6E6;
    padding: 12px 20px;
`;

const Icon = styled.span`
    font-size: 21px;
    color: #333;
`;

const Input = styled.input`
    font-family: 'Helvetica Neue','Microsoft JhengHei',sans-serif;
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    margin-left: 12px;
    flex: 1;
    font-weight: bold;

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