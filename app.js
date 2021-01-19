// A basic Http Server

var http = require('http');
const { say_func } = require('./module1_funciton');

var mod1 = require('./module1_funciton');

// Analyzing Http Server
function onRequest(req, res){
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.write(mod1.exec_func(mod1.say_func,"Hello from Gaurav !! \n\n"));
    res.end();
}

// Function makes the HTTP server works
http.createServer(onRequest).listen(8888);