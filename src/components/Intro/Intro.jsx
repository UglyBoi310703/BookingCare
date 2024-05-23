import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { GoMute } from 'react-icons/go';
import { VscUnmute } from 'react-icons/vsc';
function Intro() {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <div className="mt-3 container-fluid  intro">
            <ReactPlayer
                playing={true}
                loop={false}
                width="100%"
                controls={false}
                height="70%"
                volume={1}
                muted={isMuted}
                url="https://www.youtube.com/watch?v=RmZPRz6iC6E"
                className="videoIntro"
            />

            {isMuted ? (
                <GoMute className="btnVolume" color="white" z={20} onClick={() => setIsMuted(!isMuted)} />
            ) : (
                <VscUnmute className="btnVolume" color="white" z={20} onClick={() => setIsMuted(!isMuted)} />
            )}
        </div>
    );
}

export default Intro;
