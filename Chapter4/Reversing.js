/*
	Define 2 functions. First one take an array
	as a copy and produce a new array that has
	the same elements as the old one but in
	reversed order. The other function should
	also reverse the array but without making
	a copy.
*/

function reverseArray(array){
	newArray = [];

	for(var i = array.length - 1; i >= 0; i--)
		newArray.push(array[i]);

	return newArray;
}

function reverseArrayInPlace(array){
	for (var i = 0; i <= Math.floor((array.length - 1) / 2); i++){
		var temp = array[i];
		array[i] = array[array.length - i - 1];
		array[array.length - i - 1] = temp;
	}
	return array;
}