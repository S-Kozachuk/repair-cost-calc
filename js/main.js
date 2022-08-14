const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const basePrice = 6000;
const inputs = document.querySelectorAll('input');
let totalPrice = document.getElementById('total-price');

squareRange.addEventListener('input', function() {
	squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', ()=>{
	squareRange.value = squareInput.value; 
});

function calculate() {
	let calcPrice = basePrice * parseInt(squareInput.value);
	console.log(calcPrice);
};
calculate();

for (const item of inputs) {
	item.addEventListener('input',()=>{
		calculate();
	})
}

console.log(totalPrice);