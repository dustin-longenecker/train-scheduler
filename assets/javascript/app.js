// Initialize Firebase
// Initialize Firebase
// Initialize Firebase
// Initialize Firebase
// Initialize Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzS4E0ZLlojbBvlF5kS4caU4ODXRTn-_w",
    authDomain: "test-project-fda53.firebaseapp.com",
    databaseURL: "https://test-project-fda53.firebaseio.com",
    projectId: "test-project-fda53",
    storageBucket: "test-project-fda53.appspot.com",
    messagingSenderId: "259787429663"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var destination = "";
  var firstTrainTime = "";
  var frequency = "";
  var nextArrival;
  var minutesAway;
  var dateAdded;

  $("#submit").on("click", function(event){
    event.preventDefault();

    name = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrainTime = $("#first-train-time").val().trim();
    frequency = parseInt($("#frequency").val().trim());

    var dateFormat = "HH:mm";
    randomMoment = moment(firstTrainTime, dateFormat);
    console.log(randomMoment);
    while(!randomMoment.isAfter(moment())){
      var nextTime.add(frequency, "m");
    }
    return nextTime.format(HH:mm);
    minutesAway = moment().diff(randomMoment, "minutes")
    nextArrival = minutesAway + moment().format();

    database.ref().push({
        name: name,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival,
        minutesAway: minutesAway,
    })
    // mWorked =  - date;
    // console.log(mWorked);
    // tBilled = mWorked * rate;
    // console.log(tBilled);

  });
database.ref().on("child_added", function(childSnapshot){
    // console.log(snapshot.val());
    // console.log(snapshot.val().dateAdded);
    // mWorked = date - snapshot.val().dateAdded;
    // tBilled = mWorked * rate;
    // console.log(mWorked);
    // console.log(tBilled);


    $("#tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency + "</td><td>" + childSnapshot.val().nextArrival + "</td><td>" + childSnapshot.val().minutesAway + "</td></tr>");

}, function(errorObj){
  console.log("errors handled: " + errorObj.code);
})
