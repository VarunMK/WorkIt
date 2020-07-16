import React, { Component } from "react";
import { Button } from "antd";
import { Divider } from "antd";
import { Layout } from "antd";
import "C:/Users/varunmk/my-app/src/work.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  HashRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/Main";
import settings from "./components/settings";
import history from "./history";
import Nav from "./components/Nav";
const App = () => {
  return (
    <Layout>
      <HashRouter history={history}>
        <Nav />
        <Route path="/" exact component={Main} />
        <Route path="/WorkIt" exact component={Main} />
        <Route path="/settings" exact component={settings} />
      </HashRouter>
    </Layout>
  );
};

export default App;
