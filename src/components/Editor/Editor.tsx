import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";

import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/snippets/javascript";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import {EditorType} from "../../types/editorTypes";

type EditorProps = {
    type: EditorType,
    value: any,
    setValue: any,
};

const Editor = ({type, value, setValue}: EditorProps) => {
    return (
        <AceEditor
            mode={type}
            value={value}
            theme="monokai"
            name={`editor_${type}`}
            fontSize="16"
            width="100%"
            height="100%"
            showPrintMargin={true}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }}
            onChange={(value) => setValue(value)}
        />
    )
};

export default Editor;