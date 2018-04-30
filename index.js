const express = require('express')
const app = express()

const api = require('./api.js')
const server = require('./server.js')

api.init(app, ()=>{
	server.init(app)
})

module.exports = { app: app }