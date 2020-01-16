import React from 'react';
import BraftEditor, {BraftEditorProps, ExtendControlType} from 'braft-editor';

import 'braft-editor/dist/index.css';
import './index.css';

interface Props {
    className?: string
}

interface State {}

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
    const [editorState, createEditor] = useState(BraftEditor.createEditorState(null))

    const handleChange = (editorState: any) => {
        console.log(editorState.toHTML())
        createEditor(editorState)
    }

    const {className} = props;

    return(
        <BraftEditor className={className} {...editorProps} language="zh-hant" value={editorState} onChange={handleChange}/>
    )
}

export default Editor;