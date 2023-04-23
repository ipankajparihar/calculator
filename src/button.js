import React, { Component } from "react";

export class Button extends Component {
  render() {
    //evergy btn will have a associated value with it and a label value with click functionality
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
