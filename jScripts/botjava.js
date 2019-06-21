
function botfunc() {
    var btnn = document.getElementById("bottopage");
    btnn.style.display = "";
    var quation = document.getElementById("botquet").value;
    if (quation != "") {
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה.";
        }, 0);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה..";
        }, 300);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה...";
        }, 600);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה.";
        }, 900);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה..";
        }, 1200);
        setTimeout(function () {

            if ((quation.includes("ראש")) || (quation.includes("הראש")) || (quation.includes("בראש")) || (quation.includes("מיגרנה"))) {
                document.getElementById("theanswer").innerHTML = varhead;
            } else {
                if ((quation.includes("בטן")) || (quation.includes("הבטן")) || (quation.includes("בבטן")) || (quation.includes("קיבה"))) {
                    document.getElementById("theanswer").innerHTML = varbeten;
                    btnn.style.display = "block";
                    document.getElementById("bottopage").innerHTML = "לעמוד כאב בטן";
                    btnn.href = "stomach.html";
                } else {
                    if ((quation.includes("גב")) || (quation.includes("בגב")) || (quation.includes("הגב"))) {
                        document.getElementById("theanswer").innerHTML = varback;
                    } else {
                        if ((quation.includes("גרון")) || (quation.includes("הגרון")) || (quation.includes("בגרון"))) {
                            document.getElementById("theanswer").innerHTML = vargaron;
                        } else {
                            if ((quation.includes("מחזור")) || (quation.includes("המחזור")) || (quation.includes("במחזור")) || (quation.includes("וסת")) || (quation.includes("הוסת"))) {
                                document.getElementById("theanswer").innerHTML = varmahzor;
                                btnn.style.display = "block";
                                document.getElementById("bottopage").innerHTML = "לעמוד כאב מחזור";
                                btnn.href = "period.html";
                            } else {
                                if ((quation.includes("אוזן")) || (quation.includes("באוזן")) || (quation.includes("האוזן")) || (quation.includes("אוזניים")) || (quation.includes("האוזניים")) || (quation.includes("באוזניים")) || (quation.includes("אוזנים"))) {
                                    document.getElementById("theanswer").innerHTML = varozen;
                                } else {
                                    if ((quation.includes("עצירות"))) {
                                        document.getElementById("theanswer").innerHTML = varazirut;
                                    } else {
                                        if ((quation.includes("תודה"))) {
                                            document.getElementById("theanswer").innerHTML = varthank;
                                        } else {
                                            if ((quation.includes("פשפשים")) || (quation.includes("קרציות")) || (quation.includes("פרעושים"))) {
                                                document.getElementById("theanswer").innerHTML = varpishphesh;
                                                btnn.style.display = "block";
                                                document.getElementById("bottopage").innerHTML = "לעמוד פשפשים";
                                                btnn.href = "dogs.html";
                                            }
                                            else {
                                                if ((quation.includes("שיעול"))) {
                                                    document.getElementById("theanswer").innerHTML = varshiul;
                                                    btnn.style.display = "block";
                                                    document.getElementById("bottopage").innerHTML = "לעמוד שיעול";
                                                    btnn.href = "shiul.html";

                                                } else {
                                                        document.getElementById("theanswer").innerHTML = varundifined;
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





        }, 1400);



    } else {
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה.";
        }, 0);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "סבתא מקלידה..";
        }, 300);
        setTimeout(function () {
            document.getElementById("theanswer").innerHTML = "מבובלים, שכחתם לשאול שאלה";
        }, 600);
    }
}




var varundifined = "לא הצלחתי להבין, בואו ננסה שוב";
var varhead = "הראש הראש הראש";
var varback = "הגב הגב הגבה";
var varbeten = "בטן בטן בטן";
var vargaron = "גרון גרון גרון";
var varazirut = "עצירות עצירות עצירות";
var varozen = "אוזן אוזן";
var varmahzor = "מחזור מחזור מחזור";
var varmore = "עוד משו?";
var varthank = "תודה תודה";
var varshiul = "שיעול שיעול שיעול";
var varpishphesh = "פשפש";


