import React from 'react';
import Nav from './Nav';
import LoggedInUser from './LoggedInUser';

export default function Header() {
  return (
    <div>
      <Nav />
      <LoggedInUser />
    </div>
  );
}
