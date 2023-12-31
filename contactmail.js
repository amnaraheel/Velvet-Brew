const firebaseConfig = {
    apiKey: "AIzaSyB6VmDyy55oT3wBppwOrGH7UH1fk_wfcjM",
    authDomain: "velvetbrewbookingform.firebaseapp.com",
    databaseURL: "https://velvetbrewbookingform-default-rtdb.firebaseio.com",
    projectId: "velvetbrewbookingform",
    storageBucket: "velvetbrewbookingform.appspot.com",
    messagingSenderId: "463794601841",
    appId: "1:463794601841:web:ae0fcbd4da384ca95200d0"
  };

firebase.initializeApp(firebaseConfig);

var contactformDB = firebase.database().ref("contactform");

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    var name = getElementVal('name');
    var email = getElementVal('email');
    var message =  getElementVal('message');
    
    saveMessages(name, email, message);
    
    document.querySelector(".alert").style.display = "block";
    
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
    
    document.getElementById("contactform").reset();
}

const saveMessages = (name, email, message) => {
    var newContactForm = contactformDB.push();
    newContactForm.set({
        name: name,
        email: email,
        message: message,
    })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;  
};