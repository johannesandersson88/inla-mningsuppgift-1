import './App.css';
import React from 'react';
import Game from './Game';

// Random siffror till dom olika tärningarna

const playerDiceOne = Math.floor(Math.random() * 6) + 1;
const playerDiceTwo = Math.floor(Math.random() * 6) + 1;
const playerDiceThree = Math.floor(Math.random() * 6) + 1;

const cpuDiceOne = Math.floor(Math.random() * 6) + 1;
const cpuDiceTwo = Math.floor(Math.random() * 6) + 1;
const cpuDiceThree = Math.floor(Math.random() * 6) + 1;


// Component med constructor, states och metoder. 
class App extends React.Component {
  constructor() {
    super();

    // Tre states, för vinnare, användaren och dator.
    this.state = {
      user: '',
      computer: '',
      winner: ''
    }
  }


  // Lägger ihop tärningar till ett värde, och uppdaterar state för spelare och dator
  updateCpu() {
    const cpuSummary = cpuDiceOne + cpuDiceTwo + cpuDiceThree;

    setTimeout(() => {
      this.setState({ computer: cpuSummary })
    }, 3500);

  }

  updateUser() {
    const summary = playerDiceOne + playerDiceTwo + playerDiceThree;

    setTimeout(() => {
      this.setState({ user: summary })
    }, 3500);

  }


  //Räknar ut vinnaren, eller om det blir lika. 
  chooserWinner() {
    setTimeout(() => {
      if (this.state.user < this.state.computer) {
        this.setState({ winner: 'CPU Win!' })

      } else if (this.state.user > this.state.computer) {
        this.setState({ winner: 'Player Win!' })

      } else if (this.state.user === this.state.computer) {
        this.setState({ winner: 'Its a tie!' })
      }
    }, 4000);
  }


  // Event som sätts på en knapp för att starta spelet.
  handleClick = (event) => {

    // Timeouter för att tärningarna ska visas i turordning. 
    setTimeout(() => {
      let mainDice1 = document.querySelector('#die1');
      mainDice1.classList.add(`dice`, `dice-${playerDiceOne}`)
    }, 500);

    setTimeout(() => {
      let mainDice4 = document.querySelector('#die4');
      mainDice4.classList.add(`dice`, `dice-${cpuDiceOne}`)
    }, 1000);

    setTimeout(() => {
      let mainDice2 = document.querySelector('#die2');
      mainDice2.classList.add(`dice`, `dice-${playerDiceTwo}`)
    }, 1500);

    setTimeout(() => {
      let mainDice5 = document.querySelector('#die5');
      mainDice5.classList.add(`dice`, `dice-${cpuDiceTwo}`)
    }, 2000);

    setTimeout(() => {
      let mainDice3 = document.querySelector('#die3');
      mainDice3.classList.add(`dice`, `dice-${playerDiceThree}`)
    }, 2500);

    setTimeout(() => {
      let mainDice6 = document.querySelector('#die6');
      mainDice6.classList.add(`dice`, `dice-${cpuDiceThree}`)
    }, 3000);







    // Efter tärningarna visas körs metoderna för att visa vem som vinner. 
    this.updateUser()
    this.updateCpu()
    this.chooserWinner()
  }

  // Nytt spel som finns på en egen knapp. 
  newGame() {
    window.location.reload()
  }

  // Renderar ut vår komponent spel, dit våra states och metoder skickas. 
  render() {
    return (
      <Game
        handleClick={this.handleClick}
        user={this.state.user}
        computer={this.state.computer}
        winner={this.state.winner}
        newGame={this.newGame}
      />
    )
  }
}

export default App;