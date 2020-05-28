// Peticion GET

// https://reqres.in/api/users

fetch('https://reqres.in/api/users/1000')
.then(resp => {


//   console.log(resp);
  
    
if(resp.ok){
    resp.json().then(console.log); 
}else{
    //console.log('No existe el usuario 1000');
    throw new Error('No existe el usuario 1000')
}
    // resp.clone().json()
    // .then(usuario =>{
    //     console.log(usuario.data);
        
    // })

    // resp.clone(). json().then(usuario => {
    //     console.log(usuario.data);
        
    // }); 

    // resp.json().then(usuario => {
    //     console.log(usuario.data); 
    // });
    // resp.json().then(console.log);

}).catch( error =>{
    console.log('Error en la peticion');
    console.log(error);
    
    
})
