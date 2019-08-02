import React, { Component } from "react";
import "./Currency.css";

class Currency extends Component {
  state = {
    userValue: 0,
    randValue: 0,
    euroValue: 0,
    poundValue: 0,
    randExchange: 14.24,
    euroExchange: 0.897,
    poundExchange: 0.8214
  };

  // user Value capture function

  onChangeHandler = e => {
    this.setState({ userValue: e.target.value });
  };

  // once the user captures the value the conversion is done based on the rates contained
  // in state

  convert = () => {
    this.setState({
      randValue: parseFloat(this.state.userValue) * this.state.randExchange,
      euroValue: parseFloat(this.state.userValue) * this.state.euroExchange,
      poundValue: parseFloat(this.state.userValue) * this.state.poundExchange
    });
  };

  render() {
    return (
      <div className="currency">
        <h1>Please Enter a USD Value Below</h1>
        <label>USD Value </label>
        <input type="text" onChange={this.onChangeHandler} />
        <button className="currButton" onClick={this.convert}>
          Calculate
        </button>

        <h1>Your Converted Values are Below</h1>
        <label>ZAR </label>
        <input
          type="text"
          value={this.state.randValue.toFixed(2)}
          onChange={this.onChangeHandler}
        />
        <label>EUROS</label>
        <input
          type="text"
          value={this.state.euroValue.toFixed(2)}
          onChange={this.onChangeHandler}
        />
        <label>POUNDS </label>
        <input
          type="text"
          value={this.state.poundValue.toFixed(2)}
          onChange={this.onChangeHandler}
        />
        <br />
        <button onClick={this.props.cancel} className="currButton">
          QUIT
        </button>
      </div>
    );
  }
}

export default Currency;
