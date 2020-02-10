// console.log("testignlink");
// $("#testjquery").html("testingjquesry");

var config = {
    apiKey: "AIzaSyAXxcFBfknEkghvA8tPKRBNUuNucq_cUkA",
    authDomain: "firstfirebastest.firebaseapp.com",
    databaseURL: "https://firstfirebastest.firebaseio.com",

  };
  
  firebase.initializeApp(config);
  var database = firebase.database();
  console.log(database);

// var newRow = $("<tr>").append(
//     $("<td>").text(empName),
//     $("<td>").text(empRole),
//     $("<td>").text(empStartPretty),
//     $("<td>").text(empMonths),
//     $("<td>").text(empRate),
//   );
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var traintime = $("#train-time-input").val().trim();
var trainfrequency = $("#frequency-input").val().trim();

var newtrainfortable = {
    name: trainName,
    dest: destination,
    time: traintime,
    freq: trainfrequency
  };

  console.log(newtrainfortable);
  database.ref().push(newtrainfortable);

});