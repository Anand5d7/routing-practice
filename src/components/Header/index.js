// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-pic"
      />
      <h1 className="wave-name">Wave</h1>
    </div>
    <ul className="list-container">
      <li className="link-item">
        <Link to="/" className="route-link">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link to="/about" className="route-link">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link to="/contact" className="route-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
