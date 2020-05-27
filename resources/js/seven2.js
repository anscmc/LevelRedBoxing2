//var attempt = 3; //Variable to count number of attempts.

// Below function Executes on click of login button.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function work(){
    // spinner();
//        await sleep(250);
       hideLogin();
//        await sleep(500);
        showWorkout();
        // spinner2();
//        return false;
}
function wrongCreds(){
    $("p.errormsg").addClass("shstore");
}

function hideLogin(){
    $("div.parallax1").fadeToggle(1000);
}
function showWorkout(){
    window.scrollTo(0, 0);
    $("div.parallax2").fadeToggle(1500);
    
}
//var myVar = setInterval(spinner, 25);
//function spinner2(){
//    clearInterval(myVar);
//}
//function spinner(){
//    $("#spinner").fadeToggle(50);
//    var angle = 0;
//setInterval(function() {
//    console.log(angle);
//    $("#spinner")
//        .css('-webkit-transform', 'rotate('+angle+'deg)')
//        .css('-moz-transform', 'rotate('+angle+'deg)')
//        .css('-ms-transform', 'rotate('+angle+'deg)');
//    angle++; angle++; angle++;
//}, 25);
//}

