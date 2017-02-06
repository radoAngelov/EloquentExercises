/*
	Define a function that calculate the
	average differencies between the age
	of mother and her child. ANCESTRY_FILE
	contains data in JSON.
*/

var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  	function plus(a, b) { return a + b; }
  	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  	byName[person.name] = person;
});

var differencies = [];
ancestry.forEach(function(person){
   	if(byName[person.mother]){
   	 	var mother = person.mother;
   	 	differencies.push(person.born - byName[mother].born);
   }
});