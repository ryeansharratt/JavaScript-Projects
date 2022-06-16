var C= 1; //global variable
function Add_numbers_1() {
    var D= 5 //local variable
    console.log(10+D+C);
}
Add_numbers_2(); //error in function to debug in console

function get_Date() {
    if (new Date().getHours()<20) { //if statement, if before 8:00 pm will display "How are you?"
        document.getElementById("Greeting").innerHTML="How are you?";
    }
}

if (new Date().getHours()<19) { //if statement, if before 7:00 pm will display "Good day!", if after, "Goodnight!"
    document.getElementById("Evening").innerHTML="Good day!";
}

function Pets_Function() { //user follows instructions to input number of pets
    Pets= document.getElementById("Pets").value;
    if (Pets <= 0) { //if pets are 0, displays below message:
        Get= "You should get one!";
    }
    else { //else (if pets above 0), displays below message:
        Get= "Aw, nice!";
    }
    document.getElementById("Number_pets").innerHTML= Get;
}

function Time_function() { //pulls time from computer and outcome message depends on time...
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { //if before 12:00 pm
        Reply = "It is morning!";
    }
    else if (Time > 12 == Time < 18) { //if after 12:00 pm, before 6:00 pm
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening..."; //else, (basically if after 6:00 pm)
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}