function my_Dictionary() { //defining function of a dictionary
    var Pet = { //declaring variable
        Name:"Henry", //KVP's
        Species:"Dog",
        Color:"Brown, white, and black",
        Breed:"Mutt",
        Age:4,
        Sound:"Woof!",
    };
    delete Pet.Name; //deletes this kvp
    document.getElementById("Dictionary").innerHTML= Pet.Name; //results in undefined because kvp was deleted
}

