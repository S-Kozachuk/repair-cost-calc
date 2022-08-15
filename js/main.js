const inputs = document.querySelectorAll('input'),
	squareInput = document.querySelector('#square-input'),
	squareRange = document.querySelector('#square-range'),
	repairType = document.querySelectorAll('input[name="type"]'),
	houseType = document.querySelectorAll('input[name="building"]'),
	numberOfRooms = document.querySelectorAll('input[name="rooms"]'),
	basePrice = 6000;
let totalPrice = document.getElementById('total-price');
console.log(numberOfRooms);
squareRange.addEventListener('input', function() {
	squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', ()=>{
	squareRange.value = squareInput.value; 
});

function calculate() {
	let calcPrice = basePrice * parseInt(squareInput.value);
	for(const item of repairType) {
		if (item.checked) {
			calcPrice = calcPrice * parseFloat(item.value);
		}
	}
	for(const item of houseType) {
		if (item.checked) {
			calcPrice = calcPrice * parseFloat(item.value);
		}
	}
	const formatter = new Intl.NumberFormat('ru');
	totalPrice.innerText = formatter.format(calcPrice);
};
calculate();

for (const item of inputs) {
	item.addEventListener('input',()=>{
		calculate();
	})
}