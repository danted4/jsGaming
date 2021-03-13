import React from 'react';
import { NavLink } from 'react-router-dom';
const Links = () => {
    return (
      <nav className="header">
        <div>
        <NavLink  exact activeClassName="active" to="/">Home</NavLink>
        <span>&nbsp;&nbsp;</span>
        <NavLink  activeClassName="active" to="/brick">Brick Game</NavLink>
        <span>&nbsp;&nbsp;</span>
        <NavLink  activeClassName="active" to="/snake">Snake Game</NavLink>
        <span>&nbsp;&nbsp;</span>
        <NavLink  activeClassName="active" to="/t90">T90 Game</NavLink>
        <span>&nbsp;&nbsp;</span>
        {/* {isAuthenticated && <span><NavLink  class="blinkingclass" activeClassName="active" to="/admin">Admin</NavLink></span>} */}
        </div>
      </nav>
    );
  }

  export default Links;
