import React from 'react'
import './Row.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Row({title, children}) {
    return (
        <div className="row">
            <div className="title">
                <AccountCircleIcon/>
                <h3>{title}</h3>
            </div>
           <div>
           {children} 
           </div>
        </div>
    )
}

export default Row
