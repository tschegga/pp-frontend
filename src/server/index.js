var express = require('express');
var path = require('path');
var app = express();

// Server static content for public and node_modules folder
var publicPath = path.resolve(__dirname, "../../public");
app.use(express.static(publicPath));
var nodePath = path.resolve(__dirname, "../../node_modules");
app.use('/modules', express.static(nodePath));

// Serve index.html
app.get('/', function(req, res) {
    res.sendFile(publicPath + "/index.html");
});

// Start server
var server = app.listen(8088, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server is now listening at %s:%s", host, port);
})