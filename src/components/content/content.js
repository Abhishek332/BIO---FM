import React from 'react'
import './content.css'
import BannerButton from './BannerButton/BannerButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Row from './Row/Row'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import VideoWrapper from './VideoWrapper/VideoWrapper';


function Content() {
    return (
        <div className="content">
            <BannerButton title="Get discovered!" detail="Copy your bio link and paste it in your profile to let people find you.">
                <ContentCopyIcon/>
            </BannerButton>
            <BannerButton title="Tell us what you think" detail="Request a feature or suggest a change, let's make bio better together!">
                <LightbulbIcon/>
            </BannerButton>
            <Row title="My Socials!">
                <div className="icon-wrapper">
                    <InstagramIcon/>
                    <TwitterIcon className="active"/>
                    <LinkedInIcon/>
                    <FacebookIcon/>
                </div>
            </Row>
            <hr/>
            <Row title="About Me">
                <p>Hi! Welcome to my Bio. I'm a big fan of NickleBack!</p>
            </Row>
            <hr/>
            <VideoWrapper img="https://media4.giphy.com/media/dZ2u0Wi6oEBgD4WkrX/giphy.webp"/>
            <hr/>
        </div>
    )
}

export default Content
