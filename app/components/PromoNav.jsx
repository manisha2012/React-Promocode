import React from 'react';
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');
import * as actions from 'actions';

export var PromoNav = React.createClass({
  onLogout(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(actions.startLogout());
  },
  render: function () {
    var {auth} = this.props;
    var renderUser = () => {
      return auth.userName || auth.email;
    };
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
            <li className="username"><span className="glyphicon glyphicon-user"></span> {renderUser()}</li>
            <li><Link to="/" activeClassName="active-link" className="nav-link" onClick={this.onLogout}><span className="glyphicon glyphicon-log-out"></span>Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default connect((state) => {
  return {
    auth: state.auth
  }
})(PromoNav);
