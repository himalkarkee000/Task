const TaskModel = require("./task.model")
const taskSvc = require("./task.service")

class TaskController {
    create = async(req,res,next )=>{
      try {
        const data = req.body
        const taskData = await taskSvc.registerTaskService(data)

        res.json({
            result:taskData,
            message:"Task is register Successfully",
            meta:null
        })
      } catch (exception) {
        next(exception)
      }
    }
    show = async(req,res,next)=>{
        try {
            const task = await taskSvc.findOne({
                _id : req.params.id
            })
            res.json({
                result:task,
                message:"Task Detail fetched",
                meta:null
            })
        } catch (exception) {
            next(exception)
            
        }
    }
    delete = async(req,res,next)=>{
        try {
            const data = await taskSvc.findOne({
                _id:req.params.id
            })
            const deleteData = await taskSvc.deleteOne({
                _id:req.params.id
            })
            res.json({
                result:deleteData,
                message:"Task Delete SuccessFully",
                meta:null
            })

            
        } catch (exception) {
            next(exception)
        }
    }
    index =async(req,res,next) =>{
        try {
            const page = +req.query.page || 1
            const limit = +req.query.limit || 5
            const skip =(page-1)*limit

            let filter={}

            if(req.query.search){
                filter ={
                    title: new RegExp(req.query.search,'i')
                }
            }
            const data = await taskSvc.listAll({
                page:page,
                limit:limit,
                skip:skip,
                filter:filter
            })
            const countData = await taskSvc.count({
                filter:filter
            })
            res.json({
                result:data,
                message:"Task Lists",
                meta:{
                    limit:limit,
                    page:page,
                    total:countData
                }
            })
            
        } catch (exception) {
            next(exception)
            
        }
    }
    update=async(req,res,next) =>{
        try {
            const existingTask = await taskSvc.findOne({
                _id:req.params.id
            })
            const payload = await taskSvc.transformUpdateTask(req,existingTask)

            const updatedTask = await taskSvc.update({_id:req.params.id} ,payload)

            res.json({
                result:updatedTask,
                message:"Task Updated Successfully",
                meta:null
            })
            
        } catch (exception) {
            next(exception)
            
        }
    }
    statusUpdate = async(req,res,next) =>{
        try {
            const existingTask = await taskSvc.findOne({
                _id:req.params.id
            })

            const {status} =req.body
            
            const validateStatus = ['pending', 'in-progress', 'completed']
            if(!status || !validateStatus.includes(status)){
               return res.json({
                    result:validateStatus,
                    message:"Please Enter valida Status",
                    meta:null
                })
            }
            const payload = { status }; 
            const updatedStatusTask = await taskSvc.update({ _id: req.params.id }, payload);

            res.json({
                result:updatedStatusTask,
                message:"Status Update Successfully",
                meta:null
            })
        

        } catch (exception) {
            next(exception)
            
        }
    }
    
}

const taskCtrl = new TaskController()
module.exports = taskCtrl