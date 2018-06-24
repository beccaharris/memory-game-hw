import React from 'react';
import { NavItem, Nav } from 'react-bootstrap/lib';
import './TopNav.css';

const TopNav = props => {

  return (
    <Nav bsStyle="pills">
      <div class="row">
        <div class="col-md-4">
          <NavItem>
            Baby Animal Clicky Game!
          </NavItem>
        </div>
        <div class="col-md-4">
          <NavItem>
            NavItem 2 content
          </NavItem>
        </div>
        <div class="col-md-4">
          <NavItem>
            NavItem 3 content
          </NavItem>
        </div>
      </div>
    </Nav>
  );
}

export default TopNav;
