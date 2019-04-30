import React, { Component } from "react";
import Play from "./play";

export default class start extends Component {
  constructor() {
    super();
    this.state = {
      val: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      val: true
    });
  }

  render() {
    if (this.state.val === true) {
      return (
        <div>
          <Play />
        </div>
      );
    }
    return (
      <div className="start">
        <button onClick={this.handleClick} className="btn btn-outline-primary">
          {" "}
          START
        </button>
      </div>
    );
  }
}
