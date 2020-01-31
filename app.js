var http = require('http');
var port = 9900;

var server = http.createServer(function(req,res) {
    res.write('<h1>Welcome to Node With Edureka webinar</h1>')
});

server.listen(port, function(){
    console.log(`Server is running on port ${port}`)
})