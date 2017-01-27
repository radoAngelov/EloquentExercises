/*
  Use console.log to print the numbers from 1 to 100. If
  a number could be divide by 3, replace it with "Fizz".
  If a number could be divide by 5, replace it with "Buzz".
  If a number could be divede by both of them, replace
  it with "FizzBuzz".
*/

var output = "";
for (var n = 1; n <= 100; i++) {
	if ((n % 3 == 0) && (n % 5 == 0)) output += "FizzBuzz ";
	else if (n % 3 == 0) output += "Fizz ";
	else if (n % 5 == 0) output += "Buzz ";
	else output += String(n) + " "
}
console.log(output);