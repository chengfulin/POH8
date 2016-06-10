var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"chcekingNumber": 0
};

function start() {
	var num = parseInt(inputs[indexOfInputs.chcekingNumber]);
	if (num % 7 === 0)
		console.log("lucky");
	else
		console.log("unlucky");
}