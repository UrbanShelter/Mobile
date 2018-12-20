import * as firebase from "firebase";
import Expo from "expo";
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyDtZLZMjy5KmC3qaOVpKhDUmlBRg5OmcO8",
    authDomain: "urban-shelter-dev.firebaseapp.com",
    databaseURL: "https://urban-shelter-dev.firebaseio.com",
    projectId: "urban-shelter-dev",
    storageBucket: "urban-shelter-dev.appspot.com",
    messagingSenderId: "848777771838"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const firebaseInstances = firebase;

export const db = firebase.firestore();

export const storage = firebase.storage().ref();



db.settings({
    timestampsInSnapshots: true
});


export async function logIn() {
	const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('346512576084122', {
		permissions: ['public_profile'],
      });
	if (type === 'success') {
	  // Get the user's name using Facebook's Graph API
	  const response = await fetch(
		`https://graph.facebook.com/me?access_token=${token}`);
		
	  return await response.json();
	}
}


/*
Login using firebase Auth
@params Email, Password
@return true
*/
export async function signIn(email , password) {
    return await firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
        // var user = firebase.auth().currentUser;
        data.ack = 1;
        return  data;
    }).catch(function(error) {
        error.ack = 0;
        return error;
    });
}


export async function logOut(){
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        Expo.SecureStore.deleteItemAsync('uId');
        
    }, function(error) {
        console.error('Sign Out Error', error);
    });
}



/*
Get User uid from firebase
@return uid
*/
export async function getUser() {
    var user = await firebase.auth().currentUser;
    return (user.uid);
}


/*
Register User using from firebase
@params Email, Password
@return boolean 
*/
export async function signUp(email, password) {
    return await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
        return data;
    }).catch(function(error) {
        return error;
       
    });
}


