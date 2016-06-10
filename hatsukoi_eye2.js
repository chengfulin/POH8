var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"numOfEmptySeats": 0,
	"numOfComingPeople": 1
};

function start() {
	var splitedInput = inputs[0].split(/\s/);
	var numOfEmptySeats = parseInt(splitedInput[indexOfInputs.numOfEmptySeats]);
	var numOfComingPeople = parseInt(splitedInput[indexOfInputs.numOfComingPeople]);

	if (numOfComingPeople > numOfEmptySeats)
		console.log("NG");
	else
		console.log("OK");
}