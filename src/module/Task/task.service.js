const { date } = require("joi")
const TaskModel = require("./task.model")

class TaskService {
    registerTaskService= async(data)=>{
        try {
            

            const newTask = new TaskModel(data)
           return await newTask.save()
            
        } catch (exception) {
            throw exception
        }
    }
    findOne = async(filter)=>{
        try {
            const task = await TaskModel.findOne(filter)
            if(!task){
                throw{code:400 , message:"Task Not Found"}
            }
            return task
        } catch (exception) {
            throw exception
            
        }
    }
    deleteOne=async(filter)=>{
        try {
            const response = await TaskModel.findOneAndDelete(filter)
            if(!response){
                throw{code:404,message:"Task Does not exit"}
            }
            return response
            
        } catch (exception) {
            next(exception)
            
        }
    }
    listAll = async({limit,skip,filter={}})=>{
        try {
            
            const response = await TaskModel.find(filter)
            .sort({_id:-1})
            .skip(skip)
            .limit(limit)
            return response
            
        } catch (exception) {
            throw exception
            
        }
    }
    count = async({filter})=>{
        try {
            const countData = await TaskModel.countDocuments(filter)
            return countData
            
        } catch (exception) {
           throw exception
            
        }
    }
    transformUpdateTask = async(req,existingTask)=>{
        try {
            const task ={
                ...req.body
            }
            return task
            
        } catch (exception) {
            throw exception
            
        }
    }
    update = async(filter,payload) =>{
        try {
            const updateTask = await TaskModel.findOneAndUpdate( filter,{$set:payload})
            return updateTask
            
        } catch (exception) {
            throw exception
            
        }
    }

}

const taskSvc = new TaskService()
module.exports = taskSvc