// console.log("testignlink");
// $("#testjquery").html("testingjquesry");

var config = {
    apiKey: "AIzaSyAXxcFBfknEkghvA8tPKRBNUuNucq_cUkA",
    authDomain: "firstfirebastest.firebaseapp.com",
    databaseURL: "https://firstfirebastest.firebaseio.com",

  };
  
  firebase.initializeApp(config);
  var database = firebase.database();
  
// var m = moment().format("HH:mm");
// console.log(m)
// var date1 = m.toString()
// var upcomingtraintime = 0
// for (var i = 0; i < 10; i++){
//   var ts = Math.round((new Date()).getTime() / 1000);
// var traintime2 = traintime + (trainfrequency*[i]);
//   if (traintime2 > ts){

//   }
// }
// console.log(date1);


// var b =  uncomoingtraintime;
// console.log(m.diff(b, 'minutes')); // 1

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

  var tFrequency = 3;
    // Time is 3:30 AM
    var firstTime = "03:30";
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(frendy3, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    var tRemainder = diffTime % frendy4;
    console.log(tRemainder);
    // Minute Until Train
    var tMinutesTillTrain = frendy4 - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    var newRow = $("<tr>").append(
        $("<td>").text(frendy1),
        $("<td>").text(frendy2),
        $("<td>").text(frendy4),
        $("<td>").text(moment(nextTrain).format("hh:mm a")),
        $("<td>").text(tMinutesTillTrain),
      );

      $("#trainTable").append(newRow);
    
});


//var frequency = train returns every "mins"

//var tripstaken = 0;

//trainreturntime = Traintime + frequency;
//var timeLeft = trainreturntime - Time now;

// var ts = Math.round((new Date()).getTime() / 1000);
// // var timeNow = Moment()





