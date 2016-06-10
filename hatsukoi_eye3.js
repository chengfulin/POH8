var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"price": 0
};

function start() {
	var price = parseInt(inputs[indexOfInputs.price]);
	var points = Math.floor(price / 100);
	if (price > 1000)
		points += 10;
	console.log(points);
}