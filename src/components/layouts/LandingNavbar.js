import React, {useContext} from "react";
import { Button, Avatar, Tooltip, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Logo from './logo-blue-teal.svg';
import { useNavigate } from "react-router-dom";
import { fbSignIn } from '../../service/firebase/fbConfig';
import { FirebaseContext } from "../../service/firebase/fbContext";

const LandingNavbar = () => {
    const {authUser} = useContext(FirebaseContext);
    const history = useNavigate();
    
    const handleLogoClick = () => {
        history("/");
    }
    
    const handleAboutClick = () => {
        history("about");
    }
    
    const handleLoginClick = () => {
        fbSignIn();
        history("app/setting");
    }

    console.log(authUser);

    return (
        <div className="landing-navbar">
            <div className="logo" >
                <img src={Logo} alt="logo" onClick={handleLogoClick}/>
                <h1 onClick={handleLogoClick}>Minute</h1>
            </div>
            <div className="nav-links">
                <Button type="text" onClick={handleAboutClick}><span className="button-text-text text-white">About</span></Button>
                {authUser.loggedIn ?
                    <Tooltip title={authUser.displayName} placement="bottom">
                    {/* <Popover content={<p>{authUser.displayName}</p>} title={authUser.displayName} trigger="hover"> */}
                    {authUser.photoUrl ?
                    <Avatar src={authUser.photoUrl} alt={authUser.displayName} size="large" onClick={handleLoginClick}/> 
                    : <Avatar icon={<UserOutlined />} alt={authUser.displayName} size="large" onClick={handleLoginClick}/>}
                    </Tooltip>
                    // </Popover>
                : <Button type="text" onClick={handleLoginClick}><span className="button-text-text text-white">Login</span></Button>
                }
            </div>
        </div>
    )
}

export default LandingNavbar;