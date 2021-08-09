var firebaseConfig = {
    apiKey: "AIzaSyDxFnCC9ymBK44RYW57s5hUMhyJvZJFWyc",
    authDomain: "event-37fd8.firebaseapp.com",
    databaseURL: "https://event-37fd8-default-rtdb.firebaseio.com",
    projectId: "event-37fd8",
    storageBucket: "event-37fd8.appspot.com",
    messagingSenderId: "436628484367",
    appId: "1:436628484367:web:25fc2fade43f35f8988e7a",
    measurementId: "G-91CZHYD9KS"
  };


function Submit()
{
    fname = document.getElementById("fname").value;
    firebase.database().ref(fname).push({
    FirstName:fname
   });

  //document.getElementById("msg").value = "";
}


