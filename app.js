var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

require('./server/router')(app);


app.listen(app.get('port'), function() {
	console.log('Express server listening on port');

});
