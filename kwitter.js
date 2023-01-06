var firebaseConfig = {
  apiKey: "AIzaSyAcS8ZUN2xMVaisYNwYPvSz1KiEwv4fWBA",
  authDomain: "websocialaula93.firebaseapp.com",
  databaseURL: "https://websocialaula93-default-rtdb.firebaseio.com",
  projectId: "websocialaula93",
  storageBucket: "websocialaula93.appspot.com",
  messagingSenderId: "738882621271",
  appId: "1:738882621271:web:9943d3992acb9d8bfcb812"
};
firebase.initializeApp(firebaseConfig)
function addUser() {

  userName = document.getElementById("userName").value;

  firebase.database().ref("/").child(userName).update({
      purpose: "adicionar usuário"
  });

    window.location = "kwitterRoom.html";
}

