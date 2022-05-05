import React, {useContext} from "react";
import { Button, Avatar, Tooltip } from "antd";
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
        history("/about");
    }

    const handleHowItWorksClick = () => {
        history("/how-it-works");
    }
    
    // const handleLoginClick = () => {
    //     if(!authUser.loggedIn) {
    //         fbSignIn();
    //     }
    // }

    // Tooltip on avatar not working :(
    return (
        <div className="landing-navbar">
            <div className="logo" >
                <img src={Logo} alt="logo" onClick={handleLogoClick}/>
                <h1 onClick={handleLogoClick}>Minute</h1>
            </div>
            <div className="nav-links">
                <Button type="text" onClick={handleAboutClick}><span className="button-text-text text-white">About Us</span></Button>
                <Button type="text" onClick={handleHowItWorksClick}><span className="button-text-text text-white">How It Works</span></Button>
                {authUser.loggedIn ?
                    <div style={{marginLeft: "0.5em"}}>
                        <Tooltip title={authUser.displayName} placement="bottom" >
                                {authUser.photoUrl ?
                                <Avatar src={authUser.photoUrl} alt={authUser.displayName} size="large"/> 
                                : <Avatar icon={<UserOutlined />} alt={authUser.displayName} size="large"/>}
                        </Tooltip>
                    </div>
                : <></>/*<Button type="text" ></Button>*/}
            </div>
        </div>
    )
}

export default LandingNavbar;