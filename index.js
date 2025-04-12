const http = require('http')
const app = require('./src/config/express.config')

const server = http.createServer(app)
const port = process.env.PORT || 9006


server.listen(port,'localhost',(err)=>{
    if(!err){
        console.log(`Server is running in port ${port}`)
    }
})