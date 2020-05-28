// Peticion GET

// https://reqres.in/api/users

fetch( 'https://reqres.in/api/users' )
.then(resp =>resp.json().then())
.then(respObj =>{
    console.log(respObj);
    console.log(respObj.page);
    console.log(respObj.per_page);
    console.log(respObj.total);
})

// fetch('https://www.instagram.com')
// .then(resp => resp.text() ) 
// .then(html => {
//     document.open();
//     document.write(html);
//     document.close();
// })
