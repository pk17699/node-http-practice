var http = require('http');
var url = require('url');

http.createServer((req, res)=>{
    if(req.url == '/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<html><body><h1>Welcome to homepage<h2></body></html>');
        res.end();
    }
    else if(req.url == '/login'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<html><body><h1>This is login page<h2></body></html>');
        res.end();
    }
    else{
        var q= url.parse(req.url,true).query;
        var data = q.username + " " + q.password;
        if(data === "undefined undefined"){
            res.write("either go to home url or login url or enter a valid query url");
            res.end();
        }
        res.end(data);
    }
}).listen(3000);