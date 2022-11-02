const { nextTick } = require("process")
const ApiError = require("../error/ApiError")

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res) {
        const {id} = req.query
        // if (!id) {
        //     nextTick(ApiError.badRequest('Не задан ID'))
        // }
        res.json(id)
    }
}

module.exports = new UserController()