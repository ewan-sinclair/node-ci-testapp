init = function(app, callback) {
	app.get("/", (req, res)=> {
		res.json({response: "Hello world!"})
	})

	console.log("API initialised")
	if(callback) callback()
}

module.exports = { init: init }