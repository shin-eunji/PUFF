import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbX3Yhdbqd60fAD_RMC3ZsenRs4DQ62Ec",
    authDomain: "puffcaster.firebaseapp.com",
    databaseURL: "https://puffcaster.firebaseio.com",
    projectId: "puffcaster",
    storageBucket: "puffcaster.appspot.com",
    messagingSenderId: "580624158497",
    appId: "1:580624158497:web:80ea5ad6ff901fc593f860",
};

firebase.initializeApp(firebaseConfig);

export default firebase;