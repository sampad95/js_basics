function null_mat(m, n){

    null_matrix = []

    for(let i = 1; i <= m; i++){
        
        n_mat = []

        for(let j = 1; j <= n; j++){

            n_mat.push(0)
        }
        null_matrix.push(n_mat)
    }
    return null_matrix
}


console.log(null_mat(5, 4))


function identity_mat(m){

    identity_matrix = []

    for(let i = 1; i <= m; i++){
        
        i_mat = []

        for(let j = 1; j <= m; j++){

            if( i===j ){
                i_mat.push(1)
            } 
            else{
                i_mat.push(0)
            }
        }
        identity_matrix.push(i_mat)
    }
    return identity_matrix
}

console.log(identity_mat(5))