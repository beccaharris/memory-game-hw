import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import './TopNav.css';

const TopNav = props => {

  return (
    <Navbar fluid fixedTop>
      <div className="row">
        <div className="col-md-4">
          <Navbar.Text>
            Baby Animal Clicky Game!
          </Navbar.Text>
        </div>
        <div className="col-md-4">
          <Navbar.Text>
            {props.message}
          </Navbar.Text>
        </div>
        <div className="col-md-4">
          <Navbar.Text>
            Current Score: {props.currentScore} | High Score: {props.highScore}
          </Navbar.Text>
        </div>
      </div>
    </Navbar>
  );
}

export default TopNav;
