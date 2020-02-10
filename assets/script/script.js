// console.log("testignlink");
// $("#testjquery").html("testingjquesry");

var config = {
    apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
    authDomain: "time-sheet-55009.firebaseapp.com",
    databaseURL: "https://time-sheet-55009.firebaseio.com",
    storageBucket: "time-sheet-55009.appspot.com"
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