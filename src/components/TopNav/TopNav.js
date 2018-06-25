import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import './TopNav.css';

const TopNav = props => {

  return (
    <Navbar fluid fixedTop>
      <div className="row">
        <div className="col-md-8">
          <h2 className="text-for-navbar">
            {props.message}
          </h2>
        </div>
        <div className="col-md-4">
          <h2 className="text-for-navbar">
            Current Score: {props.currentScore} | High Score: {props.highScore}
          </h2>
        </div>
      </div>
    </Navbar>
  );
}

export default TopNav;
