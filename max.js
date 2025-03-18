
function max(numbers){
	let max_val = numbers[0]
	for(let i=0; i < numbers.length; i++){
		if( numbers[i] > max_val){
			max_val = numbers[i]
		}
	}
	return max_val
}


A = [1, 8, 6, -7, 6, 9, 11, 5, 0]
console.log(max(A))
