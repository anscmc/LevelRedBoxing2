//var attempt = 3; //Variable to count number of attempts.

// Below function Executes on click of login button.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "LRB" && password == "member"){
        spinner();
        await sleep(750);
        hideLogin();
        await sleep(1000);
        showWorkout();
        return false;
}
else if ( username == "lrb" && password == "member"){
        spinner();
        await sleep(750);
        hideLogin();
        await sleep(1000);
        showWorkout();
        return false;
}
else if ( username == "Lrb" && password == "member"){
    spinner();
        await sleep(750);
       hideLogin();
        await sleep(1000);
        showWorkout();
        return false;
}
    else if ( username == "lRb" && password == "member"){
        spinner();
        await sleep(750);
       hideLogin();
        await sleep(1000);
        showWorkout();
        return false;
}
    else if ( username == "lrB" && password == "member"){
        spinner();
        await sleep(750);
       hideLogin();
        await sleep(1000);
        showWorkout();
        return false;
}
        else if ( username == "LRb" && password == "member"){
            spinner();
        await sleep(750);
       hideLogin();
        await sleep(1000);
        showWorkout();
        return false;
}
        else if ( username == "LrB" && password == "member"){
            spinner();
        await sleep(750);
       hideLogin();
        await sleep(1000);
        showWorkout();
        return false;
}
        else if ( username == "lRB" && password == "member"){
            spinner();
        await sleep(750);
       hideLogin();
        await sleep(1000);
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
    $("div.parallax1").fadeToggle(1000);
}
function showWorkout(){
    window.scrollTo(0, 0);
    $("div.parallax2").fadeToggle(1500);
    
}
function spinner(){
    $("#spinner").fadeToggle(50);
    var angle = 0;
setInterval(function() {
    console.log(angle);
    $("#spinner")
        .css('-webkit-transform', 'rotate('+angle+'deg)')
        .css('-moz-transform', 'rotate('+angle+'deg)')
        .css('-ms-transform', 'rotate('+angle+'deg)');
    angle++; angle++; angle++;
}, 25);
}

