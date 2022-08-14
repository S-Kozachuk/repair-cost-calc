const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const basePrice = 6000;
const inputs = document.querySelectorAll('input');

squareRange.addEventListener('input', function() {
	squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', ()=>{
	squareRange.value = squareInput.value; 
});

let calculate = (()=>{
	let totalPrice = basePrice * parseInt(squareInput.value);
	console.log(totalPrice)
});
calculate()

for (const item of inputs) {
	item.addEventListener('input',()=>{
		calculate();
	})
}