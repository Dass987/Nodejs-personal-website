const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
	response.render('index.html', {
		title: 'Danniel Website'
	});
});

router.get('/contact', (request, response) => {
	response.render('contact.html', {
		title: 'Contact'
	});
});


module.exports = router;