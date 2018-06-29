import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li className="left"><h3 className="header">Project Management System</h3></li>
          <li><a><Link to="/remove">Remove</Link></a></li>
          <li><a><Link to="/add">Add</Link></a></li>
          <li><a><Link to="/" activeClassName="active">View</Link></a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
