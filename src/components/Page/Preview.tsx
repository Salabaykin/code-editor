import React, {useMemo} from 'react';
import {UseGlobalContext} from "../../context";

const Preview = () => {
    const {html, css, js} = UseGlobalContext();

    const renderHtmlDocument = useMemo(() => {
        return `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Title</title>
                    <style>${css}</style>
                </head>
                <body>${html}</body>
                <script>${js}</script>
            </html>
        `;
    }, [html, css, js]);

    return (
        <iframe
            title="preview"
            className="page__preview"
            srcDoc={renderHtmlDocument}
        />
    )
};

export default Preview;