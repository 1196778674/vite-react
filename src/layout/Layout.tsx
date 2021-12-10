import React, { FC, useState, useCallback, useMemo, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation, Route } from "react-router-dom";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Index from "../views/Index";
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
  const [collapsed] = useState<boolean>(false);

  const location = useLocation();

  const defaultActive = useMemo(
    () => `${location.pathname === "/" ? "home" : location.pathname}`,
    [location]
  );

  const defaultSelectedKeys = useMemo(
    () => `${location.pathname === "/" ? defaultActive : location.pathname}`,
    [location.pathname]
  );

  const history = useNavigate();
  const changeMenu = useCallback(
    (e) => {
      history(`${e.key}`);
    },
    [history]
  );

  useEffect(() => {
    history(`${defaultActive}`);
  }, []);

  return (
    <LayoutStyle>
      <SiderStyle trigger={null} collapsible collapsed={collapsed}>
        <LogoStyle>小灰灰</LogoStyle>
        <MenuStyle
          theme="light"
          mode="inline"
          defaultSelectedKeys={[defaultSelectedKeys]}
        >
          <Menu.Item key="/home" icon={<UserOutlined />} onClick={changeMenu}>
            欢迎页
          </Menu.Item>
          <Menu.Item
            key="/2"
            icon={<VideoCameraOutlined />}
            onClick={changeMenu}
          >
            页签一
          </Menu.Item>
          <Menu.Item key="/3" icon={<UploadOutlined />} onClick={changeMenu}>
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
