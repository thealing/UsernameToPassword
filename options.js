const passwordLengthInput = document.getElementById("passwordLengthInput");
const saltInput = document.getElementById("saltInput");

chrome.storage.local.get(["passwordLength", "salt"], function(result) {
	passwordLengthInput.value = result.passwordLength;
	saltInput.value = result.salt;
});

passwordLengthInput.addEventListener("input", function() {
	chrome.storage.local.set({ "passwordLength": passwordLengthInput.value });
});

saltInput.addEventListener("input", function() {
	chrome.storage.local.set({ "salt": saltInput.value });
});
