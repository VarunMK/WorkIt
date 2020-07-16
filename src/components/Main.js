import React from "react";
import { Button, Layout, Menu } from "antd";
import { Divider } from "antd";
import "C:/Users/varunmk/my-app/src/work.css";
import { connect } from "react-redux";
import { changeEx } from "../actions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { GithubFilled, SettingFilled } from "@ant-design/icons";
const { Header } = Layout;

const prependZero = (num) => {
  if (num.toString().length == 1) {
    return "0" + num;
  } else if (Number.isInteger(num) == false) {
    return Math.round(num);
  } else {
    return num;
  }
};

const getColor = (isOn) => {
  return isOn ? "#db2828" : "#21ba45";
};

const getText = (isOn) => {
  return isOn ? "Stop" : "Start";
};

class Main extends React.Component {
  state = {
    isOn: false,
    time: {
      minu: this.props.beginingTime.easy.minu,
      secs: this.props.beginingTime.easy.secs,
    },
    timer: setInterval(this.timer, 1000),
    type: "Easy",
    value: "",
  };
  getStartTime = (type) => {
    if (type === "Easy") {
      return {
        minu: this.props.beginingTime.easy.minu,
        secs: this.props.beginingTime.easy.secs,
      };
    } else if (type == "Medium") {
      return {
        minu: this.props.beginingTime.med.minu,
        secs: this.props.beginingTime.med.secs,
      };
    } else if (type == "Hard") {
      return {
        minu: this.props.beginingTime.hard.minu,
        secs: this.props.beginingTime.hard.secs,
      };
    }
  };
  startButton = () => {
    if (this.state.isOn) {
      this.setState({ isOn: false });
      clearInterval(this.state.timer);
    } else {
      this.setState({
        isOn: true,
      });
      this.setState({ timer: setInterval(this.timer, 1000) });
    }
  };
  timer = () => {
    const time = this.state.time;
    const minu = time.minu;
    const secs = time.secs;
    if (this.state.isOn) {
      if (minu == 0 && secs == 0) {
        alert(`${this.state.type} Done!`);
        this.resetButton(this.state.type);
        if (this.state.type == "Easy") {
          this.props.changeEx(this.props.beginingTime.count);
        }
      } else if (secs == 0) {
        this.setState({
          time: {
            minu: prependZero(minu - 1),
            secs: 59,
          },
        });
      } else {
        this.setState({
          time: {
            minu: minu,
            secs: prependZero(secs - 1),
          },
        });
      }
    } else {
      clearInterval(this);
    }
  };
  updateInput = (event) => {
    this.setState({ value: event.target.value });
  };
  stopButton = () => {
    if (this.state.isOn) {
      this.setState({ isOn: false });
      clearInterval(this.state.timer);
    } else {
      this.setState({ isOn: true });
      this.setInterval({ timer: setInterval(this.timer, 1000) });
    }
  };
  resetButton = () => {
    this.setState({ isOn: false, time: this.getStartTime(this.state.type) });
    clearInterval(this.state.timer);
  };
  getHeading = () => {
    if (this.state.isOn) {
      return <div>Workout in progress...</div>;
    } else if (this.state.time.minu === this.props.beginingTime.easy.minu)
      return <div>Start Workout</div>;
    else if (this.state.time.minu === this.props.beginingTime.med.minu)
      return <div>Start Workout</div>;
    else if (this.state.time.minu === this.props.beginingTime.hard.minu)
      return <div>Start Workout</div>;
    else return <div>Continue Workout</div>;
  };
  changeTimer = (timer) => {
    if (timer === 1) {
      this.resetButton();
      this.setState({
        time: this.getStartTime("Easy"),
        type: "Easy",
      });
    } else if (timer === 2) {
      this.resetButton();
      this.setState({
        time: this.getStartTime("Medium"),
        type: "Medium",
      });
    } else {
      this.resetButton();
      this.setState({
        time: this.getStartTime("Hard"),
        type: "Hard",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div id="show">
          <div className="main">
            <br />
            <br />
            <h1>WorkIt</h1>
            <h2>Your Workout Timer</h2>
            <p className="para">
              A workout timer based on your needs.
              <br /> Different settings and customization
              <br /> for the best possible experience.
            </p>
          </div>
        </div>
        <div id="color2"></div>
        <h1 className="sec-head" style={{ textAlign: "center" }}>
          Timer
        </h1>
        <Divider />
        <div style={{ textAlign: "center" }} className="to">
          <h1 style={{ fontSize: "45px" }}>{this.getHeading()}</h1>
          <h1 style={{ fontSize: "90px" }}>
            {this.state.time.minu + ":" + this.state.time.secs}
          </h1>
          <div>
            <Button
              type="primary"
              style={{
                backgroundColor: `${getColor(this.state.isOn)}`,
                borderColor: `${getColor(this.state.isOn)}`,
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
              onClick={this.startButton}
            >
              {getText(this.state.isOn)}
            </Button>
            <Button
              type="primary"
              style={{
                background: "#595959",
                borderColor: "#595959",
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
              onClick={this.resetButton}
            >
              Reset
            </Button>
          </div>
        </div>
        <br />
        <Divider />
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "40px" }}>Options</h1>
          <Button
            type="primary"
            style={{
              background: "#21ba45",
              borderColor: "#21ba45",
              margin: "0 10px",
              width: "200px",
              height: "40px",
              fontSize: "18px",
            }}
            onClick={() => this.changeTimer(1)}
          >
            Easy
          </Button>
          <Button
            type="primary"
            style={{
              background: "#2185d0",
              borderColor: "#2185d0",
              margin: "0 10px",
              width: "200px",
              height: "40px",
              fontSize: "18px",
            }}
            onClick={() => this.changeTimer(2)}
          >
            Medium
          </Button>
          <Button
            type="primary"
            style={{
              background: "#db2828",
              borderColor: "#db2828",
              margin: "0 10px",
              width: "200px",
              height: "40px",
              fontSize: "18px",
            }}
            onClick={() => this.changeTimer(3)}
          >
            Hard
          </Button>
        </div>
        <br />
        <br />
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
  }
}

const mapStateToProps = (state) => {
  return {
    beginingTime: state.beginingTime,
  };
};
export default connect(mapStateToProps, { changeEx })(Main);
