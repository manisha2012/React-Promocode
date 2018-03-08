import React from 'react';
var {connect} = require('react-redux');
import PromoSearch from 'PromoSearch';
import RedeemWall from 'RedeemWall';

export var RedeemContainer = () => {
  return (
    <div className="row margin-5">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="panel panel-warning">
          <div className="panel-heading">Shared Promo codes</div>
          <div className="panel-body">
            <PromoSearch />
          </div>
          <RedeemWall />
        </div>
      </div>
    </div>
  );
};

export default connect()(RedeemContainer);
