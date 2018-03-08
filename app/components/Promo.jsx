import React from 'react';
var {connect} = require('react-redux');
import PromoNav from 'PromoNav';
import PromoForm from 'PromoForm';
import RedeemContainer from 'RedeemContainer';

export var Promo = () => {
  return (
    <div>
      <PromoNav />
      <PromoForm />
      <RedeemContainer />
    </div>
  );
};

export default connect()(Promo);
