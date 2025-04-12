const express = require('express')
require('./db.config')
const  helmet  = require('helmet')
const cors = require('cors')
const Joi = require('joi')
const mainRoute = require('./mainRoute')


const app= express()

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(mainRoute)

app.use((req,res,next)=>{
    next({
        code:404,
        message:"Not Founded"
    })
})


//error handling
 app.use((error,req,res,next)=>{
    let statusCode = error.code || 500
    let msg = error.message || "Internal server Error"
    let data = error.data || null

    if(error instanceof Joi.ValidationError){
        statusCode=422,
        msg="Validation fail",
        data={}

        const errorDetail = error.details

        if(Array.isArray(errorDetail)){
            errorDetail.map((errorObj)=>{
                data[errorObj.context.label] = errorObj.message
            })

        }
        if(statusCode === 11000){
            statusCode = 400 
            data ={};
            const fields = Object.keys(error.keyPattern)
            fields.map((fieldname)=>{
                data[fieldname] = fieldname+" should be unique"
            })
            msg:"Validation failed"
        }
    }

    res.status(statusCode).json({
        result : data,
        message:msg,
        meta:null
    })
 })



module.exports = app