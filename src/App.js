import "./App.css";
import { Buttons } from "./buttons.js";
import { Button } from "./button.js";
import { Display } from "./display.js";
import { Component } from "react";
import update from "react-addons-update";
import { create, all } from "mathjs";

//puting all math function from mathjs into math variable
const config = {};
const math = create(all, config);

class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] };
  }

  //handle click for every btn and rerender it
  handleClick = (e) => {
    const data = e.target.getAttribute("data-value");
    switch (data) {
      case "clear":
        this.setState({
          operations: [],
        });
        break;
      case "=":
        this.calculate();
        break;

      default:
        const cal = update(this.state.operations, {
          $push: [data],
        });
        this.setState({
          operations: cal,
        });
        break;
    }
  };

  //calculate string form of operation array through math variable

  calculate = () => {
    var answer = this.state.operations.join("");
    if (answer) {
      answer = math.evaluate(answer);
      answer = math.format(answer, { precision: 6 });
      answer = String(answer);
      this.setState({
        operations: [answer],
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />

        <Buttons>
          <Button id="c" onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button id="c" onClick={this.handleClick} label="^" value="^" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button id="c" onClick={this.handleClick} label="%" value="%" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="" value="" />

          <Button id="a" onClick={this.handleClick} label="/" value="/" />
          <Button id="a" onClick={this.handleClick} label="*" value="*" />
          <Button id="a" onClick={this.handleClick} label="-" value="-" />

          <Button id="a" onClick={this.handleClick} label="+" value="+" />
          <Button id="a" onClick={this.handleClick} label="=" value="=" />
        </Buttons>
      </div>
    );
  }
}

export default App;
