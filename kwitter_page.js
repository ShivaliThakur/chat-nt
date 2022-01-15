var firebaseConfig = {
    apiKey: "AIzaSyBPcIn6ATnCNiWZmAApq7vLhpRTGzFJzvA",
    authDomain: "kwitter-app-697e2.firebaseapp.com",
    databaseURL: "https://kwitter-app-697e2-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-697e2",
    storageBucket: "kwitter-app-697e2.appspot.com",
    messagingSenderId: "745887955150",
    appId: "1:745887955150:web:b1f0687f416b1c9f69f89f"
  };

  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("UserName");
  room_name= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
msg= message_data['message'];
name= message_data['name'];
like= message_data['like'];
name_with_tag= "<h4>" + name + "<img class='user_tick' src= 'tick.png'></h4>";
message_with_tag= "<h4 class= 'message_h4'>" + msg + "</h4>";
like_btn= "<button class= 'btn btn-warning' id=" + firebase_message_id + "value="+like+"onclick='updateLike(this.id)'>";
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'>" + like + "</span> </button> <hr>";
row= name_with_tag+ message_with_tag+ like_btn+ span_with_tag;
document.getElementById("output").innerHTML+= row;


//End code
    } });  }); }
getData();

function updateLike(message_id){
    console.log(message_id);
    button_id= message_id;
    likes= document.getElementById(button_id).value;
    updated_likes= Number(likes)+1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like: updated_likes
    });
}



function logout(){
    window.location= "index.html";
    localStorage.removeItem("room_name");
    localStorage.removeItem("UserName");
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
}

function send(){
    msg= document.getElementById("message").value;
    console.log(msg);
    firebase.database().ref(room_name).push({
          message: msg,
          like: 0,
          name: user_name
    });
    document.getElementById("message").value= "";
}
