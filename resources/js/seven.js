//var attempt = 3; //Variable to count number of attempts.

// Below function Executes on click of login button.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "LRB" && password == "member"){
       hideLogin();
        await sleep(750);
        showWorkout();
        return false;
}
else if ( username == "lrb" && password == "member"){
        hideLogin();
        await sleep(750);
        showWorkout();
        return false;
}
else if ( username == "Lrb" && password == "member"){
       hideLogin();
        await sleep(750);
        showWorkout();
        return false;
}
    else if ( username == "lRb" && password == "member"){
       hideLogin();
        await sleep(750);
        showWorkout();
        return false;
}
    else if ( username == "lrB" && password == "member"){
       hideLogin();
        await sleep(750);
        showWorkout();
        return false;
}
        else if ( username == "LRb" && password == "member"){
       hideLogin();
        await sleep(750);
        showWorkout();
        return false;
}
        else if ( username == "LrB" && password == "member"){
       hideLogin();
        await sleep(750);
        showWorkout();
        return false;
}
        else if ( username == "lRB" && password == "member"){
       hideLogin();
        await sleep(750);
        showWorkout();
        return false;
}
else{
    $("p.errormsg").addClass("shstore");
//attempt --;// Decrementing by one.
//alert("Incorrect username and/or password. Please try again.");
// Disabling fields after 3 attempts.
//if( attempt == 0){
//document.getElementById("username").disabled = true;
//document.getElementById("password").disabled = true;
//document.getElementById("submit").disabled = true;
//return false;
//}
}
}

function hideLogin(){
    $("div.parallax1").fadeToggle(750);
}
function showWorkout(){
    $("div.parallax2").fadeToggle(1000);
}

