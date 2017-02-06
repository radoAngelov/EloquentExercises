/*
	Define a function that makes one array from
	array of arrays using redice and concat.
*/

function flatten(array){
	return array.reduce(function(a, b){
		return a.concat(b);
	});
}