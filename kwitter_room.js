var firebaseConfig = {
      apiKey: "AIzaSyC2cqktr9DQhHQCBqyHauul_nkZFCXVnvY",
      authDomain: "kwitter-92850.firebaseapp.com",
      databaseURL: "https://kwitter-92850-default-rtdb.firebaseio.com",
      projectId: "kwitter-92850",
      storageBucket: "kwitter-92850.appspot.com",
      messagingSenderId: "934958760750",
      appId: "1:934958760750:web:00d79b86f51101172230bf",
      measurementId: "G-HKW0QK4RSD"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
};
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name: "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row
      });});}
getData();
