import * as firebase from 'firebase';

const config ={
  apiKey: "AIzaSyDAY2Nfe_dY2sLSfaZCeMZl-asiJlT3iUU",
  authDomain: "papos-shoppingcart.firebaseapp.com",
  databaseURL: "https://papos-shoppingcart.firebaseio.com",
  projectId: "papos-shoppingcart",
  storageBucket: "",
  messagingSenderId: "782603828983"
}

export const firebaseApp = firebase.initializeApp(config);
export const productRef = firebase.database().ref('products');
