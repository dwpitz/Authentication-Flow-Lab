const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/', (req, res, next) => {

})

//Registration Page

router.get('/new', (req, res, next) => {
	console.log('hitting registration');
	res.render('users/new.ejs')
})


module.exports = router