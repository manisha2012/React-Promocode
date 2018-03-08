import React from 'react';
import Nav from 'Nav';
var {connect} = require('react-redux');

export var Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

export default connect()(Main);
