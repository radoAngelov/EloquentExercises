/*
  Make a chess board with size n x n 
  (user should choose n) like this:
  n = 4
   # #
  # #
   # #
  # #
*/

var size = Number(prompt("Choose a size for the chess board:", ""));
if(isNaN(size)) console.log("Please enter a number");

var halfSize = (size % 2 == 0 ? size / 2 : (size + 1) / 2);
var output = "";

for(var row = 0; row < size; row++){
    for(var col = 0; col <= halfSize; col++){
        output += (row % 2 == 0 ? " #" : "# ");
        if (col == halfSize) output += "\n";
 }
}

console.log(output);