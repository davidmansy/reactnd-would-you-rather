import React from 'react';
import Nav from './Nav';
import AuthedUser from './AuthedUser';

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <AuthedUser />
    </div>
  );
}
