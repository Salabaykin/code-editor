import React, {useState} from 'react';
import CodeBarTab from "./CodeBarTab";
import {HTMLEditor, CSSEditor, JSEditor} from "../Editor";
import {EditorType, EditorTypes} from "../../types/editorTypes";

const CodeBar = () => {
    const [activeTab, setActiveTab] = useState<string>('html');

    const onTabClick = (tabName: EditorType) => {
        setActiveTab(tabName);
    }

    const renderEditor = (type: string) => {
        switch (type) {
            case EditorTypes.html:
                return <HTMLEditor />;
            case EditorTypes.css:
                return <CSSEditor />;
            case EditorTypes.javascript:
                return <JSEditor />;
            default:
                break;
        }
    };

    return (
        <div className="code-bar">
            <div className="code-bar__tabs tabs">
                <CodeBarTab
                    tabName={EditorTypes.html}
                    activeTab={activeTab}
                    onTabClick={onTabClick}
                >
                    HTML
                </CodeBarTab>
                <CodeBarTab
                    tabName={EditorTypes.css}
                    activeTab={activeTab}
                    onTabClick={onTabClick}
                >
                    CSS
                </CodeBarTab>
                <CodeBarTab
                    tabName={EditorTypes.javascript}
                    activeTab={activeTab}
                    onTabClick={onTabClick}
                >
                    JavaScript
                </CodeBarTab>
            </div>

            <div className="code-bar__editor editor">
                {renderEditor(activeTab)}
            </div>
        </div>
    )
};

export default CodeBar;