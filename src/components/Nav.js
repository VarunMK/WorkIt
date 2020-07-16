import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { GithubFilled, SettingFilled } from "@ant-design/icons";
const { Header } = Layout;

class Nav extends React.Component {
  render() {
    return (
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/WorkIt">
              <strong>WorkIt</strong>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/settings">
              <SettingFilled style={{ margin: "0 auto", fontSize: "17.5px" }} />
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="https://github.com/Zotako/WorkIt">
              <GithubFilled style={{ margin: "0 auto", fontSize: "17.5px" }} />
            </a>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Nav;
