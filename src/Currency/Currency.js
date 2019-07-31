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

  onChangeHandler = e => {
    this.setState({ userValue: e.target.value });
  };

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
        <label>ZAR Value </label>
        <input
          type="text"
          value={"R " + this.state.randValue.toFixed(2)}
          onChange={this.onChangeHandler}
        />
        <label>EURO Value </label>
        <input
          type="text"
          value={this.state.euroValue.toFixed(2) + " Euros"}
          onChange={this.onChangeHandler}
        />
        <label>POUND Value </label>
        <input
          type="text"
          value={this.state.poundValue.toFixed(2) + " Pounds"}
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
