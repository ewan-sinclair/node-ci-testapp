const supertest = require('supertest')
const express = require('express')

const api = require('../api.js')
const app = express()

api.init(app, ()=>{

	describe('Test Hello World', () => {
	  it('hello test', (done) => {
	    return supertest(app).get('/')
	    .expect(200)
	    .expect('Content-Type', /json/)
	    .expect('{"response":"Hello world!"}')
	    .end(done)
	  });
	});

})
