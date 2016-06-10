var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"currentDis": 0,
	"nextDis": 1
};

function start() {
	var splitedInputs = inputs[0].split(/\s/);
	var currentDis = parseInt(splitedInputs[indexOfInputs.currentDis]);
	var nextDis = parseInt(splitedInputs[indexOfInputs.nextDis]);

	var steps = currentDis - nextDis;
	if (steps < 0)
		steps = 0;
	console.log(steps);
}