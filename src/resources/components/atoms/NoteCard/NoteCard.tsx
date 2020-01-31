import React from 'react';
import styled, {css} from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const source = [
    {
        "title": "first",
        "content": "<span>內容</span>",
        "time": "2019/9/5",
        "tags": [
            {
            "tagTitle": "健康",
            "id": 1
            }
        ],
        "files": false,
        "id": 1
    }
]

interface Props {
    Note: Array<{
        id: number,
        title: string,
        time: string,
        tags: Array<{
            id: number,
            tagTitle: string
        }>,
        files: boolean,
        text: string
    }>,
    NoteId: number,
    onClick: any
}

interface State { }

interface MyStyle {
    isCurrent: boolean
}

const NoteCard = (props: Props, state: State) => {
    const { Note, NoteId, onClick } = props;

    return(
        <>
            {
                Note && Note.sort((a: any, b: any) => a.id > b.id ? -1 : 1).map((row: any) => {
                    const isCurrent = NoteId === row.id

                    return(
                        <NoteCardRoot key={row.id} onClick={() => onClick(row.id)}>
                            <NoteTitleBG isCurrent={isCurrent}/>
                            <NoteTitle>{row.title}</NoteTitle>
                            <NoteGutter/>
                            <NoteText>{row.text}</NoteText>
                            <NoteFooter>
                                <NoteTagRoot>
                                    {
                                        row.tags && row.tags.map((row: any) => (
                                            <NoteTag key={row.id}>{row.tagTitle}</NoteTag>
                                        ))
                                    }
                                </NoteTagRoot>
                                {
                                    row.files && (
                                        <NoteIcon className="icon-attachment"/>
                                    )
                                }
                                <NoteTime>{row.time}</NoteTime>
                            </NoteFooter>
                        </NoteCardRoot>
                    )
                })
            }
        </>
    )
}

NoteCard.defaultProps = {
    Note: source
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
    opacity: ${(props: MyStyle) => !props.isCurrent ? '0' : '1'};
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

    &:not(:first-of-type) {
        margin-top: 15px;
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
    height: 96px;
    max-height: 96px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-break: break-all;
    margin-bottom: 7px;
`;

const NoteFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    position: relative;
    z-index: 1;
`;

const NoteTagRoot = styled.ul`
    display: flex;
`;

const NoteTag = styled.li`
    color: #2F419B;
    padding: 3px 16px;
    font-size: 14px;
    background-color: #E9EBF4;
    border-radius: 4px;

    &:not(:first-of-type){
        margin-left: 5px;
    }
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