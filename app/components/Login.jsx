import React from 'react';
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import * as actions from 'actions';

export var Login = React.createClass({
  onLogin: function () {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4">
             <div className="callout callout-auth">
               <h3>Login</h3>
               <p>
                 Login with Google account below
               </p>
               <button type="button" className="btn btn-info" onClick={this.onLogin}>Login with Google</button>
             </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect()(Login);
