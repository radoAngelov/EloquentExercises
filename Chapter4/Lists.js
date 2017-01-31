/*
	1. Define a function that makes a list from array.
	2. Define a function that makes an array from list.
	3. Define a function that takes element and list
	   as arguments and makes new list.
	4. Define a function list and index and returns
	   the element on this index.
*/

function arrayToList(array){
	var list = null;

	for(var i = array.length - 1; i >= 0; i--)
		list = {value: array[i], rest: list};

	return list;
}

function listToArray(list){
	var array = [];

	for(var pair = list; pair != null; pair = pair.rest)
		array.push(pair.value);

	return array;
}

function prepend(element, list){
	return {value: element, rest:list};
}

function nth(list, index){
	var array = listToArray(list);

	return (index > array.length - 1 ? undefined : array[index]);
}