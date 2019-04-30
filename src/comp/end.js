import React, { Component } from "react";

export default class end extends Component {
  render() {
    return (
      <div className="end">
        <h1>Score:- {this.props.score}</h1>
        {/* <button className="btn btn-outline-primary">Play again</button> */}
      </div>
    );
  }
}
