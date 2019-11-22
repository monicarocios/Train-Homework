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

var trainName = "";
var destination = "";
var firstTime = "";
var frequency = 0;


// add new row with train info every time click submit
$(".btn btn-primary").on('click', function (event) {
    event.preventDefault();


    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTime = $("#first-train-time").val().trim();
    frequency = $("#frequency").val().trim();

    console.log(trainName);

    var addRow = $("<tr>");
    addRow.append($("<td>" + trainName + "</td>"));
    addRow.append($("<td>" + destination + "</td>"));
    addRow.append($("<td>" + firstTime + "</td>"));
    addRow.append($("<td>" + frequency + "</td>"));

});





