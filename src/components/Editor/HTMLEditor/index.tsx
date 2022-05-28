import React from 'react';
import Editor from "../Editor";
import {UseGlobalContext} from "../../../context";
import {EditorTypes} from "../../../types/editorTypes";

const HTMLEditor = () => {
    const {html, setHtml} = UseGlobalContext();

    return (
        <Editor
            type={EditorTypes.html}
            value={html}
            setValue={setHtml}
         />
    )
}

export default HTMLEditor;