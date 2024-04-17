function validateForm(){
	//alert("test");
	let message = "";
	let invalid = false;
	let name = document.getElementById("yourName").value;
	if(name.length < 5){
		message += "Name must be at least 5 characters long\n";
		invalid = true;
	}
	let email = document.getElementById("yourEmail").value;
	if(email.indexOf(".") == -1 || email.indexOf("@") == -1){
		message += "Email must include an @ or a .\n";
		invalid = true;
	}
	
	if(invalid){
		alert(message);
	}else{
		alert("message submitted - validation ok");
	}
}