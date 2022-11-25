require('dotenv').config();
const {Sequelize} = require('sequelize')

module.exports = new Sequelize('postgres://postgres:zekj3ntna@localhost:5432/onlineshopclothes')