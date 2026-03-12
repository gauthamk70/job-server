// import json server
const jsonServer = require('json-server')

// create job server
const jobServer = jsonServer.create()

// router
const router = jsonServer.router('db.json')

// middileware
const middileware = jsonServer.defaults()

// PORT
const PORT = 3000

//create a middileware for job-server
jobServer.use(middileware)

// router for job-server
jobServer.use(router)

jobServer.listen(PORT,()=>{
    console.log(`job-server started running at PORT:${PORT}... waiting for the client`);
    
})