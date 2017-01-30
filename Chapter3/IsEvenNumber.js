/*
	Make a function that returns true if a number is positive
	and false otherwise.
*/

function isEven(number) {
	posNumber = (number < 0 ? -number : number);
	if (posNumber == 0) 
		return true;
	else if (posNumber == 1)
		return false;
	else
		return isEven(posNumber - 2);
}