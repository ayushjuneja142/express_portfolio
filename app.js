<<<<<<< HEAD
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
require('./routes/index.js')(app);
app.listen(port);
=======
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
require('./routes/index.js')(app);
app.listen(port);
>>>>>>> 8a01db8410f34d5bd5d4d0e49c8d18098f721c43
console.log('project running on localhost: ' + port);