var userLoggedIn = true;

var promise = new Promise( (resolve, reject) => {

	setTimeout(() => {
		if (userLoggedIn) {
			resolve();
		} else {
			reject();
		}
	}, 1000);
});

setTimeout ( () => {
	userLoggedIn = false;
}, 500);

promise.then( () => {
	console.log("User Logged IN")
}).catch(() => {
	console.log("User Not Logged IN")
});