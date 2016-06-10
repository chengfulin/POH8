var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

var inputs = [];
rl.on("line", function (line) {
	inputs.push(line.trim());
}).on("close", function () {
	start();
});

var indexOfInputs = {
	"lengthOfS": 0,
	"lengthOfT": 1,
	"stringS": 1,
	"stringT": 2
};

function start() {
	var splitecInputs = inputs[0].split(/\s/);
	var lengthOfS = parseInt(splitecInputs[indexOfInputs.lengthOfS]);
	var lengthOfT = parseInt(splitecInputs[indexOfInputs.lengthOfT]);
	var stringS	= inputs[indexOfInputs.stringS];
	var stringT = inputs[indexOfInputs.stringT];

	var output = lengthOfT;
	var searchString = stringT;
	for (var index = 0; index < lengthOfS; ++index) {
		if (searchString.indexOf(stringS.charAt(index)) !== -1) {
			--output;
			searchString = searchString.replace(stringS.charAt(index), "_");
		}
	}
	console.log(output);
}