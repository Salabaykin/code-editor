export type EditorContextType = {
    html: string,
    css: string,
    js: string,
    setHtml?: (value: string) => void,
    setCss?: (value: string) => void,
    setJs?: (value: string) => void,
}

export enum EditorTypes {
    html = 'html',
    css = 'css',
    javascript = 'javascript'
}

export type EditorType =
    EditorTypes.css |
    EditorTypes.html |
    EditorTypes.javascript;