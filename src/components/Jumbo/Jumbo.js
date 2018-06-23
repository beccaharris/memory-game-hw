import React from 'react';
import { Jumbotron, Grid } from 'react-bootstrap/lib';
import './Jumbo.css';

const Jumbo = props => {
  return (
    <Jumbotron>
      <Grid>
        <h1>Hello World</h1>
      </Grid>
    </Jumbotron>
  )
}

export default Jumbo;