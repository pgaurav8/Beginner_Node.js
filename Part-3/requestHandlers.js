var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }

    var content = "empty";

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });

    // Wait for 10 seconds
    // sleep(10);

    // console.log(content);
    // return content;
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
    
    // return " Hello Upload";

}

exports.start = start;
exports.upload = upload;