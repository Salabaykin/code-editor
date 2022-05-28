import React, {createContext, useContext, useState} from "react";
import {EditorContextType} from "../types/editorTypes";

const EditorContext = createContext<EditorContextType>({
    html: '',
    css: '',
    js: '',
});

const EditorProvider = ({children}: any) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const value = {
        html, css, js, setJs, setCss, setHtml
    };

    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    )
};

const UseGlobalContext = () => useContext(EditorContext);

export {
    UseGlobalContext,
    EditorProvider,
    EditorContext,
};