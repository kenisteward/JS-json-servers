var http = require('http');
var u = require('url');

var port = parseInt(process.argv[2] || 1337)
var server = http.createServer(serverLogic);

function serverLogic(req, res) {
	if (req.method != "GET") // only serve gets
		res.end('what kind of api do you think this is? twitch? GET OUTTA HERE');

	var qs = u.parse(req.url, true);

	var result;

	if (/^\/api\/mystery/.test(req.url)) // check for /api/mystery
		result = { "people": [{"Name": "Keni" },{"Name": "Rich" }, {"Name": "Len" }, {"Name": "Ben" }, {"Name": "Bredler" }, 
{"Name": "Mario" }, {"Name": "Justin" }, {"Name": "Alex" }, {"Name": "Kevin" }  ]
	};
	else if (/^\/api\/hello/.test(req.url)) // check for /api/hello
		result = {msg: "Hello World"};


	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	}
	else {
		res.writeHead(404);
		res.end();
	}

}

server.listen(port);