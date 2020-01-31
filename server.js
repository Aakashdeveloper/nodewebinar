var http = require('http');
var fs = require('fs');
var port = 8900

var server = http.createServer(function(req,res){
    fs.readFile('db.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(port, function(){
    console.log(`Server is running on port ${port}`)
})

