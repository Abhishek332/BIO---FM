import './footer.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TuneIcon from '@mui/icons-material/Tune';

const Footer = ()=>{
    return <div className="footer">
        <div className="footer-wrapper">
        <div className="button active">
            <DashboardIcon className="icon"/>
            <p>Dashboard</p>
        </div>
        <div className="button">
            <EqualizerIcon className="icon"/>
            <p>Analytics</p>
        </div>
        <div className="button">
            <TuneIcon className="icon"/>
            <p>Settings</p>
        </div>
        </div>
    </div>
}

export default Footer