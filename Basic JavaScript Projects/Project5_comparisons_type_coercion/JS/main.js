document.write(typeof 20); //displays type of value, in this case "number"

function my_Function() {
    document.getElementById("Test").innerHTML= 0/0;
}

function my_True() {
document.getElementById("True").innerHTML= isNaN('Hello'); //'not a number' is true
}
function my_False() {
document.getElementById("False").innerHTML= isNaN('20'); //'not a number' is false, 20 is a number
}

function my_Infinity() {
    document.getElementById("Inf").innerHTML= 2e310; //infinity
}

function my_NegInf() {
    document.getElementById("Neg").innerHTML= -3E310; //-infinity
}

document.write(20>13); //Boolean, true

document.write(13<10); //Boolean, false

console.log(10 * 20); //displays in console, 200

document.write("12" + 5); //type coercion, simply tacks 5 onto the 12 (125)

console.log(20<13); //displays in console, boolean false

document.write(5==5); //double equal signs, true

document.write(5==5+3); //'', false

X=20; //triple equal signs, comparison made between data types and values
Y=20;
document.write(X===Y); //true

X=20;
Y="Twenty";
document.write(X===Y); //false

X=20;
Y="20";
document.write(X===Y);//false

X="13";
Y="12";
document.write(X===Y);//false

document.write(4<7 && 7>4); //AND boolean operator, true
document.write(4>7 && 7>4); //false

document.write(4>7 || 5<10); //OR boolean operator, true
document.write(4>7 || 5>10); //false

function not_Function() { //NOT operator
    document.getElementById("Not").innerHTML= ! (20>5); //false because it's true
}

function Not_function() {
    document.getElementById("Notagain").innerHTML= ! (5>6); //true because it's false, double negative
}