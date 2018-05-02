const supertest = require('supertest')
const express = require('express')

const api = require('../api.js')
const app = express()

api.init(app, ()=>{

	test('Hello World', () => {
		return supertest(app).get('/')
		.expect(200)
		.expect('Content-Type', /json/)
		.expect('{"response":"Hello world!"}')
	});

})
