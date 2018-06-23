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
    animals
  };

  render() {
    return (
      <Wrapper>
        <TopNav />
        <Jumbo />
        <Grid>
          {this.state.animals.map(animal => (
            <AnimalPic
              image={animal.image}
              name={animal.name}
              key={animal.id}
            />
          ))}
        </Grid>
        <FixedFooter />
      </Wrapper>
    );
  }
}

export default App;
