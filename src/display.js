import React, { Component } from "react";

export class Display extends Component {
  render() {
    const str = this.props.data.join("");
    return <div className="Display"> {str}</div>;
  }
}
