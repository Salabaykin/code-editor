import React from 'react';
import WebCam from "./WebCam";
import Preview from "./Preview";

const Page = () => {
    return (
        <div className="page">
            <div className="page__header">
                <WebCam />
            </div>
            <div className="page__body">
                <Preview />
            </div>
        </div>
    )
};

export default Page;