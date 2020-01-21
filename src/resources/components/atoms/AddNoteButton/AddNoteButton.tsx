import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: any,
    onClick: any
}

interface State {}

const AddNoteButton: React.FunctionComponent<Props> = (props: Props, state: State) => {
    const { className, onClick } = props;

    return(
        <AddNoteButtonRoot className={className} onClick={onClick}>
            <AddIcon></AddIcon>
            <AddNoteText>新增筆記</AddNoteText>
        </AddNoteButtonRoot>
    )
}

export default AddNoteButton;

const AddNoteButtonRoot = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 11px 46px 11px 30px;
    cursor: pointer;
    box-shadow: 0px 0px 6px rgba(255,255,255,.29);
    border-radius: 8px;
    white-space: nowrap;
    background-color: #fff;
    font-family: 'Helvetica Neue', 'Microsoft JhengHei', sans-serif;
    transition: .5s;

    &:hover{
        box-shadow: 0px 0px 15px rgba(255,255,255,.5);
    }
`;

const AddNoteText = styled.p`
    font-size: 18px;
    line-height: 23px;
    font-weight: bold;
    color: #2F419B;
`;

const AddIcon = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #2F419B;
    position: relative;
    margin-right: 16px;

    &:after,&:before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
    }

    &:after {
        width: 14px;
        height: 2px;
    }

    &:before{
        width: 2px;
        height: 14px;
    }
`;