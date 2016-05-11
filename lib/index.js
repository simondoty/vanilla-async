var _ = require("underscore");

// implement a reduceRight function with a reverse forEach loop
// we'll aggregate callbacks into a nested callback that will be invoked after the loop
var runAsyncSeries = function (tasks, callback) {
	// let's build up the nested function that we'll use as a callback
	var wrappedFunc = callback;
	
	// reverse iterate over the tasks and build up the callback
	tasks.reverse().forEach(function(task) {
		var next = wrappedFunc;
		wrappedFunc = function() {
			task(next);
		};
	});

	// invoke it!
 	wrappedFunc();
};

// a simple reducer that could use some refinement
// take advantage of underscore's after function to only return the results
// after the passed in called back has been called tasks.length number of times
var runParallelTasks = function (tasks, callback) {
	var results = [];

	// the callback we pass into our tasks will only be fired once!
	var recordResults = _.after(tasks.length, function (results) {
		callback(results);
	});

	// invoke the tasks with callbacks and the results container passed in
	tasks.forEach(function (task) {
		task(recordResults, results);
	});
};


// export our two lib functions
// these are exported separately so they could be tested easily,
// but I ran out of time for that
module.exports = {
	runAsyncSeries: runAsyncSeries,
	runParallelTasks: runParallelTasks
};