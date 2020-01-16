import React from 'react';
import styled from 'styled-components';

interface Props {}

interface State {}

const NoteCard = (props: Props, state: State) => {
    return(
        <NoteCardRoot>
            <NoteTitleBG/>
            <NoteTitle>無標題</NoteTitle>
            <NoteGutter/>
            <NoteText></NoteText>
            <NoteFooter>
                <NoteTag>健康</NoteTag>
                <NoteIcon className="icon-attachment"/>
                <NoteTime>2019/9/5</NoteTime>
            </NoteFooter>
        </NoteCardRoot>
    )
}

export default NoteCard;

const NoteTitleBG = styled.div`
    position: absolute;
    border-radius: 5px;
    border: 3px solid #2F419B;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: .2s;

    &:after{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 33px 33px 0;
        border-color: transparent #F4F6F7 transparent transparent;
        top: -4px;
        right: -4px;
    }

    &:before{
        content: '';
        position: absolute;
        width: 42px;
        height: 3px;
        background-color: #2F419B;
        transform: rotate(45deg);
        right: -8px;
        top: 12px;
        z-index: 1;
    }
`

const NoteCardRoot = styled.div`
    width: 290px;
    max-width: 100%;
    box-shadow: 0px 0px 6px rgba(#A3A3A3, 0.5);
    padding: 35px 23px 23px 23px;
    background: linear-gradient(to left bottom,transparent 50%,#e9ebf4 0) no-repeat 100% 0/32px 32px,linear-gradient(-135deg,transparent 23px,#fff 0);
    border-radius: 4px;
    position: relative;
    box-shadow: 0px 0px 6px #F0F0F0;
    
    &:hover{
        ${NoteTitleBG} {
            opacity: 1;
        }
    }

    &:after{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0px 47px 47px 0;
        border-color: transparent #F4F6F7 transparent transparent;
        top: -9px;
        right: -9px;
        z-index: 1;
    }
`;

const NoteTitle = styled.h2`
    color: #555;
    font-weight: bold;
    font-size: 18px;
    position: relative;
    z-index: 1;
`;

const NoteGutter = styled.hr`
    padding: 0;
    margin: 14px 0;
    border: none;
    width: 100%;
    height: 1px;
    background-color: #ECECEC;
    position: relative;
    z-index: 1;
`;

const NoteText = styled.p`
    height: 103px;
    max-height: 103px;
    position: relative;
    z-index: 1;
`;

const NoteFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    position: relative;
    z-index: 1;
`;

const NoteTag = styled.div`
    color: #2F419B;
    padding: 3px 16px;
    font-size: 14px;
    background-color: #E9EBF4;
    border-radius: 4px;
`;

const NoteIcon = styled.span`
    margin-left: auto;
    margin-right: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #666;
`;

const NoteTime = styled.div`
    font-size: 15px;
    color: #666666;
`;