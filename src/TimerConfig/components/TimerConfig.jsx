import React, { Component } from "react";

class TimerConfig extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newBaseTime = this.props.baseTime;

    if (event.target.id === "hours")
      newBaseTime
        .subtract(newBaseTime.get("hour"), "hours")
        .add(parseInt(event.target.value, 10), "hours");

    if (event.target.id === "minutes")
      newBaseTime
        .subtract(newBaseTime.get("minutes"), "minutes")
        .add(parseInt(event.target.value, 10), "minutes");

    if (event.target.id === "seconds")
      newBaseTime
        .subtract(newBaseTime.get("seconds"), "seconds")
        .add(parseInt(event.target.value, 10), "seconds");

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="row">
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="hours">Hours</label>
            </div>
            <div className="col-sm-9">
              <input
                id="hours"
                className="form-control"
                type="number"
                placeholder="Hours"
                defaultValue={this.props.baseTime.get("hours")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div className="col-sm-9">
              <input
                id="minutes"
                className="form-control"
                type="number"
                defaultValue={this.props.baseTime.get("minutes")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="seconds">Seconds</label>
            </div>
            <div className="col-sm-9">
              <input
                id="seconds"
                className="form-control"
                type="number"
                defaultValue={this.props.baseTime.get("seconds")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TimerConfig;
