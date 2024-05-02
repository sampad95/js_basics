

function mat_mul(A, B){

    let new_mat = []
    if(A[0].length === B.length){
        for(let i=0; i<A.length; i++){
            let arr = []
            for(let j=0; j<B[0].length; j++){
                let c = 0
                for(let k=0; k<A[0].length; k++){
                    c += A[i][k]*B[k][j]
                }
                arr.push(c)
            }
            new_mat.push(arr)
        }
    }
    else{
        return "Matrix multiplication not possible due to musmatch of number of columns of first matrix and number of rows in second matrix"
        
    }
    return new_mat
}


// M = [[1, 2],[3, 4]]
// N = [[3, 4],[1, 2]]
// N = [[3, 4],[1, 2], [5, 6]]

M = [[1, 2],[3, 4]]
N = [[1, 2, 3],[4, 5, 6]]

console.log(mat_mul(M, N))
