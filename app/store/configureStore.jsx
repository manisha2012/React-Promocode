import * as redux from 'redux';
import thunk from 'redux-thunk';
import {authReducer, addCodeReducer, searchTextReducer, showRedeemedReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: authReducer,
    promos: addCodeReducer,
    searchText: searchTextReducer,
    showRedeemed: showRedeemedReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
