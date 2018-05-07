import React from 'react';

export default function Layout({children}) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <a className="navbar-brand" href="#">CoH-Pottpokal</a>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ranking</a>
          </li>
        </ul>

      </nav>
    
      <div className="container">
        {children}
      </div>
    </div>
  );
}
Layout.propTypes = {
    children: React.PropTypes.element.isRequired
};