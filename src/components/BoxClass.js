import React, { Component } from "react";

export default class BoxClass extends Component {
  componentWillUnmount() {
    console.log("Box byebye");
  }
  render() {
    return <div>Box{this.props.num}</div>;
  }
}
