const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: { 
        type: String,
         required: true },
    description: { 
        type: String,
         required: true },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending'
    },
    dueDate: {
        type: Date,
      },
   
},{
    timestamps:true,
    autoCreate:true,
    autoIndex:true
})

const TaskModel = mongoose.model("Task",TaskSchema)
module.exports = TaskModel