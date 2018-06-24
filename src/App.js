import React, { Component } from 'react';
// Components //
import AnimalPic from './components/AnimalPic/AnimalPic';
import Wrapper from './components/Wrapper/Wrapper';
import TopNav from './components/TopNav/TopNav';
import Jumbo from './components/Jumbo/Jumbo';
import FixedFooter from './components/Footer/Footer';
// Grid //
import Grid from 'react-bootstrap/lib/Grid';
// Data //
import animals from './animals.json';
// Styles //
import './App.css';

class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    clickedAnimals: [],
    message: "",
    animals,
  };

  randomizeArray = array => {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleRandomize = () => {
    let randomizedAnimals = this.randomizeArray(animals);
    this.setState({ animals: randomizedAnimals })
  }

  handleClick = id => {
    if (this.state.clickedAnimals.indexOf(id) === -1) {
      this.incrementScore();
    } else {
      this.resetGame();
    }
  }

  incrementScore = () => {
    const updatedScore = this.state.currentScore + 1;
    this.setState({
      currentScore: updatedScore
    });
    if( updatedScore > this.state.highScore ) {
      this.setState({ 
        highScore: updatedScore 
      })
    }
    else if ( updatedScore === 12 ) {
      this.setState({ message: "Great job! You won!"})
    };
    this.handleRandomize();
  };

  resetGame = () => {
    this.setState({
      currentScore : 0,
      highScore : this.state.highScore,
      clickedAnimals: [],
      message: "Click an image to begin!"
    });
    this.handleRandomize()
  };

  render() {
    return (
      <Wrapper>
        <TopNav
          currentScore={this.state.currentScore}
          highScore={this.state.highScore} 
        />
        <Jumbo />
        <Grid>
          {this.state.animals.map(animal => (
            <AnimalPic
              key={animal.id}
              name={animal.name}
              image={animal.image}
              handleClick={this.handleClick}
              handleIncrement={this.incrementScore}
              resetGame={this.resetGame}
              handleRandomize={this.handleRandomize}
            />
          ))}
        </Grid>
        <FixedFooter />
      </Wrapper>
    );
  }
}

export default App;
