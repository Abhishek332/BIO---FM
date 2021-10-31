import './VideoWrapper.css'

import React from 'react'

function VideoWrapper({img}) {
    return (
        <div className="VideoWrapper">
            <img src={img} alt="" />
        </div>
    )
}

export default VideoWrapper
