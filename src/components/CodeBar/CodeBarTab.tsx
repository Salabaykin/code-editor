import React from 'react';
import {EditorType} from "../../types/editorTypes";

type CodeBarTabProps = {
    children: string;
    tabName: EditorType,
    activeTab: string,
    onTabClick: (tabName: EditorType) => void,
};

const CodeBarTab = ({tabName, activeTab, onTabClick, children}: CodeBarTabProps) => {

    return (
        <button
            onClick={() => onTabClick(tabName)}
            className={`button ${activeTab === tabName ? 'button--active' : ''}`}
        >
            {children}
        </button>
    )

};

export default CodeBarTab;