import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__row">
        <li className="nav__list">
          <NavLink
            className="nav__link"
            to="/"
            exact
            activeClassName="nav__link--active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__list">
          <NavLink
            className="nav__link"
            to="/add"
            activeClassName="nav__link--active"
          >
            New Question
          </NavLink>
        </li>
        <li className="nav__list">
          <NavLink
            className="nav__link"
            to="/leaderboard"
            activeClassName="nav__link--active"
          >
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
