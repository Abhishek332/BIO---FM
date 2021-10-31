import React from 'react'
import './BannerButton.css'

function BannerButton({title, detail, children}) {
    return (
        <div className="BannerButton">
            <div className="circle">
                {children}
            </div>
            <div>
                <span>{title}</span>
                <p>{detail}</p>
            </div>
        </div>
    )
}

export default BannerButton