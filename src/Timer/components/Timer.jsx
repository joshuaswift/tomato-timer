import React, { Component } from "react";
import moment from "moment";
import TimerHeader from "../../TimerHeader/components/TimerHeader.jsx";
import TimerDisplay from "../../TimerDisplay/components/TimerDisplay.jsx";
import TimerButton from "../../TimerButton/components/TimerButton.jsx";
import TimerConfig from "../../TimerConfig/components/TimerConfig.jsx";
import * as timerStates from "../../timerStates.js";

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      //Set initial state
      currentTime: moment.duration(25, "minutes"),
      baseTime: moment.duration(25, "minutes"),
      timerState: timerStates.NOT_SET,
      timer: null
    };

    //Bind functions to this scope
    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
    this.startShortBreak = this.startShortBreak.bind(this);
    this.startLongBreak = this.startLongBreak.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  startShortBreak() {
    this.setState({
      timerState: timerStates.RUNNING,
      currentTime: moment.duration(5, "minutes"),
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  startLongBreak() {
    this.setState({
      timerState: timerStates.RUNNING,
      currentTime: moment.duration(10, "minutes"),
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime)
    });
  }

  reduceTimer() {
    if (
      this.state.currentTime.get("hours") === 0 &&
      this.state.currentTime.get("minutes") === 0 &&
      this.state.currentTime.get("seconds") === 0
    ) {
      this.completeTimer();
      return;
    }
    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, "second");

    this.setState({
      currentTime: newTime
    });
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      const audio = new Audio("");
      audio.play();
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <TimerHeader />
        <TimerDisplay
          currentTime={this.state.currentTime}
          timerState={this.state.timerState}
        />
        <TimerButton
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}
          startShortBreak={this.startShortBreak}
          startLongBreak={this.startLongBreak}
        />
        {this.state.timerState !== timerStates.RUNNING && (
          <TimerConfig
            baseTime={this.state.baseTime}
            setBaseTime={this.setBaseTime}
          />
        )}
      </div>
    );
  }
}
export default Timer;
