import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import {
  changeEasy,
  changeMed,
  changeHard,
  changeEx,
  changeNos,
} from "../actions";
import history from "../history";
import { Card } from "antd";
import { Link } from "react-router-dom";
const Demo = (props) => {
  const onFinish = ({ numofex, easy, med, hard, nos }) => {
    var valid1 = /^\d+$/.test(numofex);
    var valid2 = /^\d+$/.test(easy);
    var valid3 = /^\d+$/.test(med);
    var valid4 = /^\d+$/.test(hard);
    var valid5 = /^\d+$/.test(nos);
    if (valid1 && valid2 && valid3 && valid4 && valid5) {
      props.changeEasy(easy, numofex, nos);
      props.changeMed(med, numofex, nos);
      props.changeHard(hard, numofex, nos);
      props.changeEx(numofex);
      props.changeNos(nos);
      history.goBack();
    } else {
      onFinishFailed("Enter a valid time/Fill up all the fields!");
    }
  };

  const onFinishFailed = (message) => {
    alert(message);
  };

  return (
    <div className="App2">
      <br />
      <br />
      <div style={{ textAlign: "center", backgroundColor: "white" }}>
        <h1 style={{ fontSize: "40px" }}>Settings</h1>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          span={12}
          offset={6}
        >
          <label htmlFor="numofex" style={{ color: "black" }}>
            Number Of Exercises (Per Round)
          </label>
          <br />
          <br />
          <Form.Item name="numofex">
            <Input
              type="number"
              min="1"
              max="10"
              style={{ width: "900px", color: "black" }}
              placeholder="Num of Exercises"
            />
          </Form.Item>
          <label htmlFor="secsofeasy" style={{ color: "black" }}>
            Active Time(in secs) For Each Exercise For Easy
          </label>
          <br />
          <br />
          <Form.Item name="easy">
            <Input
              type="number"
              min="1"
              max="40"
              style={{ width: "900px", color: "black" }}
              placeholder="Time In Secs"
            />
          </Form.Item>
          <label htmlFor="secsofmed" style={{ color: "black" }}>
            Active Time(in secs) For Each Exercise For Medium
          </label>
          <br />
          <br />
          <Form.Item name="med">
            <Input
              type="number"
              min="1"
              max="45"
              style={{ width: "900px", color: "black" }}
              placeholder="Time In Secs"
            />
          </Form.Item>
          <label htmlFor="secsofeasy" style={{ color: "black" }}>
            Active Time(in secs) For Each Exercise For Easy
          </label>
          <br />
          <br />
          <Form.Item name="hard">
            <Input
              type="number"
              min="1"
              max="60"
              style={{ width: "900px", color: "black" }}
              placeholder="Time In Secs"
            />
          </Form.Item>
          <label htmlFor="noofrounds" style={{ color: "black" }}>
            Number Of Rounds
          </label>
          <br />
          <br />
          <Form.Item name="nos">
            <Input
              type="number"
              min="1"
              max="30"
              style={{ width: "900px", color: "black" }}
              placeholder="Number of rounds"
            />
          </Form.Item>
          <Form.Item>
            <button type="primary" htmlType="submit">
              <strong>Submit</strong>
            </button>
          </Form.Item>
        </Form>
      </div>
      <footer>
        <div
          className="footer-bottom text-center"
          id="foot"
          style={{ color: "white" }}
        >
          Copyright © 2020 WorkIt By Zotako Corp
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    beginningTime: state.beginningTime,
  };
};

export default connect(mapStateToProps, {
  changeEasy,
  changeMed,
  changeHard,
  changeEx,
  changeNos,
})(Demo);
