import React, { Component } from "react";
import BoxClass from "./BoxClass";

export default class AppClass extends Component {
  //constructor == lifecycle function 중 하나 class생성에 쓰임
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log("constructure");
  }

  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    console.log(this.state);
  };

  componentDidMount() {
    console.log("componentDidMount");
    //주로하는 일은 API호출을 한다
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>{this.state.counter2}</div>
        <button onClick={this.increase}>Click</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
