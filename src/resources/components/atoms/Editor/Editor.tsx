import React, {useEffect} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import BraftEditor, {BraftEditorProps, ExtendControlType} from 'braft-editor';
import { handleLivinig } from 'config/library/redux/store/Home/action';

import 'braft-editor/dist/index.css';
import './index.css';

interface Props {
    className?: string,
    onChange: any,
    Content: string
}

interface State {
    Home: {
        targetCard: {
            editorState: any,
            text: any
        },
        isLivinig: boolean
    }
}

const { useState } = React;

const editorProps: BraftEditorProps = {
    controls: [
        'headings', 'font-family', 'font-size', 'text-color', 'hr', 'italic', 'bold', 'letter-spacing', 'line-height', 
        'link', 'list-ol', 'list-ul', 'blockquote', 'code', 'clear', 'emoji', 'media', 'redo', 'remove-styles', 
        'separator', 'strike-through', 'superscript', 'subscript', 'text-align', 'text-color', 'text-indent', 
        'underline', 'undo', 'fullscreen'
    ],
    colors:[
        '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
        '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
        '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50'
    ]
}

const Editor = (props: Props, state: State) => {
    const isLivinig = useSelector((state: State) => state.Home.isLivinig)

    const dispatch = useDispatch();

    const [editorState, createEditor] = useState(BraftEditor.createEditorState(null))
    const { onChange, Content } = props;

    const handleChange = (editor: any) => {
        const raw = editor.toRAW(true)
        const contentHtml = editor.toHTML()
        let contentText = ''
        raw.blocks.forEach((row: any) => {
            contentText += row.text
        })

        createEditor(editor)
        onChange(contentText, contentHtml)
    }

    useEffect(() => {
        if(isLivinig === true) {
            setEditorContentAsync()
        }
        
        return () => {
            dispatch(handleLivinig(false))
        }
    });

    const setEditorContentAsync = () => {
        isLivinig && createEditor(BraftEditor.createEditorState(Content))
    }

    const {className} = props;

    return(
        <BraftEditor className={className} {...editorProps} language="zh-hant" value={editorState} onChange={handleChange}/>
    )
}

export default Editor;