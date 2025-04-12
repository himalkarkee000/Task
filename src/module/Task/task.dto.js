const Joi = require('joi')

const TaskValidationDTO=Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        status: Joi.string().pattern(/^(pending|in-progress|completed)$/).required(),
        dueDate: Joi.date().iso().required()
})

module.exports ={TaskValidationDTO}