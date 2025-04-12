const taskRouter = require('../module/Task/task.router')

const mainRoute = require('express').Router()

mainRoute.use('/api',taskRouter)

module.exports = mainRoute