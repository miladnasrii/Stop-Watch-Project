import React from "react";

var interval;
class Watch extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }

  start = () => {
    if (this.state.isStart == false) {
      this.setState({
        isStart: true,
      });
      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second == 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }
        if (this.state.minute == 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };
  stop = () => {
      this.setState({
          isStart : false
      })
    clearInterval(interval);
  };
  reset = () => {
    this.stop();
    this.setState({
      second: 0,
      minute: 0,
      hour: 0
    });
  };
  render() {
    let hour = this.state.hour
    let minute = this.state.minute
    let second = this.state.second
    return (
      <div className="container">
        <h1 className="watch">{`${hour>9 ? hour : "0"+hour} : ${minute>9 ? minute : "0"+minute} : ${second>9 ? second : "0"+second}`}</h1>
        <div className="btns">
        <button className="start button" onClick={this.start}>Start</button>
        <button className="stop button" onClick={this.stop}>Stop</button>
        <button className="reset button" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Watch;
