document.getElementById('substring').onclick = function() {
	var tekst = document.getElementById('tekst').value;
	var start = parseInt(document.getElementById('numberFrom').value);
	var end = parseInt(document.getElementById('numberEnd').value);
	var outputSpan = document.getElementById('txtOutput');

	if (start <= end && start >= 0 && end <= tekst.length) {
		var substring = tekst.substring(start, end);
		outputSpan.textContent = substring;
	}
};