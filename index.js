const express = require('express');
const app = express()
require('./db/db')


app.get('/', (req, res, next) => {
	try {
		console.log('hitting the index route');
		res.render('index.ejs')
	}
	catch (err) {
		next(err)
	}
	})

app.listen(3000, () => {
	console.log('listening at Port 3000');
})