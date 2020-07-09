import React from "react";
import { Button } from "antd";
import { Divider } from "antd";
import "C:/Users/varunmk/my-app/src/work.css";

const getColor = (isOn) => {
  return isOn ? "#db2828" : "#21ba45";
};

const getText = (isOn) => {
  return isOn ? "Stop" : "Start";
};

class App extends React.Component {
  beginingTime = {
    pomorado: {
      minu: "25",
      secs: "00",
    },

    shortbreak: {
      minu: "5",
      secs: "00",
    },

    longbreak: {
      minu: "15",
      secs: "00",
    },
    count: 0,
  };
  state = {
    isOn: false,
    time: {
      minu: this.beginingTime.pomorado.minu,
      secs: this.beginingTime.pomorado.secs,
    },
    timer: setInterval(this.timer, 1000),
    type: "Workout",
    value: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.beginingTime.pomorado.minu = this.state.value * 2;
    this.state.time.minu = this.beginingTime.pomorado.minu;
    this.state.time.secs = this.beginingTime.pomorado.secs;
    this.resetButton();
  };
  getStartTime = (type) => {
    if (type === "Workout") {
      return {
        minu: this.beginingTime.pomorado.minu,
        secs: this.beginingTime.pomorado.secs,
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
      if (minu === 0 && secs === 0) {
        alert(`${this.state.type} Done!`);
        this.resetButton(this.state.type);
      } else if (secs === 0) {
        this.setState({
          time: {
            minu: minu - 1,
            secs: 59,
          },
        });
      } else {
        this.setState({
          time: {
            minu: minu,
            secs: secs - 1,
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
      return <div>{this.state.type} in progress...</div>;
    } else if (this.state.time.minu === this.beginingTime.pomorado.minu)
      return <div>Start {this.state.type}</div>;
    else if (this.state.time.minu === this.beginingTime.shortbreak.minu)
      return <div>Start {this.state.type}</div>;
    else if (this.state.time.minu === this.beginingTime.longbreak.minu)
      return <div>Start {this.state.type}</div>;
    else return <div>Continue {this.state.type}</div>;
  };
  render() {
    return (
      <div className="App">
        <div id="show">
          <header>
            <nav className="ok">
              <ul className="ok">
                <li className="hide">
                  <a href="index.html">
                    <strong>WorkIt</strong>
                  </a>
                </li>
                <li>
                  <a href="settings.html">
                    <strong>Settings</strong>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
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
        <section id="timer">
          <div className="container">
            <h1 className="sec-head">Timer</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="InputRounds">Number Of Rounds</label>
                <br />
                <br />
                <input
                  type="number"
                  min="1"
                  className="form-check-input"
                  style={{ height: "35px" }}
                  id="InputRounds"
                  placeholder="Enter Rounds"
                  onChange={this.updateInput}
                />
              </div>
              <br />
              {/* <div className="col-sm-10">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check"
                    id="Easy"
                    name="choice"
                  />
                  <label className="form-check-input" for="Easy">
                    Easy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check"
                    id="Med"
                    name="choice"
                  />
                  <label className="form-check-input" for="Med">
                    Medium
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check"
                    id="Hard"
                    name="choice"
                  />
                  <label className="form-check-input" for="Hard">
                    Hard
                  </label>
                </div>
              </div> */}
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
          <br />
        </section>
        <div style={{ textAlign: "center" }}>
          <Divider />
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
        <br />
        <footer>
          <div className="footer-bottom text-center">
            Copyright © 2020 WorkIt By Zotako Corp
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
