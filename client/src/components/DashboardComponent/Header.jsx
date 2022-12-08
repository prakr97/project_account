import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>

        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">

          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </div>
  )
}
