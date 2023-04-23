import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    //it will bind all buttons together
    return <div className="Btns">{this.props.children}</div>;
  }
}
