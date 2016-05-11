var _ = require("underscore");
var lib = require("./lib");

// array of tasks to be run as a series
// we should expect to see 1 then 2 then 3 logged, even though the timeouts would
var SERIES_TASKS = [
	function (callback) {
		setTimeout(function() {
		console.log(1);
		callback();
		}, 2000);
	},
	function (callback) {
		setTimeout(function() {
			console.log(2);
			callback();
		}, 1500);
	},
	function (callback) {
		setTimeout(function() {
			console.log(3);
			callback();
		}, 1000);
	}
];

// array of tasks to run in parallel
var PARALLEL_TASKS = [
	function (callback, results) {
		setTimeout(function () {
			results.push(1);
			callback(results);
		}, 1);
	},
	function (callback, results) {
		setTimeout(function () {
			results.push(2);
			callback(results);
		}, 1);
	}
];


// run the two tasks
// ideally this would be presented much more cleanly, but ran out of time
// with the 4 hour timeframe
console.log("Running the async series tasks....");

// output the series functions for reference
console.log("Series function tasks are: ");
_.each(SERIES_TASKS, function(task) {
	console.log(task.toString());
});


lib.runAsyncSeries(SERIES_TASKS, function () {
	console.log("Running the parallel tasks....");

	// output the series functions for reference
	console.log("Parallel function tasks are: ");
	_.each(PARALLEL_TASKS, function(task) {
		console.log(task.toString());
	});

	lib.runParallelTasks(PARALLEL_TASKS, function(results) {
		console.log("Results for parallel tasks are: " + results);
	});
});