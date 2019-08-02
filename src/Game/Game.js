import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  state = {
    cards: [1, 2, 3],
    display: ""
  };

  // state.cards are sorted in a random order in the below function and the
  // component is rendered based on this random number. This ensure that
  // the card values change on each render of the component. This function
  // is called by ComponentDidMount.

  randomNumber = () => {
    const array = this.state.cards;
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    this.setState({
      display: (
        <div>
          <h1>Welcome To Win</h1>
          <h3>Please Select a Card From Below To See If You Are a Winner</h3>
          <div onClick={this.winner} id={this.state.cards[0]} className="card">
            1
          </div>
          <div onClick={this.winner} id={this.state.cards[1]} className="card">
            2
          </div>
          <div onClick={this.winner} id={this.state.cards[2]} className="card">
            3
          </div>
          <button onClick={this.refresh.bind(this)} className="gameButton">
            Try Again
          </button>
          <button onClick={this.props.reset} className="gameButton">
            Quit
          </button>
        </div>
      )
    });
  };

  componentDidMount() {
    this.randomNumber();
  }

  refresh = () => {
    this.randomNumber();
  };

  // once the user clicks on a card the below function is called,
  // this checks if the card is 1 which is set to be the winning number.
  // if it is the winnerScreen component is loaded, else the loserScree
  //component is loaded.

  winner = e => {
    let winnerScreen = (
      <div>
        <div className="winner">
          <p>YOU ARE A WINNER CONGRATULATIONS</p>
          <p>YOU HOWEVER DO NOT WIN ANYTHING OF VALUE SORRY</p>
        </div>
        <br />
        <button onClick={this.refresh.bind(this)} className="gameButton">
          Try Again
        </button>
        <button onClick={this.props.reset} className="gameButton">
          Quit
        </button>
      </div>
    );

    let loserScreen = (
      <div>
        <div className="loser">YOU DID NOT WIN SORRY</div>
        <br />
        <button onClick={this.refresh.bind(this)} className="gameButton">
          Try Again
        </button>
        <button onClick={this.props.reset} className="gameButton">
          Quit
        </button>
      </div>
    );

    // if check to see if the card is a winner, appropriate screen loaded.

    if (e.target.id === "1") {
      this.setState({ display: winnerScreen });
    } else {
      this.setState({ display: loserScreen });
    }
  };

  render() {
    return <div>{this.state.display}</div>;
  }
}

export default Game;
