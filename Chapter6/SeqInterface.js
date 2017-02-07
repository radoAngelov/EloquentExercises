/*
	Design an interface that goes through collection
	of data. After that define a function that prints
	the first 5 elements of a sequance and uses your
	interface.
*/

/*
	INTERFACE:
	next() returns true if there are any elements left.
	current() returns the current element.
*/

function logFive(seq){
	for(var i = 0; i < 5; i++){
		if(!seq.next())
			break;
		console.log(seq.current());
	}
}

// array given
function ArraySeq(array){
	this.position = -1;
	this.array = array;
}

ArraySeq.prototype.current = function(){
	return this.array[this.position];
};

ArraySeq.prototype.next = function(){
	if(this.position >= this.array.length - 1)
		return false;
	this.position++;
	return true;
};

// range given
function RangeSeq(from, to){
	this.from = from - 1;
	this.to = to;
}

RangeSeq.prototype.current = function(){
	return this.from;
}

RangeSeq.prototype.next = function(){
	if(this.from >= this.to)
		return false
	this.from++;
	return true
}