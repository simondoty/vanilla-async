var _ = require("underscore");

// use a reverse iterated loop to reduce each task into the one preceding it.
var runAsyncSeries = function (tasks, callback) {
	console.log(tasks);
	 var bigAssSeriesFunction = callback;

	for (var i = tasks.length - 1; i >= 0; i--) {
		console.log(tasks[i]);
		var oldBigFunky = bigAssSeriesFunction;
		bigAssSeriesFunction = function () {
			tasks[i](oldBigFunky);
		}
	}

 	bigAssSeriesFunction();
};


var runParallelTasks = function (tasks, callback) {

};

module.exports = {
	runAsyncSeries: runAsyncSeries,
	runParallelTasks: runParallelTasks
};