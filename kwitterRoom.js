var firebaseConfig = {
  apiKey: "AIzaSyATBdlEvu2x0ukXJI8ocSOX2ZVmiJtKpvI",
  authDomain: "projetoaula95.firebaseapp.com",
  databaseURL: "https://projetoaula95-default-rtdb.firebaseio.com",
  projectId: "projetoaula95",
  storageBucket: "projetoaula95.appspot.com",
  messagingSenderId: "137836216369",
  appId: "1:137836216369:web:dd7f7fd2b54f3ef9729510"
};
firebase.initializeApp(firebaseConfig)

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName)
}
function redirectToRoomName(name){
    localStorage.setItem("roomName", name)
    window.location = "kwitterPage.html"
};

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
