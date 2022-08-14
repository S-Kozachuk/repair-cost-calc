const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

squareRange.addEventListener('input', function() {
	console.log('Input');
	squareInput.value = squareRange.value;
})

squareInput.addEventListener('input', ()=>{
	squareRange.value = squareInput.value; 
})