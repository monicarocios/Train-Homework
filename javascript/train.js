// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhcTWm_zu0MZkcPk1HrnJiLhnDz9_s05s",
    authDomain: "train-scheduler-b686c.firebaseapp.com",
    databaseURL: "https://train-scheduler-b686c.firebaseio.com",
    projectId: "train-scheduler-b686c",
    storageBucket: "train-scheduler-b686c.appspot.com",
    messagingSenderId: "674486635618",
    appId: "1:674486635618:web:e0864e7d3c933b29aa553b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var clickCounter = 0;

$('#clickButton').on('click', function(){
    clickCounter++;
    database.ref().set({
        clickCount : clickCounter
    });
    
});

database.ref().on('value', function(snapshot){
    $('#clickValue').html(snapshot.val().clickCount);
})



