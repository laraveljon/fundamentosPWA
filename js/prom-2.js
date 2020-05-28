function sumarUno (numero){

    //console.log("Primer Paso" + numero);
    /* 
     * Se declara una variable para realizar la iteracion de Promse
     * La pormise tiene dos parametros resolve,y reject
     */

     var promesa = new Promise(function(resolve, reject) {

        console.log("Número es : " + numero);
        
        if(numero >= 11){
            console.log("Si es igual o mayor a  : " + numero  + "  Entonces  ... " + "\n");
            
            reject('Es numero es muy alto');
        }
            setTimeout(() => {
                
                
                resolve(numero + 1) 
            }, 800);
     });

    return promesa;
}

// sumarUno( 5 ).then( numeroNuevo  => {
//     console.log("numeroNuevo : " + numeroNuevo);
//     sumarUno(numeroNuevo).then(numeroNuevo2 => {
//         console.log("numeroNuevo2 : " + numeroNuevo2);
    
//     });
    
// });

// sumarUno(5).then( nuevoNumero =>{
//     //console.log(" resolve 1 : " + nuevoNumero);
//     return sumarUno(nuevoNumero);
// })
// .then(nuevoNumero => sumarUno(nuevoNumero) )
//     //console.log("resolve 2 : " + nuevoNumero);
// .then(nuevoNumero =>{
//     //console.log("resolve 3 : " + nuevoNumero);

//     return sumarUno(nuevoNumero);    
// }).then(nuevoNumero =>{
//    console.log("resolve 4 : " + nuevoNumero);

// });

sumarUno(5)
.then( sumarUno )
.then(sumarUno)
.then(sumarUno)
.then(sumarUno)
.then(sumarUno)
.then(sumarUno)
.then(sumarUno)
.then(nuevoNumeron =>{
    console.log("Numero nuevo "+nuevoNumeron);
    
}).catch(error => {
    console.log('ERROR EN PROMESA' + "\n" + error);    
}) 
