import firebase from 'firebase';

try {
  // Copied from firebase.google.com - Add Firebase To your web app
  var config = {
    apiKey: "AIzaSyD1JPmQMGmmNNoTGECL5E5EbHPex70YKJ4",
    authDomain: "promo-web-1d31b.firebaseapp.com",
    databaseURL: "https://promo-web-1d31b.firebaseio.com",
    projectId: "promo-web-1d31b",
    storageBucket: "promo-web-1d31b.appspot.com",
    messagingSenderId: "1066129301304"
  };

  firebase.initializeApp(config);
} catch (e) {

}
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
