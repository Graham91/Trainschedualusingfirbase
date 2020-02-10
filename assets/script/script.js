// console.log("testignlink");
// $("#testjquery").html("testingjquesry");

var config = {
    apiKey: "AIzaSyAXxcFBfknEkghvA8tPKRBNUuNucq_cUkA",
    authDomain: "firstfirebastest.firebaseapp.com",
    databaseURL: "https://firstfirebastest.firebaseio.com",

  };
  
  firebase.initializeApp(config);
  var database = firebase.database();
  

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


  database.ref().push(newtrainfortable);
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#train-time-input").val("");
  $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());
  var frendy1 = childSnapshot.val().name;
  var frendy2 = childSnapshot.val().dest;
  var frendy3 = childSnapshot.val().time;
  var frendy4 = childSnapshot.val().freq;

    var newRow = $("<tr>").append(
        $("<td>").text(frendy1),
        $("<td>").text(frendy2),
        $("<td>").text(frendy3),
        $("<td>").text(frendy4),
        $("<td>").text(frendy4),
      );

      $("#trainTable").append(newRow);
    
});