const firebaseConfig = {
  apiKey: "AIzaSyCH0R7OPFAJIPNKFiOrbbbJXwwj6nunPjI",
  authDomain: "project-team-red.firebaseapp.com",
  projectId: "project-team-red",
  storageBucket: "project-team-red.appspot.com",
  messagingSenderId: "517903207132",
  appId: "1:517903207132:web:2e4da9746ae2db94d34219",
  measurementId: "G-2RJZC89REN"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contact-form');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementVal('contact-name-input');
  var email = getElementVal('contact-email-input');
  var message = getElementVal('contact-message-input');

  console.log(name, email, message);

  saveMessage(name, email, message);
}

const saveMessage = (name, email, messsage) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name : name,
      email : email,
      messsage : message,
    })
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
