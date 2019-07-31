import React, { Component } from "react";
import "./App.css";
import Currency from "./Currency/Currency";
import Game from "./Game/Game";

class App extends Component {
  state = {
    display: "",
    option: ""
  };

  onChangeHandler = e => {
    this.setState({ display: e.target.value }, this.changeRoute);
  };

  reset = () => {
    this.setState({ display: "", option: "" });
  };

  changeRoute = () => {
    if (this.state.display === "currency") {
      this.setState({ option: <Currency /> });
    } else if (this.state.display === "game") {
      this.setState({ option: <Game reset={this.reset} /> });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Our Website</h1>
        <p>
          If The Exchange Rates Are Making You Depressed Why Not Play a Game
          Instead
        </p>
        <p>Please Use The Below DropBox to Select Your Function </p>
        <select value={this.state.display} onChange={this.onChangeHandler}>
          <option>Please select</option>
          <option value="currency">Currency Converter</option>
          <option value="game">Card Game</option>
        </select>
        {this.state.option}
      </div>
    );
  }
}

export default App;
