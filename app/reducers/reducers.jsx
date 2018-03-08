var uuid = require('node-uuid');
var moment = require('moment');

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.user.uid,
        userName: action.user.displayName,
        email: action.user.email
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export var addCodeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROMO':
      return [
        ...state,
        action.promo
      ];
    case 'ADD_PROMOS':
      return [
        ...state,
        ...action.promos
      ];
    case 'UPDATE_PROMO':
      return state.map((promo) => {
        if (promo.id === action.id) {
          return {
            id: promo.id,
            billDate: promo.billDate,
            promoCode: promo.promoCode,
            createdAt: promo.createdAt,
            redeemed: action.updates.redeemed,
            storeName: promo.storeName,
            redeemedAt: action.updates.redeemedAt,
            redeemedBy: action.updates.redeemedBy,
            sharedBy: promo.sharedBy
          }
        } else {
          return promo;
        }
      });
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showRedeemedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_REDEEMED':
      return !state;
    default:
      return state;
  }
};
