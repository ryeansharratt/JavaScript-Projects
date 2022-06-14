function addition_Function() { //head of all functions, definining and naming the function
    var addition= 10+10; //defining variable
    document.getElementById("Math").innerHTML="10+10= "+ addition; //way to put result into HTML <p> element, IDing JS to be called
}

function subtraction_Function() {
    var Subtraction=5-2;
    document.getElementById("Sub").innerHTML="5-2= "+ Subtraction;
}

function multiplication() {
    var simple_Math=6*8;
    document.getElementById("Mult").innerHTML="6x8= "+ simple_Math;
}

function division() {
    var simple_Math=48/6;
    document.getElementById("Divi").innerHTML="48/6= "+ simple_Math;
}

function more_Math() {
    var simple_Math=(1+2) * 10 / 2 -5;
    document.getElementById("More").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals: "+ simple_Math;
}

function modulus_Operator() {
    var simple_Math=25%6;
    document.getElementById("Mod").innerHTML="When you divide 25 by 6 you have a remainder of: "+ simple_Math;
}

function negation_Operator() {
    var x=10;
    document.getElementById("Neg").innerHTML= -x;
}

var I = 5; //incrementing 5
I++;
document.write(I);

var D = 5.25; //decrementing 5.25
D--;
document.write(D);                    //These 4 actions are all displaying at the top of the screen

window.alert(Math.random()*50);

document.write(Math.floor(4.7)); //JS Math method
