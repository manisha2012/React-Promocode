import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export var Redeem = React.createClass({
  handleRedeem: function () {
    var {dispatch, id} = this.props;
    if(confirm("Do you want to redeem this code?")){
      dispatch(actions.setRedeemed(id, true));
    }
  },
  render: function () {
    var {createdAt, redeemed, promoCode, storeName, redeemedAt, sharedBy, redeemedBy, billDate} = this.props;
    var renderDate = () => {
      var message = 'Shared on ';
      var timestamp = createdAt;
      var billStamp = moment(billDate).add(30, 'days');
      console.log(billStamp);
      if(redeemed) {
        message = 'Redeemed by '+ redeemedBy +' on ';
        timestamp = redeemedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    var renderRedeemBtn = () => {
      if(!redeemed) {
        return (
          <div className="col-md-2">
            <button className="btn btn-primary btn-rounded" onClick={this.handleRedeem}>
              Redeem
            </button>
          </div>
        );
      } else {
        return (
          <div className="col-md-2 text-success">
            <b>Redeemed</b>
          </div>
        );
      }
    };
    var renderImage = () => {
      var imgUrl = '/images/' + storeName + '.jpg';
      return (
        <img className="media-object redeem-wall-img img-circle" src={imgUrl} alt="Kishore Kumar"/>
      );
    };
    return (
        <li className="redeem-wall-item">
          <hr></hr>
          <div className="media">
            <div className="media-left media-middle">
              {renderImage()}
            </div>
            <div className="media-body redeem-wall-item-details">
              <div className="row">
                <div className="col-md-10">
                  <h4 className="media-heading">{promoCode}</h4>
                  <p>{sharedBy}</p>
                  <p className="todo__subtext">{renderDate()}</p>
                </div>
                {renderRedeemBtn()}
              </div>
            </div>
          </div>
        </li>
    );
  }
});

export default connect()(Redeem);
