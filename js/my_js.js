// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAPrXwEdeVAk_b3HG_kE2Fh0PS9GRZjIDE",
    authDomain: "mywebsite-401a8.firebaseapp.com",
    databaseURL: "https://mywebsite-401a8.firebaseio.com",
    projectId: "mywebsite-401a8",
    storageBucket: "mywebsite-401a8.appspot.com",
    messagingSenderId: "376372952114",
    appId: "1:376372952114:web:a85e655ebfe03a47ae102b",
    measurementId: "G-5VRTT80HX2"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function sendMessage(){
  		var name = document.getElementById("txt_name").value;
  		var mobile = document.getElementById("txt_mobile").value;
  		var email = document.getElementById("txt_email").value;
  		var text = document.getElementById("txt_text").value;

  		firebase.database().ref("messages").push().set({
	        "sender":name,
	        "mobile":mobile,
	        "email":email,
	        "message":text
	    });
  		document.getElementById("my_form").reset();
      return false;
  }