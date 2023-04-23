import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    return <div className="Btns">{this.props.children}</div>;
  }
}
