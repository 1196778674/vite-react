import React, { FC, useState, useCallback } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Index from "./views/Index";
const { Header, Sider, Content } = Layout;

export const LayoutStyle = styled(Layout)`
  height: 100%;
`;
const ContentStyle = styled(Content)`
  background: #fff;
  margin: 15px;
  padding: 15px;
`;
const LogoStyle = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;
const HeaderStyle = styled(Header)`
  background: #fff;
`;
const MenuStyle = styled(Menu)`
  background: #fff;
`;
const SiderStyle = styled(Sider)`
  background: #fff;
`;

const App: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [setCollapsed]);

  return (
    <LayoutStyle>
      <SiderStyle trigger={null} collapsible collapsed={collapsed}>
        <LogoStyle>小灰灰</LogoStyle>
        <MenuStyle theme="light" mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            欢迎页
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            页签一
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            页签二
          </Menu.Item>
        </MenuStyle>
      </SiderStyle>
      <LayoutStyle>
        <HeaderStyle style={{ padding: 0 }}></HeaderStyle>
        <ContentStyle>
          <Index />
        </ContentStyle>
      </LayoutStyle>
    </LayoutStyle>
  );
};
export default App;
