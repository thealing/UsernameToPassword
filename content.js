var values;

function run() {
	chrome.storage.local.get(null, function(result) {
		values = result;
		
		navigator.clipboard.readText()
		.then(function(text) {
			navigator.clipboard.writeText(usernameToPassword(text));
		});
	});
}

function usernameToPassword(username) {
	username += values.salt;
	
	var seed = 0;
	
	for (var i = 0; i < username.length; i++) {
		seed *= 61;
		seed += username.charCodeAt(i);
		seed %= 4294967296;
	}
	
	srand(seed);
	
	var password = '';
	
	for (var i = 0; i < values.passwordLength; i++) {
		password += String.fromCharCode(randRange('0'.charCodeAt(), 'z'.charCodeAt()));
	}
	
	return password;
}
