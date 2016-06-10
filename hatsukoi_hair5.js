var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"numOfTotal": 0,
	"numOfCurrent": 1
};

function start() {
	var numOfTotal = parseInt(inputs[indexOfInputs.numOfTotal]);
	var numOfCurrent = parseInt(inputs[indexOfInputs.numOfCurrent]);

	var output = "";
	for (var index = 1; index <= numOfTotal; ++index) {
		if (index !== numOfCurrent)
			output += "-";
		else
			output += "+";
	}
	console.log(output);
}