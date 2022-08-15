const inputs = document.querySelectorAll('input'),
	squareInput = document.querySelector('#square-input'),
	squareRange = document.querySelector('#square-range'),
	repairType = document.querySelectorAll('input[name="type"]'),
	houseType = document.querySelectorAll('input[name="building"]'),
	numberOfRooms = document.querySelectorAll('input[name="rooms"]'),
	ceilings = document.querySelector('input[name="ceiling"]'),
	walls = document.querySelector('input[name="walls"]'),
	floor = document.querySelector('input[name="floor"]'),
	basePrice = 6000;
let totalPrice = document.getElementById('total-price');

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
	for(const item of numberOfRooms) {
		if (item.checked) {
			calcPrice = calcPrice * parseFloat(item.value);
		}
	}

	if(ceilings.checked) {
		calcPrice = calcPrice * parseFloat(ceilings.value);
	}
	if(walls.checked) {
		calcPrice = calcPrice * parseFloat(walls.value);
	}
	if(floor.checked) {
		calcPrice = calcPrice * parseFloat(floor.value);
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