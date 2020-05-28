// Peticion GET

// https://reqres.in/api/users

let usuario = {
    nombre :'Jon',
    edad:54
}

fetch('https://reqres.in/api/users ',{
    method:'POST',//PUT
    body:JSON.stringify(usuario),
    headers:{
        'Content-Type': 'application/json'
    }
})
.then( resp => resp.json() )
.then( console.log)
.catch( error =>{
    console.log("Error en la peticion");
    console.log(error);
    
}); 
