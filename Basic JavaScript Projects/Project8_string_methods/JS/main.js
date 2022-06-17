function full_Sentence() { //concatenating a sentence
    var part_1="This sentence is put ";
    var part_2="together.";
    var whole_sentence = part_1.concat(part_2); //command to tie the two together
    document.getElementById("Concatenate").innerHTML= whole_sentence; //call in HTML for js
}

function slice_Method() { //slice method
    var Sentence = "I'm either going for ice cream or a trip around the world, I'll decide in the car."
    var Section= Sentence.slice(20,30); //defining which part of sentence to slice out and display, by character position
    document.getElementById("Slice").innerHTML= Section;
}

function upper_Method() { //converting sentence to upper case
let text= "Ice cream";
let result= text.toUpperCase();
document.getElementById("upper").innerHTML=result;
}

function search_Method() { //search method
    let text= "So many shades of green."
    let position= text.search(/green/i); //searches out word of choice to display, "i" means case insensitive
    document.getElementById("search").innerHTML=position;
}

function string_Method() { //string method
    var X=29098;
    document.getElementById("numbers_to_string").innerHTML=X.toString();
}

function precision_Method() { //precision method
    var X = 1232.12097776424;
    document.getElementById("precision").innerHTML=X.toPrecision(8); //cutting number off at specified character point, in this case @8
}

function fixed_Method() { //fixed method
    let num= 439.8075646;
    let n=num.toFixed(1);
    document.getElementById("fixed").innerHTML=n; //rounding number off at specified decimal point, 1 here
}

function value_Method() { //valueOf method
    let text="Ice Cream";
    let result=text.valueOf(); //will return value of text in original state, basically exactly as written but without quotes
    document.getElementById("value").innerHTML=result;
}