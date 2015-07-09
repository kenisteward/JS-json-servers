var ex = require('express');
var cors = require('cors');
var path = require('path');
var app = ex();

app.use(cors());
app.use(ex.static(path.join(__dirname, 'public'))); // if static files exist in /public serve them

app.get('/api/mystery', function (req, res) { //check for /api/mystery

res.writeHead(200, { 'Content-Type': 'application/json' });

var data = { "people": [{"Name": "Keni" },{"Name": "Rich" }, {"Name": "Len" }, {"Name": "Ben" }, {"Name": "Bredler" }, 
{"Name": "Mario" }, {"Name": "Justin" }, {"Name": "Alex" }, {"Name": "Kevin" }  ]
	};

res.end(JSON.stringify(data));
	
});

app.get('/api/hello', function (req, res) { // check for /api/hello

res.json({msg: "Hello World"});
	
});

app.listen(1337);