import React, { useState } from "react";
import { Layout } from "antd";
import SidebarNav from "./Sidebar";
import ApplicationRoutes from "../../config/ApplicationRoutes";

const { Header, Sider, Content } = Layout;


const AppPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} >
                <SidebarNav />
            </Sider>
            <Layout>
                <Header className="siteLayoutBackground" style={{ padding: 0, background: "#001529" }}>
                </Header>
                <Content style={{ margin: "24px 16px 0", padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
                    <ApplicationRoutes />
                </Content>
            </Layout>
        </Layout>
    );
}

export default AppPage;