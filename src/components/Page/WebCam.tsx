import React, {useState} from 'react';
import Draggable from 'react-draggable';
import Webcam from "react-webcam";

const WebCam = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="web-cam">
            <button
                className="button"
                onClick={() => setIsActive(!isActive)}
            >
                WebCam
            </button>

            {isActive && <Draggable>
                <Webcam
                    className="web-cam__window"
                    audio={true}
                    width="300"
                    height="300"
                    videoConstraints={{
                        width: 300,
                        height: 300,
                        facingMode: 'user'
                    }}
                />
            </Draggable>}
        </div>
    )
};

export default WebCam;