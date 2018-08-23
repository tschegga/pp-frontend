import React from 'react';

export default function Layout({children}) {
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg fixed-top bg-light mb-4">
          <a className="navbar-brand" href="#">CoH-Pottpokal</a>

          <ul className="navbar-nav navbar-expand">
            <li className="nav-item active">
              <a className="nav-link" href="#/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/sessions">Sitzungen</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/ranking">Ranking</a>
            </li>
          </ul>
        </nav>
      
        <div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
Layout.propTypes = {
    children: React.PropTypes.element.isRequired
};