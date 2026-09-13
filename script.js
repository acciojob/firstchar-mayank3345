function firstChar(text) {
  // your code here
	let i=0;
	while(i<text.length-1){
		if(test[i]!==" "){
			return text[i];
			break;
		}
		i++;
	}
	return "";
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
