import React from 'react';
import { Image } from 'react-bootstrap/lib'
import './AnimalPic.css';


const AnimalPic = props => {
  return (
    <a onClick={() => props.handleClick(props.name)}>
      <Image
        src={props.image}
        alt={props.name}
        thumbnail
        responsive
      />
    </a>
  )
}

export default AnimalPic;
