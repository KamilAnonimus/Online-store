const Router = require('express')
const router = new Router()
const brandController = require('../conntrollers/brandController')

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router
