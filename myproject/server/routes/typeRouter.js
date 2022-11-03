const Router = require('express')
const { type } = require('os')
const typeController = require('../conntrollers/typeController')
const router = new Router()

router.post('/', typeController.create)
router.get('/', typeController.getAll)

module.exports = router
