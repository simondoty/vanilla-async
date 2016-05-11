// set up some tests to assert async functionality
var assert = require("assert");
var runAsyncSeries = require("../lib").runAsyncSeries;

suite('implement async functions', function () {
	
	suite('#runAsyncSeries()', function () {
		
		var task = function (value, timeout) { 
		    return function(done) {
		    	console.log(value); 
		        done();
		    };
		};

		var tasks = [
			task(1, 0), 
			task(2, 0), 
			task(3, 0), 
			task(4, 0)
		];

		test('no async case', function() {
			assert.equal(runAsyncSeries(tasks), 

		})
	});
	
});