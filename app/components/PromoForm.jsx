import React from 'react';
var {connect} = require('react-redux');
import * as actions from 'actions';
import moment from 'moment';

export var PromoForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var promoCode = this.refs.promoCode.value;
    var billDate = this.refs.billDate.value;
    var storeName = this.refs.storeName.value;
    if(promoCode.length > 0) {
      this.refs.promoCode.value = '';
      this.refs.storeName.value = '';
      this.refs.billDate.value = '';
      dispatch(actions.startAddCode(promoCode, billDate, storeName));
    } else {
      this.refs.promoCode.focus();
    }
  },
  render: function () {
    return (
      <div className="row margin-5 promo-form">
        <div className="col-sm-12 col-md-4 col-lg-4"></div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h3>Hey! What's your promo code?</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" ref="promoCode" placeholder="Enter your code"/>
            </div>
            <div className="form-group">
              <input type="date" className="form-control" ref="billDate" name="Bill Date"/>
            </div>
            <div className="form-group">
              <select className="form-control" id="store" ref="storeName">
                <option selected>Select the store name</option>
                <option value="KFC">KFC</option>
                <option value="MCD">Mc. Donalds</option>
                <option value="BGK">Burger King</option>
                <option value="PZH">Pizza Hut</option>
              </select>
            </div>
            <button type="submit" className="btn btn-info btn-block">Share</button>
          </form>
      </div>
    </div>
    );
  }
});

export default connect()(PromoForm);
