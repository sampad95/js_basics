function len(arr){
	let n = 0
	for(let i in arr){
		n += 1
	}	
	return n
}


A = [1, 5, 7, 3, 9]
console.log(len(A))
