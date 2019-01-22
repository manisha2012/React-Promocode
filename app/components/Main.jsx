import React from 'react';
import Nav from 'Nav';
import {connect} from 'react-redux';

export var Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

export default connect()(Main);
