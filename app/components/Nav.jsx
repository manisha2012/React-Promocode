import React from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';

export var Nav = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" activeClassName="active-link">MyPromo</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/" activeClassName="active-link" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/promo" activeClassName="active-link" className="nav-link">Add Promo</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login" activeClassName="active-link" className="nav-link"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default connect()(Nav);
