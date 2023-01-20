var firebaseConfig = {
      apiKey: "AIzaSyATBdlEvu2x0ukXJI8ocSOX2ZVmiJtKpvI",
      authDomain: "projetoaula95.firebaseapp.com",
      databaseURL: "https://projetoaula95-default-rtdb.firebaseio.com",
      projectId: "projetoaula95",
      storageBucket: "projetoaula95.appspot.com",
      messagingSenderId: "137836216369",
      appId: "1:137836216369:web:dd7f7fd2b54f3ef9729510"
    };
firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
function send() { msg = document.getElementById("msg").value;
firebase.database().ref(roomName).push({ name:userName, message:msg, like:0 });
document.getElementById("msg").value = ""; 
};
function updateLike(messageId)
{console.log("botão de like pressionado - " + messageId);
buttonId = messageId;
likes = document.getElementById(buttonId).value; updatedLikes = Number(likes) + 1; console.log(updatedLikes); firebase.database().ref(roomName).child(messageId).update({ like : updatedLikes }); }
function getData()
{ firebase.database().ref("/"+roomName).on('value', function(snapshot)
{ document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot)
{ childKey  = childSnapshot.key; childData = childSnapshot.val();
if(childKey != "purpose") {
        firebaseMessageId = childKey;
        messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData); 
name = messageData['name']; 
message = messageData['message'];
like = messageData['like'];
nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = nameWithTag + messageWithTag +like_button + spanWithTag;
document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();
function logout()
{ localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location.replace("index.html"); 
};
