const express = require('express')
const http = require('http')

//instancia de express
const app = express()
//http + express
const server = http.createServer(app)
//definiendo puerto
const PORT = process.env.PORT || 8000

//server excuchando
server.listen(PORT, () => console.log(`server runnig in http://localhost:${PORT}`))