import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    //constructor == lifecycle function 중 하나 class생성에 쓰임
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value,
    };
  }
  render() {
    return (
      <div>
        <div>{this.state.counter2}</div>
        <button onClick={increase}>Click</button>
      </div>
    );
  }
}
