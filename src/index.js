const express = require('express');
const app = express();
const path = require('path');

// --- Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, "views"));

// --- Middleware
app.use(express.json());

// --- Routes
app.use(require('./routes/index'));

// --- Static files
app.use(express.static(path.join(__dirname, 'public')));

// --- Server listening
app.listen(app.get('port'), () => {
	console.log('Server on port ' + app.get('port'));
});