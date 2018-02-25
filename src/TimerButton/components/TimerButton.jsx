
import React, { Component } from "react";
import * as timerStates from "../../timerStates";

class TimerButton extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        //TO-DO change buttons to block level components
        <div className="text-center">
          <div className=" row">
            <div className="col-md-4 col-lg-4 col-sm-4">
              <button
                className="btn btn-success btn-block center-block"
                onClick={this.props.startShortBreak}
              >

                Short Break
            </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4">
              <button className="btn btn-success btn-block center-block" onClick={this.props.startTimer}>
                Start
            </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4">

              <button
                className="btn btn-success btn-block center-block"
                onClick={this.props.startLongBreak}
              >
                Long Break
            </button>
            </div>
          </div>
        </div>
      );




    if (this.props.timerState === timerStates.RUNNING)
      return (
        <button
          className="btn btn-lg btn-stop center-block"
          onClick={this.props.stopTimer}
        >
          Stop
        </button>
      );

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <button
          className="btn btn-lg btn-reset center-block"
          onClick={this.props.stopTimer}
        >
          Reset
        </button>
      );
  }

  render() {
    return <div className="row">{this.getButton()}</div>;
  }
}
export default TimerButton;
