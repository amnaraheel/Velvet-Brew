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

var bookingformDB = firebase.database().ref("bookingform");

document.getElementById("bookingform").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    var name = getElementVal('name');
    var email = getElementVal('email');
    var persons = getElementVal('persons');
    var date = getElementVal('date');
    var time = getElementVal('time');
    
    saveMessages(name, email, persons, date, time);
    
    document.querySelector(".alert").style.display = "block";
    
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
    
    document.getElementById("bookingform").reset();
}

const saveMessages = (name, email, persons, date, time) => {
    var newBookingForm = bookingformDB.push();
    newBookingForm.set({
        name: name,
        email: email,
        persons: persons,
        date: date,
        time: time,
    })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;  
};