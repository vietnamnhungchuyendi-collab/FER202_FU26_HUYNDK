import React from 'react';

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-warning" href="/">
          🍕 Pizza Store
        </a>

        <div className="navbar-nav ms-auto">
          <a className="nav-link active fw-semibold px-3" href="/">
            Home
          </a>

          <a className="nav-link fw-semibold px-3" href="/about">
            About
          </a>

          <a className="nav-link fw-semibold px-3" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;