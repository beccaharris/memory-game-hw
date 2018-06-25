import React from 'react';
import { Jumbotron, Grid } from 'react-bootstrap/lib';
import './Jumbo.css';

const Jumbo = props => {
  return (
    <Jumbotron fixed>
        <h1>Baby Animal Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click the same image more than once!</h2>
    </Jumbotron>
  )
}

export default Jumbo;