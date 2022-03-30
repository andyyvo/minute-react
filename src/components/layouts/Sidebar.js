// RESOURCES
// https://github.com/SudeepTimalsina/ReactAnt/blob/master/src/components/layouts/sidebar.tsx
// https://create-react-app.dev/docs/adding-images-fonts-and-files/
// https://ant.design/components/icon/
// https://reactrouter.com/docs/en/v6
// https://reactrouter.com/docs/en/v6/getting-started/tutorial

import React from "react";
import { Menu } from "antd";
import {
    AudioOutlined,
    CalendarTwoTone,
    BookTwoTone,
    TrophyTwoTone,
    SettingTwoTone,
    LogoutOutlined,
} from '@ant-design/icons';
// import { ReactComponent as Logo } from './src/assets/images/logo-blue-teal.svg';
import Logo from './logo-blue-teal.svg';
import { useNavigate } from "react-router-dom";

const SidebarNav = () => {
    const history = useNavigate();

    const handleRecordClick = () => {
        history("/record");
    }

    const handleGoalClick = () => {
        history("/goal");
    }

    const handleLearnClick = () => {
        history("/learn");
    }

    const handleAchievementClick = () => {
        history("/achievement");
    }

    const handleSettingClick = () => {
        history("/setting");
    }

    const handleLogoutClick = () => {
        history("/");
    }

    return (
        <div>
            <div style={{height: "32px", margin: "16px"}}>
                <img src={Logo} alt="logo" style={{height: "32px", width: "32px", margin: "8px"}}/>
                <h1>Minute</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={handleRecordClick}>
                    <AudioOutlined />
                    <span> Record</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleGoalClick}>
                    <CalendarTwoTone />
                    <span> Goals</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleLearnClick}>
                    <BookTwoTone />
                    <span> Learn</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={handleAchievementClick}>
                    <TrophyTwoTone />
                    <span> Achievements</span>
                </Menu.Item>
                <Menu.Item key="5" onClick={handleSettingClick}>
                    <SettingTwoTone />
                    <span> Settings</span>
                </Menu.Item>
                <Menu.Item key="6" onClick={handleLogoutClick}>
                    <LogoutOutlined />
                    <span> Logout</span>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default SidebarNav;