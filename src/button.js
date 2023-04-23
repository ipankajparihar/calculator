import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="Btn"
        data-value={this.props.value}
      >
        {this.props.label}
      </div>
    );
  }
}
