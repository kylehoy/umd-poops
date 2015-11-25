
var http = require("http"); // load the http library and call it "http"
var server = http.createServer(function(req, res) {
    console.log('hello');
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end("welcome to UMD poops")
});
server.listen(process.env.PORT)