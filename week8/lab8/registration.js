function checkUsername(){
    //alert("username");
    let x = document.getElementById("un").value;
    if(x.length < 8){
        alert("Username name must contain at least 8 characters");  
    }
}

function checkFirstName(){
    //alert("firstname");
    let x = document.getElementById("fn").value;
    if(x.length == 0){
        alert("Please enter first name");  
    }    
}

function checkLastName(){
    let x = document.getElementById("ln").value;
    if(x.length == 0){
        alert("Please enter last name");  
    }    
}

function checkEmail(){
    let x = document.getElementById("emailAddress").value;
    let y = x.indexOf("@");
    if(y == -1){
        alert("Email adress must contain @");
    }

    let z = x.includes(".");
    if(!z){
        alert("Email adress must contain .");
    }  
}