import React, { Component } from "react";
import ques from "../assets/ques";
import ans from "./answer";
import End from "./end";

export default class play extends Component {
  constructor(props) {
    super(props);
    const q = ques;
    this.state = {
      ques: q[0].ques,
      ans: q[0].ans,
      data: q,
      ch1: q[0].op1,
      ch2: q[0].op2,
      ch3: q[0].op3,
      ch4: q[0].op4,
      score: 0,
      ques_no: 0,
      end: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const a = ans(this.state.ans, e.target.name);
    const no = this.state.ques_no;
    this.setState({
      ques_no: no + 1
    });
    console.log("a:-", a);
    const sc = this.state.score;
    if (a === true) {
      this.setState({
        score: sc + 1
      });
    }

    if (this.state.ques_no === 12) {
      console.log("7 called");
      this.setState({
        end: true
      });
    } else {
      console.log("q:-", this.state.ques_no);
      this.setState({
        ques: this.state.data[no + 1].ques,
        ans: this.state.data[no + 1].ans,
        ch1: this.state.data[no + 1].op1,
        ch2: this.state.data[no + 1].op2,
        ch3: this.state.data[no + 1].op3,
        ch4: this.state.data[no + 1].op4
      });
    }
  }

  componentDidMount() {}

  render() {
    if (this.state.end === true) {
      return (
        <div>
          <End score={this.state.score} />
        </div>
      );
    }
    return (
      <div>
        <div className="ques">
          <h1>{this.state.ques}</h1>
        </div>
        <br />
        <div className="row">
          <button
            name={this.state.ch1}
            onClick={this.handleClick}
            className="btn btn-outline-primary col-md-4 col-sm-12"
          >
            {this.state.ch1}
          </button>
          <button
            name={this.state.ch2}
            onClick={this.handleClick}
            className="btn btn-outline-primary col-md-4 col-sm-12"
          >
            {this.state.ch2}
          </button>
          <button
            name={this.state.ch3}
            onClick={this.handleClick}
            className="btn btn-outline-primary col-md-4 col-sm-12"
          >
            {this.state.ch3}
          </button>
          <button
            name={this.state.ch4}
            onClick={this.handleClick}
            className="btn btn-outline-primary col-md-4 col-sm-12"
          >
            {this.state.ch4}
          </button>
        </div>
        <br />
        <label className="score">Score:- {this.state.score}</label>
      </div>
    );
  }
}
