var _ = require("underscore");
var lib = require("./lib");


var tasks = [
 function (callback) {
   console.log(1);
   callback();
 },
 function (callback) {
   console.log(2);
   callback();
 },
 function (callback) {
   console.log(3);
   callback();
 }
]

lib.runAsyncSeries(tasks, function() {
	console.log("done");
});