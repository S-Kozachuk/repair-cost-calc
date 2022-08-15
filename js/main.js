const inputs = document.querySelectorAll('input');
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const repairType = document.querySelectorAll('input[name="type"]');
const houseType = document.querySelectorAll('input[name="building"]');
const basePrice = 6000;
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
	const formatter = new Intl.NumberFormat('ru');
	totalPrice.innerText = formatter.format(calcPrice);
};
calculate();

for (const item of inputs) {
	item.addEventListener('input',()=>{
		calculate();
	})
}