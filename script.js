//your JS code here. If required.
document.getElementById('incrementBtn').addEventListener('click', () => {

	let counter = document.getElementById('counter');
	let currentVal = parseInt(counter.innerText);

	alert(currentVal);
	counter.innerText = currentVal + 1;
})
