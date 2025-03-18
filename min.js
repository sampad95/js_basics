
function min(numbers){
	let min_val = numbers[0]
	for(let i=0; i < numbers.length; i++){
		if( numbers[i] < min_val){
			min_val = numbers[i]
		}
	}
	return min_val
}



A = [1, 8, 6, -7, 6, 9, 11, 5, 0]
console.log(min(A))
