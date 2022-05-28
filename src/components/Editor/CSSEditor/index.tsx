import React from 'react';
import Editor from "../Editor";
import {EditorTypes} from "../../../types/editorTypes";
import {UseGlobalContext} from "../../../context";

const CSSEditor = () => {
    const {css, setCss} = UseGlobalContext();

    return (
        <Editor
            type={EditorTypes.css}
            value={css}
            setValue={setCss}
        />
    )
}

export default CSSEditor;