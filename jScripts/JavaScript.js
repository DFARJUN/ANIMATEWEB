var hwind = window.innerHeight;
var wwind = window.innerWidth;
document.documentElement.style.setProperty('--hwwind', hwind + "px");
document.documentElement.style.setProperty('--wwwind', wwind-17 + "px");


////window.onresize = function () {
//    var hwind = window.innerHeight;
//    var wwind = window.innerWidth;
//    document.documentElement.style.setProperty('--hwwind', hwind + "px");
//    document.documentElement.style.setProperty('--wwwind', wwind - 17 + "px");
//}


function hideload() {
    document.getElementById("opennigsec").style.display = "none";
}


function stopall() {
    document.getElementsByClassName("abtngif")[0].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("abtngif")[1].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("abtngif")[2].style.WebkitAnimationPlayState = "paused";
    document.getElementById("banana").style.WebkitAnimationPlayState = "paused";
    $("#carouselExampleIndicators").carousel('pause');
    document.getElementById("stopallbtn").style.display = "none";
    document.getElementById("playallbtn").style.display = "inline-block";

}
function playall() {
    document.getElementsByClassName("abtngif")[0].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("abtngif")[1].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("abtngif")[2].style.WebkitAnimationPlayState = "running";
    document.getElementById("banana").style.WebkitAnimationPlayState = "running";
    $("#carouselExampleIndicators").carousel('cycle');
    document.getElementById("playallbtn").style.display = "none";
    document.getElementById("stopallbtn").style.display = "inline-block";

}
