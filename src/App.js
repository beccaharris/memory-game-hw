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
    message: "Click an image to begin!",
    currentScore: 0,
    highScore: 0,
    animals: animals,
    unclickedAnimals: animals
  };

  randomizeArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleClick = (name) => {
    const findAnimal = this.state.unclickedAnimals.find(item => item.name === name);
    if (findAnimal === undefined) {
      this.setState({
        message: "You guessed incorrectly! Your score has been reset. Click on another animal image to try again!",
        currentScore: 0,
        highScore: this.state.highScore,
        animals: animals,
        unclickedAnimals: animals
      });
    } else {
      const newAnimals = this.state.unclickedAnimals.filter(item => item.name !== name);
      this.incrementScore();
      this.setState({
        message: "You guessed correctly!",
        animals: animals,
        unclickedAnimals: newAnimals
      });
    }
    this.randomizeArray(animals);
  }

  incrementScore = () => {
    const updatedScore = this.state.currentScore + 1;
    this.setState({
      currentScore: updatedScore
    });
    if (updatedScore > this.state.highScore) {
      this.setState({
        highScore: updatedScore
      })
    }
    else if (updatedScore === 12) {
      this.setState({ message: "Great job! You won!" })
    };
    this.randomizeArray(animals);
  };

  render() {
    return (
      <Wrapper>
        <TopNav
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        <Jumbo />
        <Grid>
          {this.state.animals.map(animal => (
            <AnimalPic
              key={animal.id}
              name={animal.name}
              image={animal.image}
              handleClick={this.handleClick}
            />
          ))}
        </Grid>
        <FixedFooter />
      </Wrapper>
    );
  }
}

export default App;
