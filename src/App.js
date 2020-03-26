import React, { Component } from 'react';
import Board from './components/Board';
import RestartBtn from './components/RestartBtn';
import './App.css';

export class App extends Component {
  state = {
    gameOver: false,
    pieces: []
  };

  // Create the pieces of the piece and add them to the array inside te state of the app
  componentDidMount() {
    // Temporary array to store the pieces of the piece
    let piecesArray = [];

    // Create each piece and add it to the temp array
    for(let index = 0; index < BOARD_LENGTH; index++) {
      piecesArray[index] = {
        content: '',
        key: index
      };
    }

    // Add the pieces to the state of the app
    this.setState({ pieces: [...piecesArray] });
  }

  addContent = (index) => {
    this.setState({ pieces: this.state.pieces.map(piece => {
      if(piece.key === index && piece.content === '') {
        piece.content = 'X';
      }

      return piece;
    }) });

    // Check if game is over
    if(this.isGameOver()) {
      this.setState({gameOver: true});
      return;
    }

    // After the user clicked, it's the computer's turn
    this.computerMove();
  }

  computerMove = () => {
    const place = randomRange(0,8);
    const piece = this.state.pieces;

    console.log(piece[place])

    if(piece[place].content === '') {
      piece[place].content = 'O';
    } else {
      this.computerMove();
    }

    // Check if game is over
    if(this.isGameOver()) {
      this.setState({gameOver: true});
      return;
    }
  }

  isGameOver = () => {
    const piece = this.state.pieces;

    // Check if someone completed a row
    for(let i = 0; i < 9; i += 3) {
      if(piece[i].content === piece[i+1].content && piece[i].content === piece[i+2].content && piece[i].content !== '') {
        console.log('Row');
        return true;
      }
    }

    // Check if someone completed a column
    for(let i = 0; i < 3; i++) {
      if(piece[i].content === piece[i+3].content && piece[i].content === piece[i+6].content && piece[i].content !== '') {
        console.log('Column');
        return true;
      }
    }

    // Check if someone completed a diagonal
    if( (piece[0].content === piece[4].content && piece[0].content === piece[8].content && piece[0].content !== '') || (piece[2].content === piece[4].content && piece[2].content === piece[6].content && piece[2].content !== '') ) {
      console.log('Diagonal');
      return true;
    }

    // If there's one empty place, the game is not over yet
    for(let i = 0; i < BOARD_LENGTH; i++) {
      if(piece[i].content === '') {
        return false;
      }
    }

    // All places are taken and no one won(all the tests above failed) - tie
    console.log('GAME OVER');
    return true;
  }

  restartGame = () => {
    // Set gameOver back to false
    this.setState({ gameOver: false });
    // Reset the pieces array inside the state back to its initial state
    this.componentDidMount();
  }

  render() {
    return (
      <div className='App'>

        <p className='msg'></p>
        <div className='board'>
          <Board pieces={this.state.pieces} addContent={this.addContent}/>
        </div>  
        <RestartBtn gameOver={this.state.gameOver} restartGame={this.restartGame}/>

      </div>
    )
  }
}

const BOARD_LENGTH = 9;

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default App;
