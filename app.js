var http = require('http');
var router = require('./router');

var server = http.createServer(function(req, res) {
  switch(req.url){
    case '/':
      res.writeHead(200);
      router.hello(res);
      break;
    case '/world':
      res.writeHead(200);
      router.world(res);
      break;
    case '/html':
      res.writeHead(200);
      router.html(res);
      break;
    default:
      res.writeHead(404);
      res.end('Wrong request');

  }
});

server.listen(8083);