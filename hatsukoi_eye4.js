var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"numOfNumbers": 0,
	"listOfNumbers": 1
};

function start() {
	var numOfNumbers = parseInt(inputs[indexOfInputs.numOfNumbers]);
	var listOfNumbers = inputs[indexOfInputs.listOfNumbers].split(/\s/);

	listOfNumbers.sort(function (a, b) {
		var tmpA = parseInt(a);
		var tmpB = parseInt(b);
		return tmpA - tmpB;
	});
	console.log(listOfNumbers[Math.floor(numOfNumbers/2)]);
}