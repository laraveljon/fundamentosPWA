// function sumarTrue(){
//     return true;
// }


function sumarLento(numero) {

    return  new Promise(function name(resolve, reject) {
        setTimeout(() => {

            resolve(numero + 1);
            //reject('Sumar Lento falló');

        }, 800);
        
    })
}

let sumarRapido = (numero) =>{
   return new Promise((resolve, reject) =>{

   // setTimeout(() => resolve(numero + 1) , 300);

        setTimeout(() => {
            reject('ERROR en sumar rapido');
        }, 10000);

   });
};

// sumarLento(5).then(console.log);
// sumarRapido(10).then(console.log);

Promise.race([sumarLento(5),sumarRapido(10)])
.then(respuesta =>{
    console.log(respuesta);
    
}).catch(console.log)