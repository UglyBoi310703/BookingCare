import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { GoMute } from 'react-icons/go';
import { VscUnmute } from 'react-icons/vsc';
function Intro() {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <div className="mt-3 container-fluid bg-body-secondary intro">
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                controls={false}
                height="70%"
                volume={1}
                muted={isMuted}
                url="https://www.youtube.com/watch?v=RmZPRz6iC6E"
                className="videoIntro"
            />

            <div className="InfoIntro d-flex flex-column">
                <h1>Medlatec</h1>
                <h3>An vui mỗi ngày niềm vui tràn đầy</h3>
            </div>
            {isMuted ? (
                <GoMute className="btnVolume" color="white" z={20} onClick={() => setIsMuted(!isMuted)} />
            ) : (
                <VscUnmute className="btnVolume" color="white" z={20} onClick={() => setIsMuted(!isMuted)} />
            )}
        </div>
    );
}

export default Intro;
