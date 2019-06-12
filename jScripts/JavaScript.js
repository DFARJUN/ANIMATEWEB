var hwind = window.innerHeight;
var wwind = window.innerWidth;
document.documentElement.style.setProperty('--hwwind', hwind + "px");
document.documentElement.style.setProperty('--wwwind', wwind-17 + "px");

if (window.innerWidth > 1384) {
    document.documentElement.style.setProperty('--wwwind', 1287 + "px");
    var zoomn = window.innerWidth / 1300;
    document.documentElement.style.setProperty('--zoomi', zoomn );
}

window.onresize = function () {
    var hwind = window.innerHeight;
    var wwind = window.innerWidth;
    document.documentElement.style.setProperty('--hwwind', hwind + "px");
    document.documentElement.style.setProperty('--wwwind', wwind - 17 + "px");
}


function hideload() {
    setTimeout(function () {
        document.getElementById('loadpage').style.display = 'none';
    }, 1300);
}


function stopall() {
    document.getElementsByClassName("abtngif")[0].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("abtngif")[1].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("abtngif")[2].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("typewriter")[0].style.WebkitAnimationPlayState = "paused";
    document.getElementsByClassName("typewriter")[1].style.WebkitAnimationPlayState = "paused";
    document.getElementById("banana").style.WebkitAnimationPlayState = "paused";
    $("#carouselExampleIndicators").carousel('pause');
    document.getElementById("stopallbtn").style.display = "none";
    document.getElementById("playallbtn").style.display = "inline-block";
    document.getElementById("bike").style.WebkitAnimationPlayState = "paused";



}
function playall() {
    document.getElementsByClassName("abtngif")[0].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("abtngif")[1].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("abtngif")[2].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("typewriter")[0].style.WebkitAnimationPlayState = "running";
    document.getElementsByClassName("typewriter")[1].style.WebkitAnimationPlayState = "running";

    document.getElementById("banana").style.WebkitAnimationPlayState = "running";
    $("#carouselExampleIndicators").carousel('cycle');
    document.getElementById("playallbtn").style.display = "none";
    document.getElementById("stopallbtn").style.display = "inline-block";
    document.getElementById("bike").style.WebkitAnimationPlayState = "running";


}

$("#newfooter").load("header.html"); 

function fadd() {
    document.getElementById('arak1').style.opacity = "0";
    document.getElementById('arak2').style.opacity = "0";
    document.getElementById('arak3').style.opacity = "0";
    document.getElementById('arak4').style.opacity = "0";
    document.getElementById('arak5').style.opacity = "0";
    document.getElementById('arak6').style.opacity = "0";
    document.getElementById('arak7').style.opacity = "0";
    document.getElementById('arak8').style.opacity = "0";
    document.getElementById('arak9').style.opacity = "0";
    document.getElementById('arak10').style.opacity = "0";
    document.getElementById('arak11').style.opacity = "0";
    document.getElementById('arak12').style.opacity = "0";
    document.getElementById('arak13').style.opacity = "0";


}
//setTimeout(function () { window.onscroll = fundd(); }, 2000);
var x = 0;
var lastScrollTop = 0;
function fundd() {
            var nowScrollTop = $(this).scrollTop();
                if (nowScrollTop > lastScrollTop) {
x+=1
                } else {
x-=1
                }
                lastScrollTop = nowScrollTop;


    if (x == 53) {
        x=0
    }
    if (x == (-1)) {
        x=52
    }
        if (x % 52 == 0) {
            fadd();
            document.getElementById('arak1').style.opacity = "1"
        }
        else {
            if (x % 48 == 0) {
                fadd();
                document.getElementById('arak2').style.opacity = "1"
            }
            else {
                if (x % 44 == 0) {
                    fadd();
                    document.getElementById('arak3').style.opacity = "1"
                }
                else {
                    if (x % 40 == 0) {
                        fadd();
                        document.getElementById('arak4').style.opacity = "1"
                    }
                    else {
                        if (x % 36 == 0) {
                            fadd();
                            document.getElementById('arak5').style.opacity = "1"
                        }
                        else {
                            if (x % 32 == 0) {
                                fadd();
                                document.getElementById('arak6').style.opacity = "1"
                            }
                            else {
                                if (x % 28 == 0) {
                                    fadd();
                                    document.getElementById('arak7').style.opacity = "1"
                                }
                                else {
                                    if (x % 24 == 0) {
                                        fadd();
                                        document.getElementById('arak8').style.opacity = "1"
                                    }
                                    else {
                                        if (x % 20 == 0) {
                                            fadd();
                                            document.getElementById('arak9').style.opacity = "1"
                                        }
                                        else {
                                            if (x % 16 == 0) {
                                                fadd();
                                                document.getElementById('arak10').style.opacity = "1"
                                            }
                                            else {
                                                if (x % 12 == 0) {
                                                    fadd();
                                                    document.getElementById('arak11').style.opacity = "1"
                                                }
                                                else {
                                                    if (x % 8 == 0) {
                                                        fadd();
                                                        document.getElementById('arak12').style.opacity = "1"
                                                    }
                                                    else {
                                                        if (x % 4 == 0) {
                                                            fadd();
                                                            document.getElementById('arak13').style.opacity = "1"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


