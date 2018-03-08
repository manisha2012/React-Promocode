import firebase, {firebaseRef, googleProvider} from 'app/firebase/';
import moment from 'moment';

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(googleProvider).then((result) => {
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  }
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Signed Out');
    });
  };
};

export var login = (user) => {
  return {
    type: 'LOGIN',
    user
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export var startAddCode = (promoCode, billDate, storeName) => {
  return (dispatch, getState) => {
    var userName = getState().auth.userName;
    var email = getState().auth.email;
    var promo = {
      promoCode,
      billDate,
      storeName,
      createdAt: moment().unix(),
      sharedBy: userName ? userName : email,
      redeemed: false,
      redeemedAt: null,
      redeemedBy: null
    };
    var promoRef = firebaseRef.child('promo').push(promo);
    console.log(promoRef.key);
    return promoRef.then(() => {
      dispatch(addCode({
        promoCode,
        billDate,
        storeName,
        createdAt: moment().unix(),
        sharedBy: userName ? userName : email,
        redeemed: false,
        id: promoRef.key,
        redeemedAt: null,
        redeemedBy: null
      }));
    });
  };
};

export var addCode = (promo) => {
  return {
    type: 'ADD_PROMO',
    promo
  };
};

export var startAddPromos = () => {
  return (dispatch, getState) => {
    var promosRef = firebaseRef.child('promo');

    return promosRef.once('value').then((snapshot) => {
      var promos = snapshot.val() || {};
      var parsedPromos = [];

      Object.keys(promos).forEach((promoId) => {
        parsedPromos.push({
          id: promoId,
          billDate: promos[promoId].billDate,
          promoCode: promos[promoId].promoCode,
          createdAt: promos[promoId].createdAt,
          redeemed: promos[promoId].redeemed,
          storeName: promos[promoId].storeName,
          redeemedAt: promos[promoId].redeemedAt,
          sharedBy: promos[promoId].sharedBy,
          redeemedBy: promos[promoId].redeemedBy
        });
      });

      dispatch(addPromos(parsedPromos));
    });
  };
};

export var addPromos = (promos) => {
  return {
    type: 'ADD_PROMOS',
    promos
  };
};

export var setRedeemed = (id, redeemed) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var userName = getState().auth.userName;
    var email = getState().auth.email;
    var promoRef = firebaseRef.child(`promo/${id}`); // same as child('todos/' + id)
    var updates = {
      redeemed,
      redeemedAt: redeemed ? moment().unix() : null,
      redeemedBy: redeemed ? (userName ? userName : email) : null
    };
    console.log(updates);
    return promoRef.update(updates).then(() => {
      dispatch(updatePromo(id, updates));
    });
  };
};

export var updatePromo = (id, updates) => {
  return {
    type: 'UPDATE_PROMO',
    id,
    updates
  };
};

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowRedeemed = () => {
  return {
    type: 'TOGGLE_SHOW_REDEEMED'
  };
};
