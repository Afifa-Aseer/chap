// Q1
function power(a,b){
    document.write("<h3>"+a+"<sup>"+b+"</sup> = "+Math.pow(a,b)+"</h3>")
}
power(5,4)
document.write("<hr>")

// Q2
var year = +prompt("Enter Year");
switch (year)
{
    case 2008:
            alert("its leap year");
        break;
    case 2012:
             alert("its leap year");
    break;  
    case 2016:
            alert("its leap year");
    break; 
    case 2020:
            alert("its leap year");
break;
    default:
        alert("its not leap year");

        break;

}

// Q3

 function calculation(a, b, c) {
        var s = (a + b + c) / 2;
    
        function area() {
            var area = s * (s - a) * (s - b) * (s - c);
            var root = Math.sqrt(area);
            document.write("The area of triangle is " + root);
        }
        area()
    }
    calculation(5, 3, 4);
document.write("<hr>")

// Q4

// Q5
function index(str) {


    var arr = str.split("");
    console.log(arr);
    for (i = 0; i < arr.length; i++) {
        arr[i];
        document.write(i);
    }
}
index("afifa");
document.write("<hr>")

// Q6

function check() {

    var res = "";
    var srt = "Please read this application and give me gratuity";
    for (i = 0; i < srt.length; i++) {

        if ("aeiouAEIOU".match(srt[i]) === null) {
            res += srt[i];
        }
    }
    return res;
}
document.write(check());
document.write("<hr>")

// Q7

function accur() {

    var sentence = "Please read this application and give me gratuity";
    var count = 0;

    for (i = 0; i < sentence.length; i++) {
        var text = sentence[i]
        switch (sentence) {

            case (text == "a"):
                count++
        }
    }
    return count;
}
document.write("Accurrences " + accur())
document.write("<hr>")

// Q8

function meter() {

    var distance = +prompt("Enter Distance");
    var mt = distance * 1000;
    document.write(distance + " kilomter is equal to " + mt + " Meter");
}
meter();
document.write("<br>")

function feet() {

    var distance = +prompt("Enter Diatance");
    var ft = distance * 3280.8;
    document.write(distance + " kilomter is equal to " + ft + " feet");
}
feet();
document.write("<br>")

function inch() {

    var distance = +prompt("Enter Diatance");
    var inches = distance * 39370.1;
    document.write(distance + " kilomter is equal to " + inches+ " inches");


}
inch();
document.write("<br>")

function CM() {

    var distance = +prompt("Enter Diatance");
    var centimter = distance * 100000;
    document.write(distance + " kilomter is equal to " + centimter+ "  Centimeters");
}
CM();
document.write("<hr>")


// Q9
function bonus() {
    var i = 1;
    while (i <= 2) {
        var hour = +prompt("Enter your working hour of employ" + i);
        if (hour > 40) {
            var overTime = hour - 40;
            var pay = overTime * 12;
            document.write("Your over time pay is Rs." + pay+"<br>");
        }
        else {
            document.write("You have to have to work more then 40 hour to get bonus")
        }
        i++
    }
}
bonus();

