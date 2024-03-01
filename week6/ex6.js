let again = 1;
while(again == 1){
	let first = prompt("Enter first number");
	let second = prompt("Enter second number");

	let choice = prompt("What arithmetic operation do you wish to perform with the numbers?\n\n"+
						"Enter a choice:\n\n"+
						"1. For Addition\n"+
						"2. For Subtraction\n"+
						"3. For Multiplication\n"+
						"4. For Division\n");

	let output = arithmetic(first, second, choice);
	if(output === "invalid"){
		alert("Invalid choice");
	}else{
		alert("Result: "+output);	
	}

	again = prompt("Do you wish to perform any more calculations (1. for yes, 2. for no)");
	
}

function arithmetic(first, second, choice){
	let result = 0;
	if(choice == 1){
		result = Number(first) + Number(second);		
	}else if(choice == 2){
		result = first - second;
	}else if(choice == 3){
		result = first * second;
	}else if(choice == 4){
		result = first / second;
	}else{
		return "invalid";
	}
	return result;
}