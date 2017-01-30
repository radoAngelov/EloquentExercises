/*
	1. Define a function that takes 2 arguments and
	   returns an array of the numbers between them.
	2. Define a function sum that takes an array as
	   argument and returns the sum of numbers in it.
	3. Modify range() as you add an optional third
	   argument, that means "step" or with how much
	   every next number is greater /or less/.
*/

function range(start, end) {
	var array = [];

	while(start <= end){
		array.push(start);
		start++;
	}
	
	return array;
}

function sum(array){
	var summary = 0;

	for(var i = 0; i < array.length; i++)
		summary += array[i];

	return summary;
}

function modRange(start, end, step){
	if(arguments[2] == undefined) step = 1;
	var array = [];

	if(start > end){
		for (start; start >= end; start += step)
			array.push(start);
	}
	else{
		for (start; start >= end; start += step)
			array.push(start);
	}
	return array
}