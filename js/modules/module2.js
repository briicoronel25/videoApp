
myApp.module1 = {
	saySomething(message) {
		console.log(myApp.mainMessage, message, 'I am a module');
	},

	doSomething() {
		console.log('Called from the module');
	}
};