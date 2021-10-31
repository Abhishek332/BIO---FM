import './Main.css'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useContext} from 'react';
import {APIContext} from '../../App';

function Main() {
    const Val = useContext(APIContext);
    const handleClick = ()=>{
        Val.setMain(!Val.main);
        if(Val.main){
            Val.setToggle({"display" : "flex"});
        }
        else{
            Val.setToggle({"display" : "none"});
        }
    }


    return (
        <div className="main" style={ Val.toggle }>
            <div className="container">
                <div className="top">
                    <CloseIcon onClick={handleClick}/>
                </div>
                <ul>
                <li  onClick={handleClick}>
                        <div className="circle">
                            <PersonOutlineIcon/>
                        </div>
                        <p>My DashBoard</p>
                        <KeyboardArrowRightIcon className="arrow"/>
                    </li>
                    <li onClick={handleClick}>
                        <div className="circle">
                            <ContentCopyIcon/>
                        </div>
                        <p>Copy URL</p>
                        <KeyboardArrowRightIcon className="arrow"/>
                    </li>
                    <li onClick={handleClick}>
                        <div className="circle">
                            <UpgradeIcon/>
                        </div>
                        <p>Upgrade</p>
                        <KeyboardArrowRightIcon className="arrow"/>
                    </li>
                    <li onClick={handleClick}>
                        <div className="circle">
                            < MailOutlineIcon/>
                        </div>
                        <p>Support</p>
                        <KeyboardArrowRightIcon className="arrow"/>
                    </li>
                    <li onClick={handleClick}>
                        <div className="circle">
                            <InfoIcon/>
                        </div>
                        <p>What's Bio?</p>
                        <KeyboardArrowRightIcon className="arrow"/>
                    </li>
                    <li onClick={handleClick}>
                        <div className="circle">
                            <LogoutIcon/>
                        </div>
                        <p>Logout</p>
                        <KeyboardArrowRightIcon className="arrow"/>
                    </li>
                </ul>
                <div className="brand">
                    <AccountCircleIcon className="avatar"/>
                    <h2>Bio - FM</h2>
                </div>
            </div>
        </div>
    )
}

export default Main
