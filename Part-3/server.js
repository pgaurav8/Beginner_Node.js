var http = require("http");
var url = require("url");
var route = require("./router");

function start(route, handle){

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        response.writeHead(200, {"Content-Type": "text/plain"});
        
        route(handle, pathname, response);

        // var content = route(handle, pathname)
        // response.write(content);
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;