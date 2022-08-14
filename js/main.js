const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const basePrice = 6000;
const inputs = document.querySelectorAll('input');
let totalPrice;


squareRange.addEventListener('input', function() {
	console.log('Input');
	squareInput.value = squareRange.value;
})

squareInput.addEventListener('input', ()=>{
	squareRange.value = squareInput.value; 
})

totalPrice = basePrice * parseInt(squareInput.value);
console.log(totalPrice);
console.log(squareInput.value)
console.log(typeof(squareInput.value))