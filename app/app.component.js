(function(app) {
	app.AppComponent = 
		ng.core.Componen({
			selector: 'my-app',
			template: '<h1>Hello World</h1>'
		})
		.Class({
			constructor: function {}
		});
})((window.app) || (window.app = {}));