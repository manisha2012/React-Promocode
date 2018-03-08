import React from 'react';
var {connect} = require('react-redux');
import * as actions from 'actions';

export var PromoSearch = React.createClass({
  render: function() {
    var {dispatch, searchText, showRedeemed} = this.props;
    return (
      <form>
        <div className="form-row">
          <div className="col-md-4 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" ref="showRedeemed" checked={showRedeemed} onChange={() => {
                dispatch(actions.toggleShowRedeemed());
              }}/>
            <label className="form-check-label" for="exampleCheck1">Show Redeemed Codes Also</label>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <input type="search" className="form-control" ref="searchText" placeholder="Search By Store" value={searchText} onChange={() => {
                var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText));
              }}/>
          </div>
        </div>
      </form>
    );
  }
});

export default connect()(PromoSearch);
