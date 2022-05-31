import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="clientheader">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img src="img/logo.png" alt="logo" />
        </Link>
        {/* <a className="navbar-brand" href="#">
          <img src="img/logo.png" alt="logo" />
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Buy Insurance
              </Link>
              {/* <a className="nav-link" href="/">
                Buy Insurance
              </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Become a Digital Insurance Advisor (PoSP)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/"
              >
                Support
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">
                  <img src="img/call.png" alt="" /> +91 8866939192
                </a>
                <a className="dropdown-item" href="/">
                  <img src="img/call2.png" alt="" /> Request a Call-back
                </a>
                <a className="dropdown-item" href="/">
                  <img src="img/ticket.png" alt="" /> Raise a Ticket
                </a>
                <a className="dropdown-item" href="/">
                  <img src="img/mail.png" alt="" /> hello@andapp.in
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
