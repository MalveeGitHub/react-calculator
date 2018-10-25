import React, { Component } from "react";
import "./style.css";

class Calculator extends Component {
  state = {
    firstNumber: "",
    lastNumber: "",
    oparator: "",
    oparatorClicked: false,
    result: ""
  };

  onNumberChange = e => {
    if (this.state.oparatorClicked !== true) {
      const inputValue = e.target.textContent;
      this.setState({
        firstNumber: this.state.firstNumber + inputValue
      });
    } else {
      const inputValue = e.target.textContent;
      this.setState({ lastNumber: this.state.lastNumber + inputValue });
    }
  };

  makeResult = () => {
    const { oparator, firstNumber, lastNumber } = this.state;
    if (oparator == "+") {
      this.setState({
        firstNumber: "",
        lastNumber: "",
        oparator: "",
        oparatorClicked: "",
        result: parseFloat(firstNumber) + parseFloat(lastNumber)
      });
    } else if (oparator == "-") {
      this.setState({
        firstNumber: "",
        lastNumber: "",
        oparator: "",
        oparatorClicked: "",
        result: parseFloat(firstNumber) - parseFloat(lastNumber)
      });
    } else if (oparator == "/") {
      this.setState({
        firstNumber: "",
        lastNumber: "",
        oparator: "",
        oparatorClicked: "",
        result: parseFloat(firstNumber) / parseFloat(lastNumber)
      });
    } else if (oparator == "x") {
      this.setState({
        firstNumber: "",
        lastNumber: "",
        oparator: "",
        oparatorClicked: "",
        result: parseFloat(firstNumber) * parseFloat(lastNumber)
      });
    }
  };

  render() {
    return (
      <div class="container-fluid wrapper">
        <div class="container-fluid" id="display">
          {this.state.firstNumber !== "" ? this.state.firstNumber : null}
          {this.state.oparator !== "" ? this.state.oparator : null}
          {this.state.lastNumber !== "" ? this.state.lastNumber : null}
          {this.state.result !== "" ? this.state.result : null}
        </div>
        <div class="container-fluid button-view">
          <div class="container-fluid button-row">
            <button
              type="button"
              class="btn-xl btn-danger numbers btn-wide"
              id="clear"
              onClick={() =>
                this.setState({
                  firstNumber: "",
                  lastNumber: "",
                  oparator: "",
                  oparatorClicked: false,
                  result: ""
                })
              }
            >
              A/C
            </button>
            <button
              type="button"
              class="btn-xl btn-primary numbers"
              id="divide"
              onClick={e => {
                this.setState({
                  oparatorClicked: true,
                  oparator: e.target.textContent
                });
              }}
            >
              /
            </button>
            <button
              type="button"
              class="btn-xl btn-primary numbers"
              id="multiply"
              onClick={e => {
                this.setState({
                  oparatorClicked: true,
                  oparator: e.target.textContent
                });
              }}
            >
              x
            </button>
          </div>
          <div class="container-fluid button-row">
            <button
              type="button"
              class="btn-xl btn-secondary numbers"
              id="seven"
              onClick={this.onNumberChange}
            >
              7
            </button>
            <button
              type="button"
              class="btn-xl btn-secondary numbers"
              id="eight"
              onClick={this.onNumberChange}
            >
              8
            </button>
            <button
              type="button"
              class="btn-xl btn-secondary numbers"
              id="nine"
              onClick={this.onNumberChange}
            >
              9
            </button>
            <button
              type="button"
              class="btn-xl btn-primary numbers"
              id="subtract"
              onClick={e => {
                this.setState({
                  oparatorClicked: true,
                  oparator: e.target.textContent
                });
              }}
            >
              -
            </button>
          </div>
          <div class="container-fluid button-row">
            <button
              type="button"
              class="btn-xl btn-secondary numbers"
              id="four"
              onClick={this.onNumberChange}
            >
              4
            </button>
            <button
              type="button"
              class="btn-xl btn-secondary numbers"
              id="five"
              onClick={this.onNumberChange}
            >
              5
            </button>
            <button
              type="button"
              onClick={this.onNumberChange}
              class="btn-xl btn-secondary numbers"
              id="six"
            >
              6
            </button>
            <button
              type="button"
              class="btn-xl btn-primary numbers"
              id="add"
              onClick={e => {
                this.setState({
                  oparatorClicked: true,
                  oparator: e.target.textContent
                });
              }}
            >
              +
            </button>
          </div>
          <div class="container-fluid button-row" id="last-row">
            <div id="button-column-left" class="button-column">
              <button
                type="button"
                class="btn-third btn-secondary numbers"
                id="one"
                onClick={this.onNumberChange}
              >
                1
              </button>
              <button
                type="button"
                class="btn-third btn-secondary numbers"
                id="two"
                onClick={this.onNumberChange}
              >
                2
              </button>
              <button
                type="button"
                class="btn-third btn-secondary numbers"
                id="three"
                onClick={this.onNumberChange}
              >
                3
              </button>
              <button
                type="button"
                class="btn-xl btn-secondary numbers btn-wide"
                id="zero"
                onClick={this.onNumberChange}
              >
                0
              </button>
              <button
                type="button"
                class="btn-xl btn-secondary numbers"
                id="decimal"
              >
                .
              </button>
            </div>
            <div id="button-column-right" class="button-column">
              <button
                type="button"
                class="btn-warning numbers btn-tall"
                id="equals"
                onClick={this.makeResult}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
