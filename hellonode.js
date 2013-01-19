var http = require('http');

function onRequest(req,res) {
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello '+req.connection.remoteAddress + '!');

	console.log('Incoming connection from '+req.connection.remoteAddress);
}



var server=http.createServer(onRequest).listen(process.env.PORT || 3000);
