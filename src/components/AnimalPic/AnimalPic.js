import React from 'react';
import { Row, Col, Image } from 'react-bootstrap/lib'
import './AnimalPic.css';


const AnimalPic = props => {
  return (
    <Image src={props.image} alt={props.name} thumbnail responsive/>
  )
}

export default AnimalPic;
