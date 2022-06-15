function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride= (Height<52) ? "You are too short":"You are tall enough"; //outcome is based on answer, if smaller or larger than the height parameter
    document.getElementById("Ride").innerHTML= Can_ride + " to ride."; //output after user presses button
}

function License_Function() { //my own version of the above
    var Age, Can_drive;
    Age= document.getElementById("Age").value;
    Can_drive= (Age<16) ? "You aren't old enough" : "You are old enough"; //ternary operator, "?"
    document.getElementById("License").innerHTML= Can_drive + " to get your license to drive.";
}

function Vehicle(Make, Model, Year, Color) { //NEW keyword example in course
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a "+Erik.Vehicle_Color+ "-colored "+Erik.Vehicle_Model+" manufactured in "+
    Erik.Vehicle_Year;
}

function Fruit(color, taste, seeds) { //new and this
    this.color= color; //'this' points to the created object, binds the two together
    this.taste= taste;
    this.seeds= seeds;
}
const fruit1= new Fruit('Yellow', 'Sweet', 1); //creating an object
function fruitFunction() { //displaying the result with below code
    document.getElementById("New_and_This").innerHTML= "This fruit is "+fruit1.color+", "+fruit1.taste+", and has "+fruit1.seeds+" seed.";
}

function count_Function() { //nested function
    document.getElementById("Nested_Function").innerHTML= Count ();
    function Count () {
        var Starting_point=1;
        function Plus_five() {Starting_point += 5;}
        Plus_five ();
        return Starting_point; //output is 6
    }
}