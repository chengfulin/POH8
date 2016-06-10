var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"totalPeople": 0,
	"numOfCandies": 1
};

function start() {
	var splitedInputs = inputs[0].split(/\s/);
	var totalPeople = parseInt(splitedInputs[indexOfInputs.totalPeople]);
	var numOfCandies = parseInt(splitedInputs[indexOfInputs.numOfCandies]);
	if (numOfCandies % totalPeople === 0)
		console.log("ok");
	else
		console.log("ng");
}