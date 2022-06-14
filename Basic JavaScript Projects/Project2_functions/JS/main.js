function My_First_Function() { //defining and naming a function
    var str= "This text is blue.";//defining variable, giving it string value
    var result= str.fontcolor("blue");//using fontcolor method on str variable
    document.getElementById("Blue_Text").innerHTML=result//putting result into HTML text element with "Blue_text" id 
}

function myFunction() { //defining and naming a function
    var sentence= "I love the "; //defining variable
    sentence+= "outdoors so much!";//concatenating using the =+ operator
    document.getElementById("Concatenate").innerHTML= sentence;//identifying JS to be called
}


function changeColor(newColor) {
    const elem= document.getElementById('para');
    elem.style.color=newColor;
}