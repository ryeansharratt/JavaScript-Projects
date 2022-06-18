function Call_Loop() { //counting loop
    var Digit="";
    var X=1;
    while (X<21) { //up to 20, while digit is less than 20, keep counting
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

var Instruments=["Guitar", "Piano", "Banjo", "Ukulele", "Violin", "Cello"];
var Content="";
var Y;
function for_Loop() {
    for (Y=0; Y<Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function() { //array function, 
    var Fruit=[];
    Fruit[0]="apple";
    Fruit[1]="banana";
    Fruit[2]="kiwi";
    document.getElementById("Array").innerHTML="The fruit of the week is a "+Fruit[2]+"."; //outcome includes selected element in array
}

function constant_Function() { //constant function, scoped
const person = {gender:"girl", othergender:"boy"}; 
    person.name="Harrison"; //properties and values
    person.age="21";
    person.occupation="Carpenter";
    person.country="England";
    document.getElementById("Constant").innerHTML="The "+person.othergender+"'s name is "+person.name+". He is from "+person.country+".";
}

let X=20;
document.getElementById("let").innerHTML=X;

document.getElementById("return").innerHTML=return_Function("Ryean");
function return_Function(Ryean) {
    return "Heyyyyyyyyy "+ Ryean;
}

let food = { //let keyword
    type: "fruit",
    color: "yellow",
    shape: "long",
    description: function() {
        return "This food is a "+ this.shape + ", " + this.color + ", " + this.type +". What do you think it is?";
    }
};
document.getElementById("food_Object").innerHTML=food.description();