/*
	1. Define a function that count "B" character in string.
	2. Define a function that count any given character in string.
	3. Redefine countBs using countChar.
*/

function countBs(string) {
	var counter = 0;

	for (var i = 0; i < string.length; i++)
		if (string.charAt(i) == "B") counter++;
	
	return counter;
}

function countChar(string, character){
	var counter = 0;

	for (var i = 0; i < string.length; i++)
		if (string.charAt(i) == character) counter++;

	return counter;
}

function countBs2(string){
	return countChar(string, "B");
}