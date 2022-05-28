import React from 'react';
import Editor from "../Editor";
import {EditorTypes} from "../../../types/editorTypes";
import {UseGlobalContext} from "../../../context";

const JSEditor = () => {
    const {js, setJs} = UseGlobalContext();

    return (
        <Editor
            type={EditorTypes.javascript}
            value={js}
            setValue={setJs}
        />
    )
}

export default JSEditor;