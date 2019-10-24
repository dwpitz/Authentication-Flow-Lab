const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
	res.send('hitting the user route')

})


module.exports = router