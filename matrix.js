function null_mat(m, n){

    let null_matrix = [];
    for(let i = 1; i <= m; i++){
        
        let n_mat = [];
        for(let j = 1; j <= n; j++){
            n_mat.push(0);
        }
        null_matrix.push(n_mat);
    }
    return null_matrix;
}


console.log(null_mat(5, 4));

function identity_mat(m){

    let identity_matrix = [];
    for(let i = 1; i <= m; i++){
        
        let i_mat = [];
        for(let j = 1; j <= m; j++){
            if( i===j ){
                i_mat.push(1);
            } 
            else{
                i_mat.push(0);
            }
        }
        identity_matrix.push(i_mat);
    }
    return identity_matrix;
}

console.log(identity_mat(5));



function null_mat2(m, n){

    let null_matrix2 = [];
    let i = 1;
    while(i <= m){

        let n_mat2 = [];
        let j = 1;
        while(j <= n){
            n_mat2.push(0);
            j++;
        }
        i++;
        null_matrix2.push(n_mat2);
    }
    return null_matrix2;
}

console.log(null_mat2(5, 4));



function identity_mat2(m){

    let identity_matrix2 = [];
    let i = 1;
    while(i <= m){

        let i_mat2 = [];
        let j = 1;
        while(j <= m){
            if(i===j){
                i_mat2.push(1);
            }
            else{
                i_mat2.push(0);
            } 
            j++;
        }
        i++;
        identity_matrix2.push(i_mat2);
    }
    return identity_matrix2;
}

console.log(identity_mat2(5));


function null_mat3(m, n){
    let null_matrix = new Array(m).fill(new Array(n).fill(0));
    return null_matrix;
}

console.log(null_mat3(5, 4));

function identity_mat3(m){
    // var M = [];
    var M = Array(m);
    for (var i = 0; i < m; i++) {
        M[i] = Array(m);
        for(var j=0;j<m;j++){
<<<<<<< HEAD
            M[i][j]=(i===j)*1.0;
=======
            M[i][j]=(i===j)*1.0; 
>>>>>>> 29ec691 (committed)
        }
    }
    return M;
}

console.log(identity_mat3(5));



function null_mat4(m, n){
    // var M = [];
    var M = Array(m);
    for (var i = 0; i < m; i++) {
        M[i] = Array(n);
        for(var j=0;j<n;j++){
            M[i][j]=0;
        }
    }
    return M;
}

console.log(null_mat4(5,4));