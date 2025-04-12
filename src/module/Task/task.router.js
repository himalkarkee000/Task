const { bodyValidator } = require('../../middleware/validator.middleware')
const taskCtrl = require('./task.controller')
const { TaskValidationDTO } = require('./task.dto')

const taskRouter = require('express').Router()

taskRouter.post('/task',bodyValidator(TaskValidationDTO),taskCtrl.create)
taskRouter.get('/task',taskCtrl.index)
taskRouter.get('/task/:id',taskCtrl.show)
taskRouter.put('/task/:id',taskCtrl.update)
taskRouter.delete('/task/:id',taskCtrl.delete)
taskRouter.patch('/task/:id/status',taskCtrl.statusUpdate)


module.exports = taskRouter