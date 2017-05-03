'use strict';

// init firebase
firebase.initializeApp({
    databaseURL: "https://chat-chat-chat-chat.firebaseio.com"
});


firebase.database().ref('messages').limitToLast(20).on('child_added', function (data) {
    
    console.log(data, data.val());
    
});
