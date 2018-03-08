import React from 'react';
var {connect} = require('react-redux');
import Redeem from 'Redeem';
var $ = require('jquery');

export var RedeemWall = React.createClass({
  filterPromos: function () {
    var {promos, searchText, showRedeemed} = this.props;
    console.log(promos);
    var filteredPromos = promos;
    console.log(filteredPromos);
    // Filter by showCompleted
    filteredPromos = filteredPromos.filter((promo) => {
      return !promo.redeemed || showRedeemed;  // If we return true, that item is going to be in array & if we return false that item is going to be removed from array
    });
    console.log(filteredPromos);
    // Filter by store
    filteredPromos = filteredPromos.filter((promo) => {
      var storeText = $(".promo-form").find("option[value='" + promo.storeName + "']").text();
      var text = storeText.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    console.log(filteredPromos);
    // // Sort todos with non-completed first
    // filteredPromos.sort((a, b) => {
    //   if (!a.redeemed && b.redeemed) {
    //     return -1; // a should come before b
    //   } else if (a.redeemed && !b.redeemed) {
    //     return 1; // a should come after b
    //   } else {
    //     return 0; // a is equal to b & there's no reason to re-sort them.
    //   }
    // });

    return filteredPromos;
  },
  render: function () {
    var {promos} = this.props;
    var renderPromos = () => {
      var filteredPromos = this.filterPromos();
      console.log(filteredPromos);
      if(filteredPromos.length === 0) {
        return (
          <li className="container__message">No code available.</li>
        );
      }
      return filteredPromos.map((promo) => {
        return (
            <Redeem key={promo.id} {...promo}/>
        );
      });
    };
    return (
      <div>
        <ul className="list-group">
          {renderPromos()}
        </ul>
      </div>
    );
  }
});

export default connect((state) => {
  return {
    promos: state.promos,
    searchText: state.searchText,
    showRedeemed: state.showRedeemed
  }
})(RedeemWall);
