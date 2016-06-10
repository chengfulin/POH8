var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"numOfOutputs": 0,
	"outputString": 1
};

function start() {
	var numOfOutputs = parseInt(inputs[indexOfInputs.numOfOutputs]);
	for (var index = 0; index < numOfOutputs; ++index) {
		console.log(inputs[indexOfInputs.outputString]);
	}
}