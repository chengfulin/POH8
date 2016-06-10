var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

function start() {
	var numOfInputs = inputs.length;
	var numOfMatchs = 0;

	for (var index = 0; index < numOfInputs; ++index) {
		var splitedLine = inputs[index].split(/\s/);
		var desired = splitedLine[0];
		var inputed = splitedLine[1];
		if (desired === inputed)
			++numOfMatchs;
	}
	if (numOfMatchs >= 3)
		console.log("OK");
	else
		console.log("NG");
}