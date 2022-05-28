import React from 'react';
import {EditorProvider} from "./context";
import CodeBar from "./components/CodeBar/CodeBar";
import Page from "./components/Page/Page";

function App() {
    return (
        <EditorProvider>
            <div className="container">
                <CodeBar />
                <Page />
            </div>
        </EditorProvider>
    );
}

export default App;
