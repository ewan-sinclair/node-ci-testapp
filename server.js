const APP_PORT = 5667

init = function(app, callback) {

	app.listen(APP_PORT, () => {
	    console.log('Example app listening on port ' + APP_PORT)
	    if(callback) callback()
	})

}

module.exports = { init: init }