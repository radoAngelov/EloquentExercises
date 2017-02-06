/*
	Define 2 functions- some and every, that
	take an array as argument and a predicate.
	They should return true if elements in array
	respond to the condition.
*/

function some(array, predicate){
	for(var i = 0; i < array.length; i++){
		if(predicate(array[i])) return true;
	}
	return false;
}

function every(array, predicate){
	for(var i = 0; i < array.length; i++){
		if(!(predicate(array[i]))) return false;
	}
	return true;
}