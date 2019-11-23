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

// Initial Values
var trainName = "";
var destination = "";
var frequency = 0;
var nextArrival = "";

// Set Current Time
function setTime() {
    var current = moment().format('LTS');
    $(".currentTime").html(current);
    setTimeout(setTime, 1000);
};

setTime();


// Capture Button Click
$("#submitBtn").on("click", function (event) {
    event.preventDefault();

    console.log("button working");

    // Grabbed values from text-boxes
    trainName = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    nextArrival = $("#arrival-input").val().trim();

    // Code for "Setting values in the database"
    database.ref().set({
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival,
    });

});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function (snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().nextArrival);

    // reflect snapshot in html, add new row to Train Schedule
    let newrow = $("<tr>");
    newrow.append("<td>" + snapshot.val().trainName + "</td>");
    newrow.append("<td>" + snapshot.val().destination + "</td>")
    newrow.append("<td>" + snapshot.val().frequency + "</td>")
    newrow.append("<td>" + snapshot.val().nextArrival + "</td>")

    $("#train-table").append(newrow);
    
});






