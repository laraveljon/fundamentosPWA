console.log("hola");


fetch('noEncontrado.html')
.then(resp => resp.text() )
.then(html => {

    let body = document.querySelect('body');
    body.innerHTML = html;
})
.catch( error =>{
    console.log("Error en la peticion"+"\n" +error);
    
})