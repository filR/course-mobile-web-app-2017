'use strict';

// init firebase
firebase.initializeApp({
    databaseURL: "https://chat-chat-chat-chat.firebaseio.com"
});

// get messages
firebase.database().ref('messages').limitToLast(20).on('child_added', function (data) {
    
    // get name and message
    let name = data.val().name;
//    let name = data.val().name || "Anonymous";
    let text = data.val().text;
    
    // empty name
    if (!name) {
        name = "Captain Anon";
    }
    
    // <li>
    //      <strong>Name:</strong>
    //      Message goes here.
    // </li>
    
    // create element
    let element = $(`<li><strong>${name}</strong>${text}</li>`);
    
    // append element to our container
    $('#messages').append(element);
    
    // scroll to last message
    $('#messages')[0].scrollTop = $('#messages')[0].scrollHeight;
});



// send messages

$('#message-input').on('keypress', function (event) {
        console.log('bleeeeep');               
});

// firebase.database().ref('messages').push({
//    name: 'xx',
//    text: 'xx'
//});


















