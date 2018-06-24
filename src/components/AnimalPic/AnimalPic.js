import React from 'react';
import { Image } from 'react-bootstrap/lib'
import './AnimalPic.css';


const AnimalPic = props => {
  return (
      <Image
        data-id={props.id}
        src={props.image}
        alt={props.name}
        onClick={() => props.handleClick(props.id)}
        thumbnail
        responsive
      />
  )
}
    
    export default AnimalPic;
